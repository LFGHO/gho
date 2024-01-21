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

export async function approveDelegation(delegatee: string, amount: string) {
    const approveDelegationHash = await walletClient.writeContract({
        address: (`0x${process.env.STABLE_DEBT_TOKEN_ADDRESS}`),
        abi: abi,
        functionName: "approveDelegation",
        args: [delegatee, BigInt(amount)],
    });
    
    await publicClient.waitForTransactionReceipt({hash: approveDelegationHash})
    console.log(`Transaction sent with hash: ${approveDelegationHash}`);
    
    const confirmation = await publicClient.getTransactionConfirmations({hash: approveDelegationHash})
    return confirmation
}

export async function burn(from: string, amount: string) {
    const approveDelegationHash = await walletClient.writeContract({
        address: (`0x${process.env.STABLE_DEBT_TOKEN_ADDRESS}`),
        abi: abi,
        functionName: "burn",
        args: [from, BigInt(amount)],
    });
    
    await publicClient.waitForTransactionReceipt({hash: approveDelegationHash})
    console.log(`Transaction sent with hash: ${approveDelegationHash}`);
    
    const confirmation = await publicClient.getTransactionConfirmations({hash: approveDelegationHash})
    return confirmation
}

export async function decreaseAllowance(_address: string, _value: string) {
    const decreaseAllowanceHash = await walletClient.writeContract({
        address: (`0x${process.env.STABLE_DEBT_TOKEN_ADDRESS}`),
        abi: abi,
        functionName: "decreaseAllowance",
        args: [_address, BigInt(_value)],
    });
    
    await publicClient.waitForTransactionReceipt({hash: decreaseAllowanceHash})
    console.log(`Transaction sent with hash: ${decreaseAllowanceHash}`);
    
    const confirmation = await publicClient.getTransactionConfirmations({hash: decreaseAllowanceHash})
    return confirmation
}

export async function delegationWithSig(
        delegator: string,
        delegatee: string,
        value: bigint,
        deadline: bigint,
        signedMessage: string // v,r,s
    ) {
    const delegationWithSigHash = await walletClient.writeContract({
        address: (`0x${process.env.STABLE_DEBT_TOKEN_ADDRESS}`),
        abi: abi,
        functionName: "delegationWithSig",
        args: [delegator, delegatee, value, deadline,signedMessage],
    });
    
    await publicClient.waitForTransactionReceipt({hash: delegationWithSigHash})
    console.log(`Transaction sent with hash: ${delegationWithSigHash}`);
    
    const confirmation = await publicClient.getTransactionConfirmations({hash: delegationWithSigHash})
    return confirmation
}

export async function increaseAllowance(_address: string, _value: string) {
    const increaseAllowanceHash = await walletClient.writeContract({
        address: (`0x${process.env.STABLE_DEBT_TOKEN_ADDRESS}`),
        abi: abi,
        functionName: "increaseAllowance",
        args: [_address, BigInt(_value)],
    });
    
    await publicClient.waitForTransactionReceipt({hash: increaseAllowanceHash})
    console.log(`Transaction sent with hash: ${increaseAllowanceHash}`);
    
    const confirmation = await publicClient.getTransactionConfirmations({hash: increaseAllowanceHash})
    return confirmation
}

export async function initialize(
        initializingPool: string,
        underlyingAsset: string,
        incentivesController: string,
        debtTokenDecimals: number,
        debtTokenName: string,
        debtTokenSymbol: string,
        params: string
    ) {
    const initializeHash = await walletClient.writeContract({
        address: (`0x${process.env.STABLE_DEBT_TOKEN_ADDRESS}`),
        abi: abi,
        functionName: "decreaseAllowance",
        args: [initializingPool, ],
    });
    
    await publicClient.waitForTransactionReceipt({hash: initializeHash})
    console.log(`Transaction sent with hash: ${initializeHash}`);
    
    const confirmation = await publicClient.getTransactionConfirmations({hash: initializeHash})
    return confirmation
}