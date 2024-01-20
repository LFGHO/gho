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
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "depositWithPermit",
    "outputs": [],
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

export const bytecode = "0x60c0604052610258600655620151806007553480156200001e57600080fd5b5060405162003b0438038062003b04833981810160405281019062000044919062000471565b33816040518060400160405280600981526020017f47686f20546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f47484f00000000000000000000000000000000000000000000000000000000008152508160039081620000c391906200071d565b508060049081620000d591906200071d565b505050600080620000ec836200021360201b60201c565b9150915081620000fe57601262000100565b805b60ff1660a08160ff16815250508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001b95760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001b0919062000815565b60405180910390fd5b620001ca816200032d60201b60201c565b5080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000927565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1660405160240160405160208183030381529060405263313ce56760e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516200028a9190620008ab565b600060405180830381855afa9150503d8060008114620002c7576040519150601f19603f3d011682016040523d82523d6000602084013e620002cc565b606091505b5091509150818015620002e157506020815110155b156200031e57600081806020019051810190620002ff9190620008f5565b905060ff801681116200031c576001819450945050505062000328565b505b6000809350935050505b915091565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200042582620003f8565b9050919050565b6000620004398262000418565b9050919050565b6200044b816200042c565b81146200045757600080fd5b50565b6000815190506200046b8162000440565b92915050565b6000602082840312156200048a5762000489620003f3565b5b60006200049a848285016200045a565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200052557607f821691505b6020821081036200053b576200053a620004dd565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005a57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000566565b620005b1868362000566565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005fe620005f8620005f284620005c9565b620005d3565b620005c9565b9050919050565b6000819050919050565b6200061a83620005dd565b62000632620006298262000605565b84845462000573565b825550505050565b600090565b620006496200063a565b620006568184846200060f565b505050565b5b818110156200067e57620006726000826200063f565b6001810190506200065c565b5050565b601f821115620006cd57620006978162000541565b620006a28462000556565b81016020851015620006b2578190505b620006ca620006c18562000556565b8301826200065b565b50505b505050565b600082821c905092915050565b6000620006f260001984600802620006d2565b1980831691505092915050565b60006200070d8383620006df565b9150826002028217905092915050565b6200072882620004a3565b67ffffffffffffffff811115620007445762000743620004ae565b5b6200075082546200050c565b6200075d82828562000682565b600060209050601f83116001811462000795576000841562000780578287015190505b6200078c8582620006ff565b865550620007fc565b601f198416620007a58662000541565b60005b82811015620007cf57848901518255600182019150602085019450602081019050620007a8565b86831015620007ef5784890151620007eb601f891682620006df565b8355505b6001600288020188555050505b505050505050565b6200080f8162000418565b82525050565b60006020820190506200082c600083018462000804565b92915050565b600081519050919050565b600081905092915050565b60005b83811015620008685780820151818401526020810190506200084b565b60008484015250505050565b6000620008818262000832565b6200088d81856200083d565b93506200089f81856020860162000848565b80840191505092915050565b6000620008b9828462000874565b915081905092915050565b620008cf81620005c9565b8114620008db57600080fd5b50565b600081519050620008ef81620008c4565b92915050565b6000602082840312156200090e576200090d620003f3565b5b60006200091e84828501620008de565b91505092915050565b60805160a0516131a2620009626000396000610b61015260008181610b9301528181611405015281816118cf0152611af601526131a26000f3fe608060405234801561001057600080fd5b50600436106102055760003560e01c8063715018a61161011a578063ba087652116100ad578063ce96cb771161007c578063ce96cb7714610664578063d905777e14610694578063dd62ed3e146106c4578063ef8b30f7146106f4578063f2fde38b1461072457610205565b8063ba087652146105b6578063bdd2a892146105e6578063c63d75b614610604578063c6e6f5921461063457610205565b8063a9059cbb116100e9578063a9059cbb14610508578063b3d7f6b914610538578063b460af9414610568578063b8606eef1461059857610205565b8063715018a6146104925780638da5cb5b1461049c57806394bf804d146104ba57806395d89b41146104ea57610205565b80631ca334181161019d578063402d267d1161016c578063402d267d146103b65780634cdad506146103e657806350921b23146104165780636e553f651461043257806370a082311461046257610205565b80631ca334181461032e57806323b872dd1461034a578063313ce5671461037a57806338d52e0f1461039857610205565b8063095ea7b3116101d9578063095ea7b3146102945780630a28a477146102c45780630f576665146102f457806318160ddd1461031057610205565b80622703a21461020a57806301e1d1141461022857806306fdde031461024657806307a2d13a14610264575b600080fd5b610212610740565b60405161021f91906125fb565b60405180910390f35b610230610766565b60405161023d919061262f565b60405180910390f35b61024e610782565b60405161025b91906126da565b60405180910390f35b61027e6004803603810190610279919061272d565b610814565b60405161028b919061262f565b60405180910390f35b6102ae60048036038101906102a99190612798565b610828565b6040516102bb91906127f3565b60405180910390f35b6102de60048036038101906102d9919061272d565b61084b565b6040516102eb919061262f565b60405180910390f35b61030e6004803603810190610309919061272d565b61085f565b005b6103186109c9565b604051610325919061262f565b60405180910390f35b6103486004803603810190610343919061272d565b6109d3565b005b610364600480360381019061035f919061280e565b610b26565b60405161037191906127f3565b60405180910390f35b610382610b55565b60405161038f919061287d565b60405180910390f35b6103a0610b8f565b6040516103ad91906128a7565b60405180910390f35b6103d060048036038101906103cb91906128c2565b610bb7565b6040516103dd919061262f565b60405180910390f35b61040060048036038101906103fb919061272d565b610be1565b60405161040d919061262f565b60405180910390f35b610430600480360381019061042b9190612951565b610bf5565b005b61044c600480360381019061044791906129de565b610e30565b604051610459919061262f565b60405180910390f35b61047c600480360381019061047791906128c2565b610eaf565b604051610489919061262f565b60405180910390f35b61049a610ef7565b005b6104a4610f0b565b6040516104b191906128a7565b60405180910390f35b6104d460048036038101906104cf91906129de565b610f35565b6040516104e1919061262f565b60405180910390f35b6104f2610fb7565b6040516104ff91906126da565b60405180910390f35b610522600480360381019061051d9190612798565b611049565b60405161052f91906127f3565b60405180910390f35b610552600480360381019061054d919061272d565b61106c565b60405161055f919061262f565b60405180910390f35b610582600480360381019061057d9190612a1e565b611080565b60405161058f919061262f565b60405180910390f35b6105a06111e4565b6040516105ad919061262f565b60405180910390f35b6105d060048036038101906105cb9190612a1e565b6111ea565b6040516105dd919061262f565b60405180910390f35b6105ee61126e565b6040516105fb919061262f565b60405180910390f35b61061e600480360381019061061991906128c2565b611274565b60405161062b919061262f565b60405180910390f35b61064e6004803603810190610649919061272d565b61129e565b60405161065b919061262f565b60405180910390f35b61067e600480360381019061067991906128c2565b6112b2565b60405161068b919061262f565b60405180910390f35b6106ae60048036038101906106a991906128c2565b6112ce565b6040516106bb919061262f565b60405180910390f35b6106de60048036038101906106d99190612a71565b6112e0565b6040516106eb919061262f565b60405180910390f35b61070e6004803603810190610709919061272d565b611367565b60405161071b919061262f565b60405180910390f35b61073e600480360381019061073991906128c2565b61137b565b005b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600954610773611401565b61077d9190612ae0565b905090565b60606003805461079190612b43565b80601f01602080910402602001604051908101604052809291908181526020018280546107bd90612b43565b801561080a5780601f106107df5761010080835404028352916020019161080a565b820191906000526020600020905b8154815290600101906020018083116107ed57829003601f168201915b5050505050905090565b60006108218260006114a2565b9050919050565b6000806108336114fb565b9050610840818585611503565b600191505092915050565b6000610858826001611515565b9050919050565b61086761156e565b600954610872610766565b61087c9190612b74565b8111156108be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b590612bf4565b60405180910390fd5b80600960008282546108d09190612ae0565b92505081905550600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610934929190612c14565b6020604051808303816000875af1158015610953573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109779190612c69565b503373ffffffffffffffffffffffffffffffffffffffff167fc3f75dfc78f6efac88ad5abb5e606276b903647d97b2a62a1ef89840a658bbc3826040516109be919061262f565b60405180910390a250565b6000600254905090565b6109db61156e565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610a3a93929190612c96565b6020604051808303816000875af1158015610a59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7d9190612c69565b610abc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab390612d19565b60405180910390fd5b8060096000828254610ace9190612b74565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fb84ee419d7201aa2a708df150fe1e02d1c15e233687aadd82dc96276c97931cf82604051610b1b919061262f565b60405180910390a250565b600080610b316114fb565b9050610b3e8582856115f5565b610b49858585611689565b60019150509392505050565b6000610b5f61177d565b7f0000000000000000000000000000000000000000000000000000000000000000610b8a9190612d39565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b6000610bee8260006114a2565b9050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d505accf333089888888886040518863ffffffff1660e01b8152600401610c5c9796959493929190612d7d565b600060405180830381600087803b158015610c7657600080fd5b505af1158015610c8a573d6000803e3d6000fd5b50505050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b8152600401610ced93929190612c96565b6020604051808303816000875af1158015610d0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d309190612c69565b610d6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6690612d19565b60405180910390fd5b604051806040016040528087815260200142815250600a60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101559050508473ffffffffffffffffffffffffffffffffffffffff167fc3f75dfc78f6efac88ad5abb5e606276b903647d97b2a62a1ef89840a658bbc387604051610e20919061262f565b60405180910390a2505050505050565b6000604051806040016040528084815260200142815250600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010155905050610ea78383611782565b905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610eff61156e565b610f096000611804565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080610f4183611274565b905080841115610f8c578284826040517f284ff667000000000000000000000000000000000000000000000000000000008152600401610f8393929190612dec565b60405180910390fd5b6000610f978561106c565b9050610fac610fa46114fb565b8583886118ca565b809250505092915050565b606060048054610fc690612b43565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff290612b43565b801561103f5780601f106110145761010080835404028352916020019161103f565b820191906000526020600020905b81548152906001019060200180831161102257829003601f168201915b5050505050905090565b6000806110546114fb565b9050611061818585611689565b600191505092915050565b60006110798260016114a2565b9050919050565b600080611117600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015460065460075461196d565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61115f610f0b565b836040518363ffffffff1660e01b815260040161117d929190612c14565b6020604051808303816000875af115801561119c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c09190612c69565b5080856111cd9190612b74565b94506111da858585611a24565b9150509392505050565b60065481565b6000806111f6836112ce565b905080851115611241578285826040517fb94abeec00000000000000000000000000000000000000000000000000000000815260040161123893929190612dec565b60405180910390fd5b600061124c86610be1565b90506112626112596114fb565b8686848a611aa8565b80925050509392505050565b60075481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b60006112ab826000611515565b9050919050565b60006112c76112c083610eaf565b60006114a2565b9050919050565b60006112d982610eaf565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000611374826000611515565b9050919050565b61138361156e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036113f55760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016113ec91906128a7565b60405180910390fd5b6113fe81611804565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161145c91906128a7565b602060405180830381865afa158015611479573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149d9190612e38565b905090565b60006114f360016114b1610766565b6114bb9190612ae0565b6114c361177d565b600a6114cf9190612f98565b6114d76109c9565b6114e19190612ae0565b8486611ba1909392919063ffffffff16565b905092915050565b600033905090565b6115108383836001611bf8565b505050565b600061156661152261177d565b600a61152e9190612f98565b6115366109c9565b6115409190612ae0565b600161154a610766565b6115549190612ae0565b8486611ba1909392919063ffffffff16565b905092915050565b6115766114fb565b73ffffffffffffffffffffffffffffffffffffffff16611594610f0b565b73ffffffffffffffffffffffffffffffffffffffff16146115f3576115b76114fb565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016115ea91906128a7565b60405180910390fd5b565b600061160184846112e0565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146116835781811015611673578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161166a93929190612dec565b60405180910390fd5b61168284848484036000611bf8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036116fb5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016116f291906128a7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361176d5760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161176491906128a7565b60405180910390fd5b611778838383611dcf565b505050565b600090565b60008061178e83610bb7565b9050808411156117d9578284826040517f79012fb20000000000000000000000000000000000000000000000000000000081526004016117d093929190612dec565b60405180910390fd5b60006117e485611367565b90506117f96117f16114fb565b8587846118ca565b809250505092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6118f67f0000000000000000000000000000000000000000000000000000000000000000853085611ff4565b6119008382612076565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7848460405161195f929190612fe3565b60405180910390a350505050565b600080844261197c9190612b74565b9050620151808361198d919061300c565b8110156119b757612710610bb8876119a5919061300c565b6119af919061307d565b915050611a1c565b60008490506000620186a090506000818910156119d6578290506119fc565b600089629896806119e7919061307d565b90508381106119f657836119f8565b805b9150505b612710818a611a0b919061300c565b611a15919061307d565b9450505050505b949350505050565b600080611a30836112b2565b905080851115611a7b578285826040517ffe9cceec000000000000000000000000000000000000000000000000000000008152600401611a7293929190612dec565b60405180910390fd5b6000611a868661084b565b9050611a9c611a936114fb565b86868985611aa8565b80925050509392505050565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611ae757611ae68386836115f5565b5b611af183826120f8565b611b1c7f0000000000000000000000000000000000000000000000000000000000000000858461217a565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db8585604051611b92929190612fe3565b60405180910390a45050505050565b600080611baf8686866121f9565b9050611bba83612300565b8015611bd7575060008480611bd257611bd161304e565b5b868809115b15611bec57600181611be99190612ae0565b90505b80915050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611c6a5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401611c6191906128a7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611cdc5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401611cd391906128a7565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015611dc9578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051611dc0919061262f565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611e21578060026000828254611e159190612ae0565b92505081905550611ef4565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611ead578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401611ea493929190612dec565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f3d5780600260008282540392505081905550611f8a565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611fe7919061262f565b60405180910390a3505050565b612070848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161202993929190612c96565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061232e565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036120e85760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016120df91906128a7565b60405180910390fd5b6120f460008383611dcf565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361216a5760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161216191906128a7565b60405180910390fd5b61217682600083611dcf565b5050565b6121f4838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016121ad929190612c14565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061232e565b505050565b60008083850290506000801985870982811083820303915050600081036122345783828161222a5761222961304e565b5b04925050506122f9565b80841161226d576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b600060016002836003811115612319576123186130ae565b5b61232391906130dd565b60ff16149050919050565b6000612359828473ffffffffffffffffffffffffffffffffffffffff166123c590919063ffffffff16565b9050600081511415801561237e57508080602001905181019061237c9190612c69565b155b156123c057826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016123b791906128a7565b60405180910390fd5b505050565b60606123d3838360006123db565b905092915050565b60608147101561242257306040517fcd78605900000000000000000000000000000000000000000000000000000000815260040161241991906128a7565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16848660405161244b9190613155565b60006040518083038185875af1925050503d8060008114612488576040519150601f19603f3d011682016040523d82523d6000602084013e61248d565b606091505b509150915061249d8683836124a8565b925050509392505050565b6060826124bd576124b882612537565b61252f565b600082511480156124e5575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561252757836040517f9996b31500000000000000000000000000000000000000000000000000000000815260040161251e91906128a7565b60405180910390fd5b819050612530565b5b9392505050565b60008151111561254a5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006125c16125bc6125b78461257c565b61259c565b61257c565b9050919050565b60006125d3826125a6565b9050919050565b60006125e5826125c8565b9050919050565b6125f5816125da565b82525050565b600060208201905061261060008301846125ec565b92915050565b6000819050919050565b61262981612616565b82525050565b60006020820190506126446000830184612620565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612684578082015181840152602081019050612669565b60008484015250505050565b6000601f19601f8301169050919050565b60006126ac8261264a565b6126b68185612655565b93506126c6818560208601612666565b6126cf81612690565b840191505092915050565b600060208201905081810360008301526126f481846126a1565b905092915050565b600080fd5b61270a81612616565b811461271557600080fd5b50565b60008135905061272781612701565b92915050565b600060208284031215612743576127426126fc565b5b600061275184828501612718565b91505092915050565b60006127658261257c565b9050919050565b6127758161275a565b811461278057600080fd5b50565b6000813590506127928161276c565b92915050565b600080604083850312156127af576127ae6126fc565b5b60006127bd85828601612783565b92505060206127ce85828601612718565b9150509250929050565b60008115159050919050565b6127ed816127d8565b82525050565b600060208201905061280860008301846127e4565b92915050565b600080600060608486031215612827576128266126fc565b5b600061283586828701612783565b935050602061284686828701612783565b925050604061285786828701612718565b9150509250925092565b600060ff82169050919050565b61287781612861565b82525050565b6000602082019050612892600083018461286e565b92915050565b6128a18161275a565b82525050565b60006020820190506128bc6000830184612898565b92915050565b6000602082840312156128d8576128d76126fc565b5b60006128e684828501612783565b91505092915050565b6128f881612861565b811461290357600080fd5b50565b600081359050612915816128ef565b92915050565b6000819050919050565b61292e8161291b565b811461293957600080fd5b50565b60008135905061294b81612925565b92915050565b60008060008060008060c0878903121561296e5761296d6126fc565b5b600061297c89828a01612718565b965050602061298d89828a01612783565b955050604061299e89828a01612718565b94505060606129af89828a01612906565b93505060806129c089828a0161293c565b92505060a06129d189828a0161293c565b9150509295509295509295565b600080604083850312156129f5576129f46126fc565b5b6000612a0385828601612718565b9250506020612a1485828601612783565b9150509250929050565b600080600060608486031215612a3757612a366126fc565b5b6000612a4586828701612718565b9350506020612a5686828701612783565b9250506040612a6786828701612783565b9150509250925092565b60008060408385031215612a8857612a876126fc565b5b6000612a9685828601612783565b9250506020612aa785828601612783565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612aeb82612616565b9150612af683612616565b9250828201905080821115612b0e57612b0d612ab1565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612b5b57607f821691505b602082108103612b6e57612b6d612b14565b5b50919050565b6000612b7f82612616565b9150612b8a83612616565b9250828203905081811115612ba257612ba1612ab1565b5b92915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000612bde601483612655565b9150612be982612ba8565b602082019050919050565b60006020820190508181036000830152612c0d81612bd1565b9050919050565b6000604082019050612c296000830185612898565b612c366020830184612620565b9392505050565b612c46816127d8565b8114612c5157600080fd5b50565b600081519050612c6381612c3d565b92915050565b600060208284031215612c7f57612c7e6126fc565b5b6000612c8d84828501612c54565b91505092915050565b6000606082019050612cab6000830186612898565b612cb86020830185612898565b612cc56040830184612620565b949350505050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000612d03600f83612655565b9150612d0e82612ccd565b602082019050919050565b60006020820190508181036000830152612d3281612cf6565b9050919050565b6000612d4482612861565b9150612d4f83612861565b9250828201905060ff811115612d6857612d67612ab1565b5b92915050565b612d778161291b565b82525050565b600060e082019050612d92600083018a612898565b612d9f6020830189612898565b612dac6040830188612620565b612db96060830187612620565b612dc6608083018661286e565b612dd360a0830185612d6e565b612de060c0830184612d6e565b98975050505050505050565b6000606082019050612e016000830186612898565b612e0e6020830185612620565b612e1b6040830184612620565b949350505050565b600081519050612e3281612701565b92915050565b600060208284031215612e4e57612e4d6126fc565b5b6000612e5c84828501612e23565b91505092915050565b60008160011c9050919050565b6000808291508390505b6001851115612ebc57808604811115612e9857612e97612ab1565b5b6001851615612ea75780820291505b8081029050612eb585612e65565b9450612e7c565b94509492505050565b600082612ed55760019050612f91565b81612ee35760009050612f91565b8160018114612ef95760028114612f0357612f32565b6001915050612f91565b60ff841115612f1557612f14612ab1565b5b8360020a915084821115612f2c57612f2b612ab1565b5b50612f91565b5060208310610133831016604e8410600b8410161715612f675782820a905083811115612f6257612f61612ab1565b5b612f91565b612f748484846001612e72565b92509050818404811115612f8b57612f8a612ab1565b5b81810290505b9392505050565b6000612fa382612616565b9150612fae83612861565b9250612fdb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612ec5565b905092915050565b6000604082019050612ff86000830185612620565b6130056020830184612620565b9392505050565b600061301782612616565b915061302283612616565b925082820261303081612616565b9150828204841483151761304757613046612ab1565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061308882612616565b915061309383612616565b9250826130a3576130a261304e565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006130e882612861565b91506130f383612861565b9250826131035761310261304e565b5b828206905092915050565b600081519050919050565b600081905092915050565b600061312f8261310e565b6131398185613119565b9350613149818560208601612666565b80840191505092915050565b60006131618284613124565b91508190509291505056fea2646970667358221220f93c5b7e17221bb4739ede066086cd53b86dd422823c8b5bcc0322a83bc1daf564736f6c63430008140033" as const;