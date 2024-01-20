const CONTRACT_ADDRESS = '0x7b007a8a32064bd79efefc0f2a7ed32a80ca1fa1';

import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {sepolia} from 'viem/chains';
import {abi, bytecode} from './StableDebtToken';

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

export async function getDelegationWithSigTYPEHASH() {
    const typeHash = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "DELEGATION_WITH_SIG_TYPEHASH",
    })

    return typeHash.toString();
}

export async function getDomainSeparator() {
    const domainSeparator = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "DOMAIN_SEPARATOR",
    })

    return domainSeparator.toString();
}

export async function getEIP712_Revision() {
    const eIP712_Revision = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "EIP712_REVISION",
    })

    return eIP712_Revision.toString();
}

export async function getPool() {
    const pool = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "POOL",
    })

    return pool.toString();
}

export async function getAllowance(fromAddress: string, toAddress: string) {
    const allowance = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "allowance",
        args: [`0x${fromAddress}`, `0x${toAddress}`]
    })

    return allowance.toString();
}

export async function getBalanceOf(accountAddress: string) {
    const balanceOf = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "balanceOf",
        args: [`0x${accountAddress}`]
    })

    return balanceOf.toString();
}

export async function getBorrowAllowance(fromUser: string, toUser: string) {
    const borrowAllowance = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "borrowAllowance",
        args: [`0x${fromUser}`, `0x${toUser}`]
    })

    return borrowAllowance.toString();
}

export async function getDecimals() {
    const decimals = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "decimals",
    })

    return decimals.toString();
}

export async function getAverageStableRate() {
    const avgStableRate = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getAverageStableRate",
    })

    return avgStableRate.toString();
}

export async function getIncentivesController() {
    const incentivesController = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getIncentivesController",
    })

    return incentivesController.toString();
}

export async function getSupplyData() {
    const supplyData = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getSupplyData",
    })

    return supplyData.toString();
}

export async function getTotalSupplyAndAvgRate() {
    const TotalSupplyAndAvgRate = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getTotalSupplyAndAvgRate",
    })

    return TotalSupplyAndAvgRate.toString();
}

export async function getTotalSupplyLastUpdated() {
    const totalSupplyLastUpdated = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getTotalSupplyLastUpdated",
    })

    return totalSupplyLastUpdated.toString();
}

export async function getUserLastUpdated(userAddress: string) {
    const userLastUpdated = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getUserLastUpdated",
        args: [`0x{userAddress}`]
    })

    return userLastUpdated.toString();
}

export async function getUserStableRate(userAddress: string) {
    const userStableRate = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getUserStableRate",
        args: [`0x{userAddress}`]
    })

    return userStableRate.toString();
}

export async function getName() {
    const name = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "name",
    })

    return name.toString();
}

export async function getNonces(userAddress: string) {
    const nonces = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "nonces",
        args: [`0x{userAddress}`]
    })

    return nonces.toString();
}

export async function getPrincipalBalanceOf(userAddress: string) {
    const principalBalance = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "principalBalanceOf",
        args: [`0x{userAddress}`]
    })

    return principalBalance.toString();
}

export async function getSymbol() {
    const symbol = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "symbol",
    })

    return symbol.toString();
}

export async function getTotalSupply() {
    const totalSupply = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "totalSupply",
    })

    return totalSupply.toString();
}
