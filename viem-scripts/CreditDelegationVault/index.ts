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
    // Deploy Contract
    const hash = await walletClient.deployContract({
        abi: abi,
        account: account,
        bytecode: bytecode,
        args: [`0x${process.env.GHO_TOKEN_ADDRESS}`],
    });

    console.log(`Contract deployed with hash: ${hash}`);

    const receipt = publicClient.waitForTransactionReceipt({hash});
    const contractAddress = (await receipt).contractAddress;
    console.log(`Contract address: ${contractAddress}`);
}

main().catch(console.error);