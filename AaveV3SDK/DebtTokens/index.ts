import {privateKeyToAccount} from 'viem/accounts';
const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

import {delegationWithSigSignedMsg, getRSV} from "./delgationSignature";
import {approveDelegation, delegationWithSig} from "./writeContractVariable";
import {getDomainSeparator, getDelegationWithSigTYPEHASH, getNonces} from "./readContractStable";


async function main() {
    // await approveDelegation("0x6087d7B797eb6B4D10266Aa4bA980e9C54fBC2e0", "100")
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const oneDayInSeconds = 24 * 60 * 60;
    const deadline = nowInSeconds + oneDayInSeconds;
    console.log("deadline = ", deadline)

    const domainSeparator = await getDomainSeparator();
    const delegationWithSigTYPEHASH = await getDelegationWithSigTYPEHASH();
    // const nonces = await getNonces("6087d7B797eb6B4D10266Aa4bA980e9C54fBC2e0");
    const nonces = "0";

    const messageToSign = delegationWithSigSignedMsg(domainSeparator, delegationWithSigTYPEHASH, "6087d7B797eb6B4D10266Aa4bA980e9C54fBC2e0", BigInt(100), BigInt(nonces), BigInt(deadline));
    console.log("MessageToSign: \n\n",messageToSign, "\n\n");
    const signedMessage = await account.signMessage({
        message: messageToSign
    })
    console.log("SignedMessage: \n\n",signedMessage, "\n\n");

    const vrs = getRSV(signedMessage);
    console.log("r=", vrs.r);
    console.log("s=", vrs.s);
    console.log("v=", vrs.v);

    console.log("\n\nCalling delegationWithSig: \n\n")
    const delegationWithSigHash = await delegationWithSig(
        "6087d7B797eb6B4D10266Aa4bA980e9C54fBC2e0",
        "8c71189996B1a8472650e7A8723411Ee3276FF61",
        100,
        deadline,
        signedMessage
    );
    console.log(`Transaction sent with hash: ${delegationWithSigHash}`);
}

main().catch(console.error);