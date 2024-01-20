import { ethers } from 'ethers';

export function delegationWithSigSignedMsg(DOMAIN_SEPARATOR: string, DELEGATION_WITH_SIG_TYPEHASH: string, delegatee: string, value: bigint, currentValidNonce: bigint, deadline: bigint) {
    // Ensure inputs are correctly formatted

    // Encode the inner part using ethers.js
    const encodedInner = ethers.utils.defaultAbiCoder.encode(
        ["bytes32", "address", "uint256", "uint256", "uint256"],
        [DELEGATION_WITH_SIG_TYPEHASH, delegatee, value, currentValidNonce, deadline]
    );

    // Hash the encoded inner part
    const hashedInner = ethers.utils.keccak256(encodedInner);

    // Encode everything together
    const encoded = ethers.utils.solidityPack(
        ["string", "bytes32", "bytes32"],
        ["\x19\x01", DOMAIN_SEPARATOR, hashedInner]
    );

    return encoded;
}

export function getRSV (signedMessage: string) {
    const r: string = signedMessage.slice(0, 66);
    const s: string = '0x' + signedMessage.slice(66, 130);
    const v: number = parseInt(signedMessage.slice(130, 132), 8);

    return { r, s, v };
}