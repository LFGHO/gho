// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("GHOVault", function () {
//     let GHOVault;
//     let ghoVault;
//     let owner;
//     let addr1;
//     let addr2;
//     let addrs;
//     let investmentToken;
//     let dexRouter;

//     beforeEach(async function () {
//         [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

//         // Deploy mock investmentToken (GHO Token)
//         const MockToken = await ethers.getContractFactory("MockToken");
//         investmentToken = await MockToken.deploy("Gho Token", "GHO");

//         // Deploy mock dexRouter
//         const MockRouter = await ethers.getContractFactory("MockRouter");
//         dexRouter = await MockRouter.deploy();

//         // Deploy GHOVault
//         const GHOVault = await ethers.getContractFactory("GHOVault");
//         ghoVault = await GHOVault.deploy(investmentToken.address, dexRouter.address);
//     });

//     describe("Deployment", function () {
//         it("Should set the right owner", async function () {
//             expect(await ghoVault.owner()).to.equal(owner.address);
//         });

//         it("Should assign the total supply of tokens to the owner", async function () {
//             const ownerBalance = await ghoVault.balanceOf(owner.address);
//             expect(await ghoVault.totalSupply()).to.equal(ownerBalance);
//         });
//     });

//     describe("Transactions", function () {
//         it("Should transfer tokens between accounts", async function () {
//             // Transfer 50 tokens from owner to addr1
//             await ghoVault.transfer(addr1.address, 50);
//             const addr1Balance = await ghoVault.balanceOf(addr1.address);
//             expect(addr1Balance).to.equal(50);

//             // Transfer 50 tokens from addr1 to addr2
//             await ghoVault.connect(addr1).transfer(addr2.address, 50);
//             const addr2Balance = await ghoVault.balanceOf(addr2.address);
//             expect(addr2Balance).to.equal(50);
//         });

//         it("Should fail if sender doesn’t have enough tokens", async function () {
//             const initialOwnerBalance = await ghoVault.balanceOf(owner.address);

//             // Try to send 1 token from addr1 (0 tokens) to owner (1000 tokens).
//             // `require` will evaluate false and revert the transaction.
//             await expect(
//                 ghoVault.connect(addr1).transfer(owner.address, 1)
//             ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

//             // Owner balance shouldn't have changed.
//             expect(await ghoVault.balanceOf(owner.address)).to.equal(
//                 initialOwnerBalance
//             );
//         });

//         it("Should update balances after transfers", async function () {
//             const initialOwnerBalance = await ghoVault.balanceOf(owner.address);

//             // Transfer 100 tokens from owner to addr1.
//             await ghoVault.transfer(addr1.address, 100);

//             // Transfer another 50 tokens from owner to addr2.
//             await ghoVault.transfer(addr2.address, 50);

//             // Check balances.
//             const finalOwnerBalance = await ghoVault.balanceOf(owner.address);
//             expect(finalOwnerBalance).to.equal(initialOwnerBalance - 150);

//             const addr1Balance = await ghoVault.balanceOf(addr1.address);
//             expect(addr1Balance).to.equal(100);

//             const addr2Balance = await ghoVault.balanceOf(addr2.address);
//             expect(addr2Balance).to.equal(50);
//         });
//     });

//     describe("Fees and Investments", function () {
//         beforeEach(async function () {
//             // Setup and initial deposits...
//         });

//         it("Should correctly calculate fees over time", async function () {
//             // Implement test for fee calculation
//         });

//         it("Should handle deposits and withdrawals correctly", async function () {
//             // Implement test for deposit and withdrawal functionality
//         });

//         it("Should allow only the owner to withdraw for investment", async function () {
//             // Implement test for owner-only withdrawal functionality
//         });
//     });

//     describe("Deposit and Conversion", function () {
//         it("Should handle deposits and token conversion correctly", async function () {
//             // Assuming MockToken for a different ERC20 token and MockRouter for swap simulation
//             const amountToDeposit = 100;
//             const mockERC20Token = await MockToken.deploy("Mock Token", "MCK");

//             // Approve and deposit tokens
//             await mockERC20Token.approve(ghoVault.address, amountToDeposit);
//             await ghoVault.depositAndConvert(mockERC20Token.address, amountToDeposit);

//             // Check if the GHO token balance has increased accordingly
//             // This assumes that the mock router simulates a swap and increases the GHO token balance
//             const newGHOBalance = await investmentToken.balanceOf(ghoVault.address);
//             expect(newGHOBalance).to.be.above(0);
//         });

