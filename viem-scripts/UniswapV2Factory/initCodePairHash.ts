// const CONTRACT_ADDRESS = '0x7b007a8a32064bd79efefc0f2a7ed32a80ca1fa1';
const CONTRACT_ADDRESS="0x57a22c304cee6e74bc50ec8806fcacf3870ce3c4"
import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {sepolia} from 'viem/chains';
import {abi, bytecode} from './UniswapContract';

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
        functionName: "INIT_CODE_PAIR_HASH",
    })
    console.log("Initial value of counter = ", counterPosition.toString());
}

main();