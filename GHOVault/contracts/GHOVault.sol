// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

library FeeCalculator {
    /**
     * @dev Calculates a time-based fee for an amount based on the time elapsed since deposit.
     *
     * @param amount The amount on which the fee is to be calculated.
     * @param depositTime The timestamp when the deposit was made.
     * @param feeBasisPoints The initial fee in basis points. One basis point is 1/100th of a percent.
     * @param feeDecreaseInterval The interval (in seconds) after which the fee is reduced.
     * @return The calculated fee based on the time elapsed and initial fee settings.
     *
     * The fee is calculated by reducing the initial fee basis points by 100 for each interval passed 
     * since the deposit time. The fee reduction continues until it reaches zero. The function then 
     * applies the effective fee basis points to the amount and returns the calculated fee.
     */
    function calculateTimeBasedFee(uint256 amount, uint256 depositTime, uint256 feeBasisPoints, uint256 feeDecreaseInterval) internal view returns (uint256) {
        uint256 timeElapsed = block.timestamp - depositTime;
        uint256 feeReduction = (timeElapsed / feeDecreaseInterval) * 100; // Reducing 100 basis points for each interval passed
        uint256 effectiveFeeBasisPoints = feeBasisPoints > feeReduction ? feeBasisPoints - feeReduction : 0;
        return (amount * effectiveFeeBasisPoints) / 10000;
    }
}

interface IUniswapV2Router {
    /**
     * @notice Swap an exact amount of input tokens for as many output tokens as possible, 
     * complying with the specified minimum amount of output tokens.
     *
     * @dev This function allows a user to swap a precise amount of input tokens for 
     * as many output tokens as possible, adhering to the `amountOutMin` parameter.
     *
     * @param amountIn The amount of input tokens to send.
     * @param amountOutMin The minimum amount of output tokens that must be received 
     * for the transaction not to revert.
     * @param path An array of token addresses. This array must have at least two elements,
     * where the first element is the address of the token being sent, and the last is the 
     * address of the token to receive.
     * @param to The address to which the output tokens should be sent.
     * @param deadline The timestamp by which the transaction must be confirmed to not revert.
     * This deadline helps ensure the timeliness of transactions and protects users from 
     * price slippage in volatile market conditions.
     *
     * @return amounts An array of uint256, where each element in the array represents the 
     * amount of a token at that index of the `path` array. The first element of the array 
     * is the amount of the input token, and the last element is the amount of the output token.
     */
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
}

