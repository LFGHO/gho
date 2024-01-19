export const abi = [
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_ghoToken",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      }
    ],
    "name": "AddressEmptyCode",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "AddressInsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      }
    ],
    "name": "ERC4626ExceededMaxDeposit",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      }
    ],
    "name": "ERC4626ExceededMaxMint",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      }
    ],
    "name": "ERC4626ExceededMaxRedeem",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      }
    ],
    "name": "ERC4626ExceededMaxWithdraw",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FailedInnerCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MathOverflowedMulDiv",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Invested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "YieldReturned",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "asset",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "convertToAssets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      }
    ],
    "name": "convertToShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeBasisPoints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeDecreaseInterval",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "investmentToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "maxDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "maxMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "maxRedeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "maxWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      }
    ],
    "name": "previewDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "previewMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "previewRedeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      }
    ],
    "name": "previewWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "redeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "returnInvestmentYield",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalAssets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawForInvestment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

export const bytecode = "0x60c0604052610258600655620151806007553480156200001e57600080fd5b506040516200373538038062003735833981810160405281019062000044919062000471565b33816040518060400160405280600981526020017f47686f20546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f47484f00000000000000000000000000000000000000000000000000000000008152508160039081620000c391906200071d565b508060049081620000d591906200071d565b505050600080620000ec836200021360201b60201c565b9150915081620000fe57601262000100565b805b60ff1660a08160ff16815250508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001b95760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001b0919062000815565b60405180910390fd5b620001ca816200032d60201b60201c565b5080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000927565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1660405160240160405160208183030381529060405263313ce56760e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516200028a9190620008ab565b600060405180830381855afa9150503d8060008114620002c7576040519150601f19603f3d011682016040523d82523d6000602084013e620002cc565b606091505b5091509150818015620002e157506020815110155b156200031e57600081806020019051810190620002ff9190620008f5565b905060ff801681116200031c576001819450945050505062000328565b505b6000809350935050505b915091565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200042582620003f8565b9050919050565b6000620004398262000418565b9050919050565b6200044b816200042c565b81146200045757600080fd5b50565b6000815190506200046b8162000440565b92915050565b6000602082840312156200048a5762000489620003f3565b5b60006200049a848285016200045a565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200052557607f821691505b6020821081036200053b576200053a620004dd565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005a57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000566565b620005b1868362000566565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005fe620005f8620005f284620005c9565b620005d3565b620005c9565b9050919050565b6000819050919050565b6200061a83620005dd565b62000632620006298262000605565b84845462000573565b825550505050565b600090565b620006496200063a565b620006568184846200060f565b505050565b5b818110156200067e57620006726000826200063f565b6001810190506200065c565b5050565b601f821115620006cd57620006978162000541565b620006a28462000556565b81016020851015620006b2578190505b620006ca620006c18562000556565b8301826200065b565b50505b505050565b600082821c905092915050565b6000620006f260001984600802620006d2565b1980831691505092915050565b60006200070d8383620006df565b9150826002028217905092915050565b6200072882620004a3565b67ffffffffffffffff811115620007445762000743620004ae565b5b6200075082546200050c565b6200075d82828562000682565b600060209050601f83116001811462000795576000841562000780578287015190505b6200078c8582620006ff565b865550620007fc565b601f198416620007a58662000541565b60005b82811015620007cf57848901518255600182019150602085019450602081019050620007a8565b86831015620007ef5784890151620007eb601f891682620006df565b8355505b6001600288020188555050505b505050505050565b6200080f8162000418565b82525050565b60006020820190506200082c600083018462000804565b92915050565b600081519050919050565b600081905092915050565b60005b83811015620008685780820151818401526020810190506200084b565b60008484015250505050565b6000620008818262000832565b6200088d81856200083d565b93506200089f81856020860162000848565b80840191505092915050565b6000620008b9828462000874565b915081905092915050565b620008cf81620005c9565b8114620008db57600080fd5b50565b600081519050620008ef81620008c4565b92915050565b6000602082840312156200090e576200090d620003f3565b5b60006200091e84828501620008de565b91505092915050565b60805160a051612dd3620009626000396000610b3a015260008181610b6c015281816111a30152818161166d01526118940152612dd36000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c8063715018a61161011a578063ba087652116100ad578063ce96cb771161007c578063ce96cb771461063d578063d905777e1461066d578063dd62ed3e1461069d578063ef8b30f7146106cd578063f2fde38b146106fd576101fa565b8063ba0876521461058f578063bdd2a892146105bf578063c63d75b6146105dd578063c6e6f5921461060d576101fa565b8063a9059cbb116100e9578063a9059cbb146104e1578063b3d7f6b914610511578063b460af9414610541578063b8606eef14610571576101fa565b8063715018a61461046b5780638da5cb5b1461047557806394bf804d1461049357806395d89b41146104c3576101fa565b80631ca3341811610192578063402d267d11610161578063402d267d146103ab5780634cdad506146103db5780636e553f651461040b57806370a082311461043b576101fa565b80631ca334181461032357806323b872dd1461033f578063313ce5671461036f57806338d52e0f1461038d576101fa565b8063095ea7b3116101ce578063095ea7b3146102895780630a28a477146102b95780630f576665146102e957806318160ddd14610305576101fa565b80622703a2146101ff57806301e1d1141461021d57806306fdde031461023b57806307a2d13a14610259575b600080fd5b610207610719565b6040516102149190612399565b60405180910390f35b61022561073f565b60405161023291906123cd565b60405180910390f35b61024361075b565b6040516102509190612478565b60405180910390f35b610273600480360381019061026e91906124cb565b6107ed565b60405161028091906123cd565b60405180910390f35b6102a3600480360381019061029e9190612536565b610801565b6040516102b09190612591565b60405180910390f35b6102d360048036038101906102ce91906124cb565b610824565b6040516102e091906123cd565b60405180910390f35b61030360048036038101906102fe91906124cb565b610838565b005b61030d6109a2565b60405161031a91906123cd565b60405180910390f35b61033d600480360381019061033891906124cb565b6109ac565b005b610359600480360381019061035491906125ac565b610aff565b6040516103669190612591565b60405180910390f35b610377610b2e565b604051610384919061261b565b60405180910390f35b610395610b68565b6040516103a29190612645565b60405180910390f35b6103c560048036038101906103c09190612660565b610b90565b6040516103d291906123cd565b60405180910390f35b6103f560048036038101906103f091906124cb565b610bba565b60405161040291906123cd565b60405180910390f35b6104256004803603810190610420919061268d565b610bce565b60405161043291906123cd565b60405180910390f35b61045560048036038101906104509190612660565b610c4d565b60405161046291906123cd565b60405180910390f35b610473610c95565b005b61047d610ca9565b60405161048a9190612645565b60405180910390f35b6104ad60048036038101906104a8919061268d565b610cd3565b6040516104ba91906123cd565b60405180910390f35b6104cb610d55565b6040516104d89190612478565b60405180910390f35b6104fb60048036038101906104f69190612536565b610de7565b6040516105089190612591565b60405180910390f35b61052b600480360381019061052691906124cb565b610e0a565b60405161053891906123cd565b60405180910390f35b61055b600480360381019061055691906126cd565b610e1e565b60405161056891906123cd565b60405180910390f35b610579610f82565b60405161058691906123cd565b60405180910390f35b6105a960048036038101906105a491906126cd565b610f88565b6040516105b691906123cd565b60405180910390f35b6105c761100c565b6040516105d491906123cd565b60405180910390f35b6105f760048036038101906105f29190612660565b611012565b60405161060491906123cd565b60405180910390f35b610627600480360381019061062291906124cb565b61103c565b60405161063491906123cd565b60405180910390f35b61065760048036038101906106529190612660565b611050565b60405161066491906123cd565b60405180910390f35b61068760048036038101906106829190612660565b61106c565b60405161069491906123cd565b60405180910390f35b6106b760048036038101906106b29190612720565b61107e565b6040516106c491906123cd565b60405180910390f35b6106e760048036038101906106e291906124cb565b611105565b6040516106f491906123cd565b60405180910390f35b61071760048036038101906107129190612660565b611119565b005b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060095461074c61119f565b610756919061278f565b905090565b60606003805461076a906127f2565b80601f0160208091040260200160405190810160405280929190818152602001828054610796906127f2565b80156107e35780601f106107b8576101008083540402835291602001916107e3565b820191906000526020600020905b8154815290600101906020018083116107c657829003601f168201915b5050505050905090565b60006107fa826000611240565b9050919050565b60008061080c611299565b90506108198185856112a1565b600191505092915050565b60006108318260016112b3565b9050919050565b61084061130c565b60095461084b61073f565b6108559190612823565b811115610897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088e906128a3565b60405180910390fd5b80600960008282546108a9919061278f565b92505081905550600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161090d9291906128c3565b6020604051808303816000875af115801561092c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109509190612918565b503373ffffffffffffffffffffffffffffffffffffffff167fc3f75dfc78f6efac88ad5abb5e606276b903647d97b2a62a1ef89840a658bbc38260405161099791906123cd565b60405180910390a250565b6000600254905090565b6109b461130c565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610a1393929190612945565b6020604051808303816000875af1158015610a32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a569190612918565b610a95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8c906129c8565b60405180910390fd5b8060096000828254610aa79190612823565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fb84ee419d7201aa2a708df150fe1e02d1c15e233687aadd82dc96276c97931cf82604051610af491906123cd565b60405180910390a250565b600080610b0a611299565b9050610b17858285611393565b610b22858585611427565b60019150509392505050565b6000610b3861151b565b7f0000000000000000000000000000000000000000000000000000000000000000610b6391906129e8565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b6000610bc7826000611240565b9050919050565b6000604051806040016040528084815260200142815250600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010155905050610c458383611520565b905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610c9d61130c565b610ca760006115a2565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080610cdf83611012565b905080841115610d2a578284826040517f284ff667000000000000000000000000000000000000000000000000000000008152600401610d2193929190612a1d565b60405180910390fd5b6000610d3585610e0a565b9050610d4a610d42611299565b858388611668565b809250505092915050565b606060048054610d64906127f2565b80601f0160208091040260200160405190810160405280929190818152602001828054610d90906127f2565b8015610ddd5780601f10610db257610100808354040283529160200191610ddd565b820191906000526020600020905b815481529060010190602001808311610dc057829003601f168201915b5050505050905090565b600080610df2611299565b9050610dff818585611427565b600191505092915050565b6000610e17826001611240565b9050919050565b600080610eb5600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015460065460075461170b565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610efd610ca9565b836040518363ffffffff1660e01b8152600401610f1b9291906128c3565b6020604051808303816000875af1158015610f3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5e9190612918565b508085610f6b9190612823565b9450610f788585856117c2565b9150509392505050565b60065481565b600080610f948361106c565b905080851115610fdf578285826040517fb94abeec000000000000000000000000000000000000000000000000000000008152600401610fd693929190612a1d565b60405180910390fd5b6000610fea86610bba565b9050611000610ff7611299565b8686848a611846565b80925050509392505050565b60075481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b60006110498260006112b3565b9050919050565b600061106561105e83610c4d565b6000611240565b9050919050565b600061107782610c4d565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006111128260006112b3565b9050919050565b61112161130c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111935760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161118a9190612645565b60405180910390fd5b61119c816115a2565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016111fa9190612645565b602060405180830381865afa158015611217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123b9190612a69565b905090565b6000611291600161124f61073f565b611259919061278f565b61126161151b565b600a61126d9190612bc9565b6112756109a2565b61127f919061278f565b848661193f909392919063ffffffff16565b905092915050565b600033905090565b6112ae8383836001611996565b505050565b60006113046112c061151b565b600a6112cc9190612bc9565b6112d46109a2565b6112de919061278f565b60016112e861073f565b6112f2919061278f565b848661193f909392919063ffffffff16565b905092915050565b611314611299565b73ffffffffffffffffffffffffffffffffffffffff16611332610ca9565b73ffffffffffffffffffffffffffffffffffffffff161461139157611355611299565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016113889190612645565b60405180910390fd5b565b600061139f848461107e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146114215781811015611411578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161140893929190612a1d565b60405180910390fd5b61142084848484036000611996565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114995760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016114909190612645565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361150b5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016115029190612645565b60405180910390fd5b611516838383611b6d565b505050565b600090565b60008061152c83610b90565b905080841115611577578284826040517f79012fb200000000000000000000000000000000000000000000000000000000815260040161156e93929190612a1d565b60405180910390fd5b600061158285611105565b905061159761158f611299565b858784611668565b809250505092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6116947f0000000000000000000000000000000000000000000000000000000000000000853085611d92565b61169e8382611e14565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d784846040516116fd929190612c14565b60405180910390a350505050565b600080844261171a9190612823565b9050620151808361172b9190612c3d565b81101561175557612710610bb8876117439190612c3d565b61174d9190612cae565b9150506117ba565b60008490506000620186a090506000818910156117745782905061179a565b600089629896806117859190612cae565b90508381106117945783611796565b805b9150505b612710818a6117a99190612c3d565b6117b39190612cae565b9450505050505b949350505050565b6000806117ce83611050565b905080851115611819578285826040517ffe9cceec00000000000000000000000000000000000000000000000000000000815260040161181093929190612a1d565b60405180910390fd5b600061182486610824565b905061183a611831611299565b86868985611846565b80925050509392505050565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461188557611884838683611393565b5b61188f8382611e96565b6118ba7f00000000000000000000000000000000000000000000000000000000000000008584611f18565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db8585604051611930929190612c14565b60405180910390a45050505050565b60008061194d868686611f97565b90506119588361209e565b80156119755750600084806119705761196f612c7f565b5b868809115b1561198a57600181611987919061278f565b90505b80915050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611a085760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016119ff9190612645565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611a7a5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401611a719190612645565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015611b67578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051611b5e91906123cd565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611bbf578060026000828254611bb3919061278f565b92505081905550611c92565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611c4b578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401611c4293929190612a1d565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611cdb5780600260008282540392505081905550611d28565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611d8591906123cd565b60405180910390a3505050565b611e0e848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401611dc793929190612945565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506120cc565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611e865760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611e7d9190612645565b60405180910390fd5b611e9260008383611b6d565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f085760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611eff9190612645565b60405180910390fd5b611f1482600083611b6d565b5050565b611f92838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401611f4b9291906128c3565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506120cc565b505050565b6000808385029050600080198587098281108382030391505060008103611fd257838281611fc857611fc7612c7f565b5b0492505050612097565b80841161200b576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b6000600160028360038111156120b7576120b6612cdf565b5b6120c19190612d0e565b60ff16149050919050565b60006120f7828473ffffffffffffffffffffffffffffffffffffffff1661216390919063ffffffff16565b9050600081511415801561211c57508080602001905181019061211a9190612918565b155b1561215e57826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016121559190612645565b60405180910390fd5b505050565b606061217183836000612179565b905092915050565b6060814710156121c057306040517fcd7860590000000000000000000000000000000000000000000000000000000081526004016121b79190612645565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1684866040516121e99190612d86565b60006040518083038185875af1925050503d8060008114612226576040519150601f19603f3d011682016040523d82523d6000602084013e61222b565b606091505b509150915061223b868383612246565b925050509392505050565b60608261225b57612256826122d5565b6122cd565b60008251148015612283575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156122c557836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016122bc9190612645565b60405180910390fd5b8190506122ce565b5b9392505050565b6000815111156122e85780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061235f61235a6123558461231a565b61233a565b61231a565b9050919050565b600061237182612344565b9050919050565b600061238382612366565b9050919050565b61239381612378565b82525050565b60006020820190506123ae600083018461238a565b92915050565b6000819050919050565b6123c7816123b4565b82525050565b60006020820190506123e260008301846123be565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612422578082015181840152602081019050612407565b60008484015250505050565b6000601f19601f8301169050919050565b600061244a826123e8565b61245481856123f3565b9350612464818560208601612404565b61246d8161242e565b840191505092915050565b60006020820190508181036000830152612492818461243f565b905092915050565b600080fd5b6124a8816123b4565b81146124b357600080fd5b50565b6000813590506124c58161249f565b92915050565b6000602082840312156124e1576124e061249a565b5b60006124ef848285016124b6565b91505092915050565b60006125038261231a565b9050919050565b612513816124f8565b811461251e57600080fd5b50565b6000813590506125308161250a565b92915050565b6000806040838503121561254d5761254c61249a565b5b600061255b85828601612521565b925050602061256c858286016124b6565b9150509250929050565b60008115159050919050565b61258b81612576565b82525050565b60006020820190506125a66000830184612582565b92915050565b6000806000606084860312156125c5576125c461249a565b5b60006125d386828701612521565b93505060206125e486828701612521565b92505060406125f5868287016124b6565b9150509250925092565b600060ff82169050919050565b612615816125ff565b82525050565b6000602082019050612630600083018461260c565b92915050565b61263f816124f8565b82525050565b600060208201905061265a6000830184612636565b92915050565b6000602082840312156126765761267561249a565b5b600061268484828501612521565b91505092915050565b600080604083850312156126a4576126a361249a565b5b60006126b2858286016124b6565b92505060206126c385828601612521565b9150509250929050565b6000806000606084860312156126e6576126e561249a565b5b60006126f4868287016124b6565b935050602061270586828701612521565b925050604061271686828701612521565b9150509250925092565b600080604083850312156127375761273661249a565b5b600061274585828601612521565b925050602061275685828601612521565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061279a826123b4565b91506127a5836123b4565b92508282019050808211156127bd576127bc612760565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061280a57607f821691505b60208210810361281d5761281c6127c3565b5b50919050565b600061282e826123b4565b9150612839836123b4565b925082820390508181111561285157612850612760565b5b92915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b600061288d6014836123f3565b915061289882612857565b602082019050919050565b600060208201905081810360008301526128bc81612880565b9050919050565b60006040820190506128d86000830185612636565b6128e560208301846123be565b9392505050565b6128f581612576565b811461290057600080fd5b50565b600081519050612912816128ec565b92915050565b60006020828403121561292e5761292d61249a565b5b600061293c84828501612903565b91505092915050565b600060608201905061295a6000830186612636565b6129676020830185612636565b61297460408301846123be565b949350505050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b60006129b2600f836123f3565b91506129bd8261297c565b602082019050919050565b600060208201905081810360008301526129e1816129a5565b9050919050565b60006129f3826125ff565b91506129fe836125ff565b9250828201905060ff811115612a1757612a16612760565b5b92915050565b6000606082019050612a326000830186612636565b612a3f60208301856123be565b612a4c60408301846123be565b949350505050565b600081519050612a638161249f565b92915050565b600060208284031215612a7f57612a7e61249a565b5b6000612a8d84828501612a54565b91505092915050565b60008160011c9050919050565b6000808291508390505b6001851115612aed57808604811115612ac957612ac8612760565b5b6001851615612ad85780820291505b8081029050612ae685612a96565b9450612aad565b94509492505050565b600082612b065760019050612bc2565b81612b145760009050612bc2565b8160018114612b2a5760028114612b3457612b63565b6001915050612bc2565b60ff841115612b4657612b45612760565b5b8360020a915084821115612b5d57612b5c612760565b5b50612bc2565b5060208310610133831016604e8410600b8410161715612b985782820a905083811115612b9357612b92612760565b5b612bc2565b612ba58484846001612aa3565b92509050818404811115612bbc57612bbb612760565b5b81810290505b9392505050565b6000612bd4826123b4565b9150612bdf836125ff565b9250612c0c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612af6565b905092915050565b6000604082019050612c2960008301856123be565b612c3660208301846123be565b9392505050565b6000612c48826123b4565b9150612c53836123b4565b9250828202612c61816123b4565b91508282048414831517612c7857612c77612760565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612cb9826123b4565b9150612cc4836123b4565b925082612cd457612cd3612c7f565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000612d19826125ff565b9150612d24836125ff565b925082612d3457612d33612c7f565b5b828206905092915050565b600081519050919050565b600081905092915050565b6000612d6082612d3f565b612d6a8185612d4a565b9350612d7a818560208601612404565b80840191505092915050565b6000612d928284612d55565b91508190509291505056fea2646970667358221220d9615e07505ae9b9456a447500192670ad1969ee7e417c226aec8767872fa04a64736f6c63430008140033" as const;