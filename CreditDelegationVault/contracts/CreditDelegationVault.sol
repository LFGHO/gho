// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

library FeeCalculator {
    
    /**
     * @dev Calculates the total fee for a withdrawal from the vault.
     *
     * @param avgStableRate The average stable rate charged to the vault (in basis points).
     * @param amountInvested The amount that was initially invested in the vault.
     * @param interestEarned The interest earned on the investment (in basis points).
     * @param feeBasisPoints The fee charged on the interest earned (in basis points).
     * @return totalFee The total fee amount.
     */
    function calculateFee(
        uint256 avgStableRate,
        uint256 amountInvested,
        uint256 interestEarned,
        uint256 feeBasisPoints
    ) public pure returns (uint256 totalFee) {
        // Convert basis points to a decimal
        uint256 stableRateFee = avgStableRate * amountInvested / 10000;
        uint256 additionalFee = (interestEarned * amountInvested / 10000) * feeBasisPoints / 10000;
        
        // Calculate the total fee
        totalFee = stableRateFee + additionalFee;
        return totalFee;
    }

    /**
     * @dev Calculates a fee based on the profit percentage.
     * @param originalAmount The original amount invested.
     * @param newAmount The new amount after investment growth.
     * @return feeBasisPoints The fee in basis points (1% to 8%).
     */
    function calculateFeeBasisPoints(uint256 originalAmount, uint256 newAmount) public pure returns (uint256 feeBasisPoints) {
        if(newAmount <= originalAmount) {
            // No profit or a loss
            return 0;
        }

        uint256 profit = newAmount - originalAmount;
        uint256 profitPercentage = (profit * 10000) / originalAmount; // In basis points

        // Scale the fee between 1% and 8% based on profit percentage
        feeBasisPoints = scaleFee(profitPercentage);

        return feeBasisPoints;
    }

    /**
     * @dev Scales the fee based on profit percentage.
     * @param profitPercentage The profit percentage in basis points.
     * @return scaledFee The scaled fee in basis points.
     */
    function scaleFee(uint256 profitPercentage) internal pure returns (uint256 scaledFee) {
        // Define the minimum and maximum fee in basis points (1% and 8%)
        uint256 minFee = 100; // 1%
        uint256 maxFee = 800; // 8%

        // Logic to scale the fee
        // As an example, we linearly scale the fee based on profit percentage
        // Adjust this logic based on how aggressively you want to scale the fee
        uint256 feeRange = maxFee - minFee;
        scaledFee = minFee + ((profitPercentage * feeRange) / 10000);

        // Ensure the fee is within the bounds
        if (scaledFee > maxFee) {
            scaledFee = maxFee;
        }

        return scaledFee;
    }
}


