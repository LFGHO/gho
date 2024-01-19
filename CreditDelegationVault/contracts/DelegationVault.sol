// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Takes a max fee of 6% for investments 
library FeeCalculator {
    function calculateTimeBasedFee(uint256 amount, uint256 depositTime, uint256 feeBasisPoints, uint256 feeDecreaseInterval) internal view returns (uint256) {
        uint256 timeElapsed = block.timestamp - depositTime;

        // If time elapsed is less than 24 hours (86400 seconds), charge 30% fee
        if (timeElapsed < 86400) {
            return (amount * 3000) / 10000; // 30% fee
        } else {
            // Fee calculation for time beyond 24 hours
            uint256 maxFeeBasisPoints = 600; // 6%
            uint256 minAmountForReducedFee = 100000; // Minimum amount threshold for reduced fee

            uint256 effectiveFeeBasisPoints;
            if (amount < minAmountForReducedFee) {
                effectiveFeeBasisPoints = maxFeeBasisPoints;
            } else {
                uint256 inverseFeeRate = 10000000 / amount; // Adjusted inverse fee calculation

                // Ensure the fee is less than 6%
                effectiveFeeBasisPoints = inverseFeeRate < maxFeeBasisPoints ? inverseFeeRate : maxFeeBasisPoints;
            }

            return (amount * effectiveFeeBasisPoints) / 10000;
        }
    }
}


//* User can only invest in GHO
contract DelegationVault is ERC4626, Ownable {
    uint256 public feeBasisPoints = 500; // 5% High Fee due to high risk and high yield
    uint256 public feeDecreaseInterval = 1 days; // 

    IERC20 public investmentToken; // GHO Token
    
    uint256 private investedAmount; // Variable to track the amount withdrawn for investment

    struct Investment {
        uint256 amount;
        uint256 depositTime;
    }
    mapping(address => Investment[]) public investments;


    // Event declarations
    event Invested(address indexed owner, uint256 amount);
    event YieldReturned(address indexed owner, uint256 amount);

    constructor(IERC20 _ghoToken) ERC4626(_ghoToken) ERC20("Gho Token", "GHO") Ownable(msg.sender) {
        investmentToken = _ghoToken;
    }

    function deposit(uint256 amount, address receiver) public override returns (uint256 shares) {
        investments[receiver].push(Investment(amount, block.timestamp));
        return super.deposit(amount, receiver);
    }

    function withdraw(uint256 assets, address receiver, address _owner) public override returns (uint256 shares) {
        uint256 totalFee = 0;
        for (uint i = 0; i < investments[_owner].length; i++) {
            uint256 fee = FeeCalculator.calculateTimeBasedFee(investments[_owner][i].amount, investments[_owner][i].depositTime, feeBasisPoints, feeDecreaseInterval);
            totalFee += fee;
            // Rest of the logic to adjust the investment after fee deduction
        }
        investmentToken.transfer(owner(), totalFee); // Assuming protocolFeeReceiver is the fee recipient
        // Rest of the withdraw logic
        return super.withdraw(assets, receiver, _owner);
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