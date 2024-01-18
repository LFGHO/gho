// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IUniswapV2Router {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
}

contract GHOVault is ERC4626, Ownable {
    IERC20 public investmentToken; // GHO Token
    IUniswapV2Router public dexRouter; // Uniswap V2 Router

    constructor(IERC20 _ghoToken, IUniswapV2Router _dexRouter) ERC4626(_ghoToken) ERC20("Gho Token", "GHO") Ownable(msg.sender) {
        investmentToken = _ghoToken;
        dexRouter = _dexRouter;
    }

    function depositAndConvert(address tokenAddress, uint256 amount) public {
        require(tokenAddress != address(investmentToken), "GHO deposit not allowed");

        IERC20 token = IERC20(tokenAddress);
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        uint256 balanceBeforeSwap = investmentToken.balanceOf(address(this));
        
        // Approve the DEX to spend the token
        token.approve(address(dexRouter), amount);

        // Define the swap path (token -> GHO)
        address[] memory path = new address[](2);
        path[0] = tokenAddress;
        path[1] = address(investmentToken);

        // Execute the swap (setting amountOutMin to 0 for simplicity, but should be calculated properly)
        dexRouter.swapExactTokensForTokens(
            amount,
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

    // Additional functions for withdrawal, investment, etc.
}
