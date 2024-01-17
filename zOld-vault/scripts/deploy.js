// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

// require('dotenv').config();

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // For Ethereum Mainnet
  const ghoTokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Token as placeholder
  const uniswapRouterAddress = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";

  console.log("Deploying contracts with the account:", deployer.address);

  const GHOVault = await hre.ethers.getContractFactory("GHOVault");
  // console.log("GHOVault Factory:", GHOVault)

  const ghoVault = await GHOVault.deploy(ghoTokenAddress, uniswapRouterAddress);
  await ghoVault.deployed();

  console.log("GHOVault address:", ghoVault.address);
  console.log(ghoVault);

  await ghoVault.getAddress().then((address) => {
    console.log("GHOVault address:", address);
  });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
