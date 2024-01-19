const CONTRACT_ADDRESS="0x18d179c1c1e1dea8435625b6265fb3a8ea4bf77a"
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
    // Write Contract
    let depositMoney = await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "deposit",
        args: [BigInt(100)],
    })
    await publicClient.waitForTransactionReceipt({hash: depositMoney})

    // Read Contract
    let myBalance = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "balanceOf",
        args: [account.address],
    })
    console.log("Initial value of counter = ", myBalance.toString());
}

main();