//         // Additional tests for edge cases, such as depositing with a zero amount, or using the GHO token itself
//     });

//     describe("Withdraw For Investment", function () {
//         it("Should allow owner to withdraw for investment", async function () {
//             const amountToWithdraw = 50;
//             await ghoVault.withdrawForInvestment(amountToWithdraw);
//             const newGHOBalance = await investmentToken.balanceOf(owner.address);
//             expect(newGHOBalance).to.equal(amountToWithdraw);
//         });

//         it("Should fail if non-owner tries to withdraw for investment", async function () {
//             await expect(ghoVault.connect(addr1).withdrawForInvestment(50)).to.be.reverted;
//         });

//         // Test for withdrawing more than the available balance
//         it("Should fail to withdraw more than available", async function () {
//             const excessiveAmount = (await ghoVault.totalAssets()) + 1000;
//             await expect(ghoVault.withdrawForInvestment(excessiveAmount)).to.be.revertedWith("Insufficient balance");
//         });
//     });

//     describe("Return Investment Yield", function () {
//         it("Should allow owner to return investment yield", async function () {
//             const yieldAmount = 50;
//             await investmentToken.transfer(owner.address, yieldAmount);
//             await investmentToken.approve(ghoVault.address, yieldAmount);

//             await ghoVault.returnInvestmentYield(yieldAmount);

//             // Check if the GHO balance of the vault increased by the yield amount
//             const vaultBalance = await investmentToken.balanceOf(ghoVault.address);
//             expect(vaultBalance).to.be.above(0); // Assuming some initial balance
//         });

//         it("Should fail if non-owner tries to return investment yield", async function () {
//             await expect(ghoVault.connect(addr1).returnInvestmentYield(50)).to.be.reverted;
//         });
//     });

//     describe("Time-Based Fee Calculation", function () {
//         beforeEach(async function () {
//             // Setup and initial deposits with timestamps
//         });

//         it("Should calculate decreasing fees over time", async function () {
//             // Simulate time passage and check fee calculation
//             // This might involve manipulating block timestamps in a test environment
//             // Example:
//             await ethers.provider.send("evm_increaseTime", [86400]); // Increase time by 1 day
//             await ethers.provider.send("evm_mine");

//             // Call a function that triggers the fee calculation
//             // Assert that the fee has decreased according to the logic in your contract
//         });

//         // Test cases for edge scenarios like immediate withdrawal after deposit, very long-term holdings, etc.
//         it("Should handle immediate withdrawal after deposit correctly", async function () {
//             const depositAmount = 100;
//             await investmentToken.approve(ghoVault.address, depositAmount);
//             await ghoVault.deposit(depositAmount, owner.address);
        
//             // Immediately withdraw
//             await expect(ghoVault.withdraw(depositAmount, owner.address, owner.address))
//                 .to.emit(ghoVault, 'Withdraw')
//                 .withArgs(owner.address, depositAmount, depositAmount);
            
//             // Check balances after withdrawal
//             const finalBalance = await investmentToken.balanceOf(owner.address);
//             expect(finalBalance).to.equal(initialBalance);
//         });

//         it("Should be safe from reentrancy attacks", async function () {
//             // Deploy a malicious contract that attempts to reenter the GHOVault during withdrawal
//             const MaliciousContract = await ethers.getContractFactory("MaliciousContract");
//             const malicious = await MaliciousContract.deploy(ghoVault.address);
        
//             // Initial deposit to the malicious contract
//             const depositAmount = 100;
//             await investmentToken.transfer(malicious.address, depositAmount);
//             await malicious.deposit(depositAmount);
        
//             // Attempt to withdraw, which triggers reentrancy
//             await expect(malicious.attack())
//                 .to.be.reverted; // Assuming the GHOVault has reentrancy guards
        
//             // Check that the vault's state remains consistent after the attack
//         });
        
//         it("Should handle integer overflows correctly", async function () {
//             // This test depends on the specifics of your contract's arithmetic logic
//             // Example: If your contract has a function that could overflow, test it with values that would cause an overflow
        
//             const largeNumber = ethers.constants.MaxUint256;
//             await expect(ghoVault.someFunctionThatCouldOverflow(largeNumber))
//                 .to.be.reverted; // Assuming the function has overflow checks
//         });        
//     });
// });
