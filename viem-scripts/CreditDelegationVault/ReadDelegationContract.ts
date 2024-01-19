const CONTRACT_ADDRESS="0xdca047042d188465d94d6a44141c94a5ee3ab889"
import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {sepolia} from 'viem/chains';
import {abi, bytecode} from './DelegationVaultContract';

dotenv.config();

// Initialize Account
const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

// Initialize Client
const walletClient = createWalletClient({
    chain: sepolia,
    account: account,
    transport: http(process.env.API_URL),
});

const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(process.env.API_URL),
});

async function main() {
    // Read Contract
    let feesBasisPoints = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "asset",
    })
    console.log("Initial value of counter = ", feesBasisPoints.toString());

    // let counterUpdate = await walletClient.writeContract({
    //     address: CONTRACT_ADDRESS,
    //     abi: abi,
    //     functionName: "mint",
    //     args: [BigInt(100)],
    // })
    // await publicClient.waitForTransactionReceipt({hash: counterUpdate})

    // // counterPosition = await publicClient.readContract({
    // //     address: CONTRACT_ADDRESS,
    // //     abi: abi,
    // //     functionName: "getCounter",
    // })
    // console.log("After increment: ", counterPosition.toString());
}

main();