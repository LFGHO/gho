import dotenv from 'dotenv';
import { ByteArray, createPublicClient, createWalletClient, http, encodeAbiParameters, parseAbiParameters } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {sepolia} from 'viem/chains';
import {abi, bytecode} from './PoolToken';

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


// WriteContract Functions

export async function borrow(_address: string, amount: string) {
    const approveHash = await walletClient.writeContract({
        address: (`0x${process.env.STABLE_DEBT_TOKEN_ADDRESS}`),
        abi: abi,
        functionName: "borrow",
        args: [_address, BigInt(amount)],
    });
    
    await publicClient.waitForTransactionReceipt({hash: approveHash})
    console.log(`Transaction sent with hash: ${approveHash}`);
    
    const confirmation = await publicClient.getTransactionConfirmations({hash: approveHash})
    return confirmation
}
