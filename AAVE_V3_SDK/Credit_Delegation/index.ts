import {privateKeyToAccount} from 'viem/accounts';
const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

import {approveDelegation} from "./writeContractStable";

async function main() {
    await approveDelegation("0x6087d7B797eb6B4D10266Aa4bA980e9C54fBC2e0", "100")

    const signedMessage = await account.signMessage({
        message: "Hello World",
    })
}

main().catch(console.error);