contract GHOVault is ERC4626, Ownable {
    bytes32 public immutable  PERMIT_TYPEHASH;
    bytes32 private immutable DOMAIN_SEPARATOR;
    mapping(address => uint256) private nonces;

    uint256 public feeBasisPoints = 100; // 1%
    uint256 public feeDecreaseInterval = 90 days; // 

    IERC20 public investmentToken; // GHO Token
    IUniswapV2Router public dexRouter; // Uniswap V2 Router
    
    uint256 private investedAmount; // Variable to track the amount withdrawn for investment

    struct Investment {
        uint256 amount;
        uint256 depositTime;
    }
    mapping(address => Investment[]) private investments;
    mapping(address => uint256) private userToInterestRate; // Interest rate is in basispoints

    // Event declarations
    event Invested(address indexed owner, uint256 amount);
    event YieldReturned(address indexed owner, uint256 amount);

    constructor(IERC20 _ghoToken, IUniswapV2Router _dexRouter) ERC4626(_ghoToken) ERC20("Gho Token", "GHO") Ownable(msg.sender) {
        investmentToken = _ghoToken;
        dexRouter = _dexRouter;

        DOMAIN_SEPARATOR = keccak256(abi.encode(
            keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
            keccak256(bytes("GHOVault")),
            keccak256(bytes("1")),
            block.chainid,
            address(this)
        ));

        PERMIT_TYPEHASH = keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
    }

    function setUserToInvestmentRate(address user, uint256 interestRate) public onlyOwner {
        userToInterestRate[user] = interestRate;
    }

    function splitSignature(bytes32 signature) private pure returns (uint8 v, bytes32 r, bytes32 s) {
        require(signature.length == 65, "Invalid signature length");

        assembly {
            // First 32 bytes stores the length of the signature
            r := mload(add(signature, 32))
            // Second 32 bytes stores the length of the signature
            s := mload(add(signature, 64))
            // The last byte stores the sign identifier (0 or 1)
            v := byte(0, mload(add(signature, 96)))
        }

        if (v < 27) {
            v += 27;
        }

        require(v == 27 || v == 28, "Invalid signature value");

        return (v, r, s);
    }

    function getNonce(address user) public view returns (uint256) {
        return nonces[user];
    }

    function setNonce(address user, uint256 nonce) public {
        nonces[user] = nonce;
    }

    function updateNonce(address user) public {
        nonces[user]++;
    }

    function getDomainSeparator() private view returns (bytes32) {
        return DOMAIN_SEPARATOR;
    }

    function deposit(uint256 amount, address receiver) public override returns (uint256 shares) {
        investments[receiver].push(Investment(amount, block.timestamp));
        // set default interest rate of 2%, but first check if the user has already deposited before
        if (userToInterestRate[receiver] == 0) {
            userToInterestRate[receiver] = 200; // 2%
        }
        return super.deposit(amount, receiver);
    }

    function depositWithPermit(uint256 assets, address receiver, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {
        IERC20Permit(address(investmentToken)).permit(msg.sender, address(this), assets, deadline, v, r, s);
        require(IERC20(investmentToken).transferFrom(msg.sender, address(this), assets), "Transfer failed");

        investments[receiver].push(Investment(assets, block.timestamp));
        // set default interest rate of 2%, but first check if the user has already deposited before
        if (userToInterestRate[receiver] == 0) {
            userToInterestRate[receiver] = 200; // 2%
        }
        emit Invested(receiver, assets);
    }


    function withdraw(uint256 assets, address receiver, address _owner) public override returns (uint256 shares) {
        uint256 totalFee = 0;
        for (uint i = 0; i < investments[_owner].length; i++) {
            uint256 fee = FeeCalculator.calculateTimeBasedFee(investments[_owner][i].amount, investments[_owner][i].depositTime, feeBasisPoints, feeDecreaseInterval);
            totalFee += fee;
            // Rest of the logic to adjust the investment after fee deduction
        }
        investmentToken.transfer(owner(), totalFee); // Assuming protocolFeeReceiver is the fee recipient
        assets -= totalFee; // Deduct this fee from the assets being withdrawn
        
        // Now, add the interest on this amount
        uint256 interestRate = userToInterestRate[_owner];
        uint256 interest = (assets * interestRate) / 10000;
        assets += interest;

        // Rest of the withdraw logic
        return super.withdraw(assets, receiver, _owner);
    }

    function depositAndConvert(address tokenAddress, uint256 assets) public {
        require(tokenAddress != address(investmentToken), "GHO deposit not allowed");

        IERC20 token = IERC20(tokenAddress);
        require(token.transferFrom(msg.sender, address(this), assets), "Transfer failed");

        uint256 balanceBeforeSwap = investmentToken.balanceOf(address(this));
        if (userToInterestRate[msg.sender] == 0) {
            userToInterestRate[msg.sender] = 200; // 2%
        }
        
        // Approve the DEX to spend the token
        token.approve(address(dexRouter), assets);

        // Define the swap path (token -> GHO)
        address[] memory path = new address[](2);
        path[0] = tokenAddress;
        path[1] = address(investmentToken);

        // Execute the swap (setting amountOutMin to 0 for simplicity, but should be calculated properly)
        dexRouter.swapExactTokensForTokens(
            assets,
            0, // Ideally, set this to a reasonable amount to mitigate slippage
            path,
            address(this),
            block.timestamp + 300 // 5 minutes deadline
        );

        uint256 balanceAfterSwap = investmentToken.balanceOf(address(this));
        uint256 amountGHO = balanceAfterSwap - balanceBeforeSwap;

        // Mint vault shares to the depositor based on the amount of GHO received
        _mint(msg.sender, amountGHO);
    }

    // Function for the owner to withdraw funds for investment
    function withdrawForInvestment(uint256 amount) public onlyOwner {
        require(amount <= totalAssets() - investedAmount, "Insufficient balance");
        investedAmount += amount;
        investmentToken.transfer(msg.sender, amount);
        emit Invested(msg.sender, amount);
    }

    // Function for the owner to return yield (investment returns)
    function returnInvestmentYield(uint256 amount) public onlyOwner {
        require(investmentToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        investedAmount -= amount;
        emit YieldReturned(msg.sender, amount);
    }

    // Override totalAssets to account for invested amount
    function totalAssets() public view override returns (uint256) {
        return super.totalAssets() + investedAmount;
    }
}

/*
The feeDecreaseInterval variable in the GHOVault contract represents the time interval after which the fee percentage will decrease. Let's break down its purpose and how it works:

Purpose: The purpose of the feeDecreaseInterval is to gradually decrease the fee percentage charged by the GHOVault contract over time. By decreasing the fee percentage, the contract aims to incentivize long-term investments and provide more favorable terms for investors.

How it works: The feeDecreaseInterval is set to a specific duration, which in this case is 1 days. This means that every 1 day, the fee percentage will decrease.

Here's a high-level overview of how it works:

Initially, the feeBasisPoints variable is set to a certain value, representing the fee percentage (e.g., 100 basis points = 1%).
After every 1 day, the contract will trigger a mechanism to decrease the fee percentage.
The specific mechanism for decreasing the fee percentage is not provided in the code excerpt you shared. It could involve a calculation based on the current fee percentage or follow a predefined schedule.
The decreased fee percentage will then be applied to future transactions or operations within the GHOVault contract.
It's important to note that the exact implementation of the fee decrease mechanism is not visible in the provided code excerpt. You would need to examine the rest of the contract code or any related functions to understand the specific logic behind the fee decrease process.

Overall, the feeDecreaseInterval variable allows the GHOVault contract to gradually reduce the fee percentage over time, providing potential benefits to investors and encouraging long-term participation in the investment platform.

*/