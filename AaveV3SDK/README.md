### **One SDK for all your aave and GHO needs**

<br>
<br>
<br>
<br>
<br>


# Aave v3 SDK for StableDebtToken and VariableDebtToken  

This TypeScript SDK provides an interface for interacting with Aave v3's StableDebtToken and VariableDebtToken. It includes complete functionalities for both reading from and writing to the Aave protocol, specifically focusing on credit delegation and debt token management.

## Features

- Read and write capabilities for StableDebtToken and VariableDebtToken
- Comprehensive support for Aave's Credit Delegation feature
- Seamless integration with TypeScript projects
- Detailed example workflows and usage guides

# Aave v3 SDK for Pool Contract Interaction
This TypeScript SDK provides comprehensive tools for interacting with Aave v3's Pool contracts, designed to facilitate seamless integration and management of Aave functionalities, especially in the context of using Aave's stablecoin, GHO. It offers developers the tools needed to incorporate Aave's lending, borrowing, and liquidity functionalities into their applications.

## Features
- Full support for interaction with Aave v3 Pool contracts
- Integrated functionalities for Aave's GHO stablecoin
- Enhanced tools for payment and financial tooling involving Aave and GHO
- Modular design for easy use in TypeScript projects

<br>
<br>
<br>

# Installation

To use this SDK, ensure Node.js is installed on your system. Follow these steps to get started:

```bash
$ git  clone https://github.com/LFGHO/gho.git

$ cd gho/AaveV3SDK

$ npm  install
```

For dependency installation, follow these steps:

```bash
$ npm init --yes
$ npm install dotenv viem
$ npm install --save-dev typescript ts-node
$ npx tsc --init
```

<br>
<br>
<br>


# Usage


### The SDK is divided into separate modules for ease of use:

- **readContractStable.ts**: Read functions for StableDebtToken
- **readContractVariable.ts**: Read functions for VariableDebtToken
- **writeContractStable.ts**: Write functions for StableDebtToken
- **writeContractVariable.ts**: Write functions for VariableDebtToken
- **StableDebtToken.ts**: ABI and bytecode for StableDebtToken
- **VariableDebtToken.ts**: ABI and bytecode for VariableDebtToken


## To use the SDK, first, import the desired module in your TypeScript file:  

```typescript
import { readContractStable } from  './readContractStable';
```

You can then call functions as needed. For example (dummy function):

```typescript
async  function  getStableDebtData() {
    const data =  await readContractStable.getDebtData();

    console.log(data);
}
```


To run the example workflow defined in `index.ts`, use:

```bash
$  npm  run  ts-node  index.ts
```

<br>
<br>

  

## Credit Delegation

Now, let's say your want to delegate your aave credits to another person. But you don't want to pay gas on this transcation :( you're already being generous enough by donating ;)

Don't worry, because with the new `delegationWithSig()` function in aave v3, all you have to do is give us a signed message, and we'll do the transaction for you :D

The future is ERC2612 ;)

  

Here's a small demonstration of how you may use these functionalities in your own contract :-

  

```typescript

// index.ts
import {privateKeyToAccount} from 'viem/accounts';
const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

import {delegationWithSigSignedMsg, getRSV} from "./messageSignatures";
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

```

<br>
<br>

## Credit Delegation in Aave

Credit delegation is a feature in Aave that allows depositors to delegate their credit line to other users. This means a depositor can earn interest on their assets while enabling another user to borrow against these assets.

### How It Works

1.  **Deposit**: A user deposits assets into the Aave protocol, receiving aTokens in return.
2.  **Delegate Credit**: The depositor can then delegate their borrowing power to another user.
3.  **Borrow**: The delegated user can borrow against this credit line, subject to the conditions set by the delegator.
4.  **Repayment**: The borrower is responsible for repaying the loan along with any accrued interest.

### Using Credit Delegation with the SDK

To use credit delegation with this SDK:

1.  **Set Delegation Permissions**: Use `writeContractStable.ts` or `writeContractVariable.ts` to set the delegation permissions.
2.  **Borrow on Behalf**: The borrower can then use the `borrow` function from the appropriate module to borrow against the delegated credit line.
3.  **Monitor and Manage**: Use read functions to monitor the status of the loan and manage it accordingly.

<br>
<br>

# Understanding Pool Contracts in Aave
Pool contracts are the cornerstone of the Aave protocol. They manage the core functionalities like deposits, withdrawals, borrowing, repaying, and rate switching.

## How Pool Contracts Work

**Deposits and Withdrawals**: Users can deposit assets into the pool to earn interest or withdraw their deposits.
**Borrowing and Repaying**: Users can borrow assets from the pool and repay their debts.
**Rate Management**: Users can switch between stable and variable rates.

##Benefits of Pool Contracts

**Flexibility:** Offers various options like stable and variable interest rates.
**Liquidity**: Ensures liquidity is maintained in the market.
**Security**: Pool contracts are audited and secure, minimizing risks.

## Using GHO with Pool Contracts
GHO, Aave's stablecoin, is designed to offer a stable and secure medium of exchange. Integrating GHO with Pool contracts offers several benefits:

**Stable Value**: GHO's stable value makes it ideal for predictable financial planning and payments.
**Liquidity**: GHO can be easily converted to other assets within the Aave ecosystem.
**DeFi Integration**: GHO is fully integrated into the DeFi ecosystem, making it versatile for various applications.

## SDK Benefits for Aave and GHO
This SDK provides essential tools for building applications that use Aave's Pool contracts and GHO:

**Ease of Integration**: Simplifies the integration of Aave functionalities into your applications.
**Enhanced Payment Tooling:** Provides the necessary tools to incorporate GHO into your payment systems.
**Comprehensive Functionality**: Covers a wide range of functionalities from basic pool interactions to advanced features.

<br>
<br>

## SDK Examples
The SDK includes example files demonstrating how to use the various functionalities for both Pool contracts and GHO.
Included in this SDK are example files demonstrating how to use the various functionalities:

- `index.ts`: Demonstrates a full workflow using the SDK.
- Other `.ts` files: Provide examples of individual functionalities.

## Contributing

Contributions to this SDK are welcome. Please ensure to follow the contribution guidelines.

## License

[MIT](https://www.mit.edu/~amini/LICENSE.md)

## Disclaimer

This SDK is provided as-is, and its usage is at the user's risk. Users should understand the risks involved in DeFi and smart contract interaction.

For detailed information about Aave's Pool contracts and GHO, refer to the official Aave Documentation.

This README provides an in-depth guide for users to understand the Pool contracts in Aave v3, the use of GHO, and how to utilize the SDK for building applications that integrate these features. Adjustments can be made to better match the specifics of your SDK and repository.