//* User can only invest in GHO; Gives back all the assets and empties vault every 24 hours
contract CreditDelegationVault is ERC4626, Ownable {
    uint256 public feeBasisPoints = 500; // (Default)5% High Fee due to high risk and high yield
    uint256 public feeDecreaseInterval = 1 days; // Intraday Trading
    
    uint256 private investedAmount; // Variable to track the amount withdrawn for investment
    
    IERC20 public investmentToken; // GHO Token
    address constant STABLE_DEBT_TOKEN = 0xd1CF2FBf4fb82045eE0B116eB107d29246E8DCe9;
    address constant public VARIABLE_DEBT_TOKEN = 0x0562453c3DAFBB5e625483af58f4E6D668c44e19;
    address constant public V3_POOL_IMPLEMENTATION = 0xd1CF2FBf4fb82045eE0B116eB107d29246E8DCe9;

    // State variable to store original amount invested
    uint256 public originalAmountInvested;

    // Mapping to track daily profits (date => profit)
    // The key is a timestamp representing the start of each day
    mapping(uint256 => uint256) private dayToAPY;

    // Function to update and return total earnings
    function setTodaysAPY() public onlyOwner {
        uint256 todayProfit = totalAssets() - originalAmountInvested;
        originalAmountInvested = 0; // Reset the vault
        
        // Get the timestamp for the start of today
        uint256 today = block.timestamp - (block.timestamp % 86400); // 86400 seconds in a day

        // Update the daily profits mapping
        dayToAPY[today] = todayProfit;
    }

    // Function to get the profit for a specific day
    // The `date` parameter should be a timestamp representing the start of that day
    function getDatToAPY(uint256 date) public view returns (uint256) {
        return dayToAPY[date];
    }

    struct Investment {
        uint256 amount;
        uint256 depositTime;
    }
    mapping(address => Investment) private userToInvestment;
    address[] private userAddresses;  // Array to store user addresses

    // Event declarations
    event Invested(address indexed owner, uint256 amount);
    event YieldReturned(address indexed owner, uint256 amount);
    event VaultEmptied(address indexed owner, uint256 amount);
    event AssetsReturned(address indexed owner, uint256 amount);
    event InvestmentMade(address indexed investor, uint256 amount, uint256 timestamp);

    modifier onlyOncePerDay() {
        require(userToInvestment[msg.sender].depositTime < block.timestamp - (block.timestamp % 86400), "Investment already made today");
        _;
    }    

    constructor(IERC20 _ghoToken) ERC4626(_ghoToken) ERC20("Gho Token", "GHO") Ownable(msg.sender) {
        investmentToken = _ghoToken;
        originalAmountInvested = 0;
    }

    function setFeeBasisPoints(uint256 _feeBasisPoints) private onlyOwner {
        feeBasisPoints = _feeBasisPoints;
    }

    function emptyVault() public onlyOwner {
        setTodaysAPY();
        uint256 intraDayProfit = totalAssets() - originalAmountInvested;

        // Transfer the assets back to their respective owners
        for (uint256 i = 0; i < userAddresses.length; i++) {
            uint256 assets = maxWithdraw(userAddresses[i]);
            // calculate what share of profit goes to this user by diving their assets by the total assets
            uint256 profit = intraDayProfit * assets / totalAssets();
            withdraw(assets + profit, userAddresses[i], userAddresses[i]);
            
            emit VaultEmptied(userAddresses[i], assets);
        }

        uint256 _feeBasisPoints = FeeCalculator.calculateFeeBasisPoints(originalAmountInvested, totalAssets());
        setFeeBasisPoints(_feeBasisPoints);
        // Reset the vault
        originalAmountInvested = 0;
    }    

    /// Block users from depositing or withdrawing assets when the vault is going through it's intraday investment cycle
    function depositWithPermit(uint256 assets, address receiver, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public onlyOwner onlyOncePerDay {
        // if user already have an investment, revert and emit and event

        IERC20Permit(address(investmentToken)).permit(msg.sender, address(this), assets, deadline, v, r, s);
        require(IERC20(investmentToken).transferFrom(msg.sender, address(this), assets), "Transfer failed");

        userToInvestment[receiver] = Investment(assets, block.timestamp);
        originalAmountInvested += assets;

        emit Invested(receiver, assets);
    }

    function deposit(uint256 assets, address receiver) public override onlyOwner onlyOncePerDay returns (uint256 shares) {
        userToInvestment[receiver] = Investment(assets, block.timestamp);
        originalAmountInvested += assets;

        return super.deposit(assets, receiver);
    }

    // Only the owner can withdraw funds (and then manually send back the earnings back to users)
    function withdraw(uint256 assets, address receiver, address _owner) public override onlyOwner returns (uint256 shares) {
        // call calculatefee on the "assets", to deduct the fee from the assets
        uint256 fee = FeeCalculator.calculateFeeBasisPoints(originalAmountInvested, totalAssets());
        uint256 feeAmount = assets * fee / 10000;
        uint256 amount = assets - feeAmount;
        return super.withdraw(amount, receiver, _owner);
    }

    function redeem(uint256 shares, address receiver, address _owner) public override onlyOwner returns (uint256 assets) {
        return super.redeem(shares, receiver, _owner);
    }

    function mint(uint256 shares, address receiver) public override onlyOwner returns (uint256) {
        return super.mint(shares, receiver);
    }

    // Function for the owner to withdraw funds for investment
    function withdrawForInvestment(uint256 amount) public onlyOwner onlyOncePerDay {
        require(amount <= totalAssets() - investedAmount, "Insufficient balance");
        investedAmount += amount;
        investmentToken.transfer(msg.sender, amount);
        emit Invested(msg.sender, amount);
    }

    // Function for the owner to return yield (investment returns)
    function returnInvestmentYield(uint256 amount) public onlyOwner onlyOncePerDay {
        require(investmentToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        investedAmount -= amount;
        emit YieldReturned(msg.sender, amount);

        emptyVault();
    }

    // Override totalAssets to account for invested amount
    function totalAssets() public view override returns (uint256) {
        return super.totalAssets() + investedAmount;
    }
}

/*
The feeDecreaseInterval variable in the CreditDelegationVault contract represents the time interval after which the fee percentage will decrease. Let's break down its purpose and how it works:

Purpose: The purpose of the feeDecreaseInterval is to gradually decrease the fee percentage charged by the CreditDelegationVault contract over time. By decreasing the fee percentage, the contract aims to incentivize long-term investments and provide more favorable terms for investors.

How it works: The feeDecreaseInterval is set to a specific duration, which in this case is 1 days. This means that every 1 day, the fee percentage will decrease.

Here's a high-level overview of how it works:

Initially, the feeBasisPoints variable is set to a certain value, representing the fee percentage (e.g., 100 basis points = 1%).
After every 1 day, the contract will trigger a mechanism to decrease the fee percentage.
The specific mechanism for decreasing the fee percentage is not provided in the code excerpt you shared. It could involve a calculation based on the current fee percentage or follow a predefined schedule.
The decreased fee percentage will then be applied to future transactions or operations within the CreditDelegationVault contract.
It's important to note that the exact implementation of the fee decrease mechanism is not visible in the provided code excerpt. You would need to examine the rest of the contract code or any related functions to understand the specific logic behind the fee decrease process.

Overall, the feeDecreaseInterval variable allows the CreditDelegationVault contract to gradually reduce the fee percentage over time, providing potential benefits to investors and encouraging long-term participation in the investment platform.

*/