// const CONTRACT_ADDRESS = '0x7b007a8a32064bd79efefc0f2a7ed32a80ca1fa1';
const CONTRACT_ADDRESS="0xB45EC9f2B5EBeFE1Bb270DeD03B53DB33EB51795"
import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {sepolia} from 'viem/chains';
import {abi, bytecode} from './GHOVaultContract';

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
    let counterPosition = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "asset",
    })
    console.log("Initial value of counter = ", counterPosition.toString());

    let counterUpdate = await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "mint",
        args: [BigInt(100)],
    })
    await publicClient.waitForTransactionReceipt({hash: counterUpdate})

    // // counterPosition = await publicClient.readContract({
    // //     address: CONTRACT_ADDRESS,
    // //     abi: abi,
    // //     functionName: "getCounter",
    // })
    // console.log("After increment: ", counterPosition.toString());
}

main();