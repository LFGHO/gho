import { createPublicClient, createTestClient, http } from "viem";
import { sepolia } from "viem/chains";


const { API_URL, PRIVATE_KEY } = process.env;

const client = createPublicClient({
  chain: sepolia,
  transport: http("https://eth-sepolia.g.alchemy.com/v2/5fnaMncNDz4abaRBqh3y3cdlpvsmxzi8"),
});

async function main() {
  // Deploy the GHOVault contract to sepolia
  const vault = await client.deploy("GHOVault", {
    from: PRIVATE_KEY,
  });

  // Print the address of the deployed contract
  console.log("GHOVault deployed to:", vault.address);

  // Print the transaction hash of the deployment
  console.log("Transaction hash:", vault.deployTransaction.hash);

  // Wait for the transaction to be mined
  await vault.deployTransaction.wait();

  // Verify the contract on Etherscan
  await client.verify(vault.address, {
    from: PRIVATE_KEY,
  });

  // Print the Etherscan URL of the contract
  console.log("Etherscan URL:", vault.etherscanUrl);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
