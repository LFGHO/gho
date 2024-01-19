export const abi = [
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_ghoToken",
        "type": "address"
      },
      {
        "internalType": "contract IUniswapV2Router",
        "name": "_dexRouter",
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
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "depositAndConvert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dexRouter",
    "outputs": [
      {
        "internalType": "contract IUniswapV2Router",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
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

export const bytecode = "0x60c060405260646006556276a7006007553480156200001d57600080fd5b5060405162004211380380620042118339818101604052810190620000439190620004f7565b33826040518060400160405280600981526020017f47686f20546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f47484f00000000000000000000000000000000000000000000000000000000008152508160039081620000c29190620007b8565b508060049081620000d49190620007b8565b505050600080620000eb836200025460201b60201c565b9150915081620000fd576012620000ff565b805b60ff1660a08160ff16815250508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001b85760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001af9190620008b0565b60405180910390fd5b620001c9816200036e60201b60201c565b5081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620009c2565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1660405160240160405160208183030381529060405263313ce56760e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051620002cb919062000946565b600060405180830381855afa9150503d806000811462000308576040519150601f19603f3d011682016040523d82523d6000602084013e6200030d565b606091505b50915091508180156200032257506020815110155b156200035f5760008180602001905181019062000340919062000990565b905060ff801681116200035d576001819450945050505062000369565b505b6000809350935050505b915091565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004668262000439565b9050919050565b60006200047a8262000459565b9050919050565b6200048c816200046d565b81146200049857600080fd5b50565b600081519050620004ac8162000481565b92915050565b6000620004bf8262000459565b9050919050565b620004d181620004b2565b8114620004dd57600080fd5b50565b600081519050620004f181620004c6565b92915050565b6000806040838503121562000511576200051062000434565b5b600062000521858286016200049b565b92505060206200053485828601620004e0565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005c057607f821691505b602082108103620005d657620005d562000578565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000601565b6200064c868362000601565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000699620006936200068d8462000664565b6200066e565b62000664565b9050919050565b6000819050919050565b620006b58362000678565b620006cd620006c482620006a0565b8484546200060e565b825550505050565b600090565b620006e4620006d5565b620006f1818484620006aa565b505050565b5b8181101562000719576200070d600082620006da565b600181019050620006f7565b5050565b601f82111562000768576200073281620005dc565b6200073d84620005f1565b810160208510156200074d578190505b620007656200075c85620005f1565b830182620006f6565b50505b505050565b600082821c905092915050565b60006200078d600019846008026200076d565b1980831691505092915050565b6000620007a883836200077a565b9150826002028217905092915050565b620007c3826200053e565b67ffffffffffffffff811115620007df57620007de62000549565b5b620007eb8254620005a7565b620007f88282856200071d565b600060209050601f8311600181146200083057600084156200081b578287015190505b6200082785826200079a565b86555062000897565b601f1984166200084086620005dc565b60005b828110156200086a5784890151825560018201915060208501945060208101905062000843565b868310156200088a578489015162000886601f8916826200077a565b8355505b6001600288020188555050505b505050505050565b620008aa8162000459565b82525050565b6000602082019050620008c760008301846200089f565b92915050565b600081519050919050565b600081905092915050565b60005b8381101562000903578082015181840152602081019050620008e6565b60008484015250505050565b60006200091c82620008cd565b620009288185620008d8565b93506200093a818560208601620008e3565b80840191505092915050565b60006200095482846200090f565b915081905092915050565b6200096a8162000664565b81146200097657600080fd5b50565b6000815190506200098a816200095f565b92915050565b600060208284031215620009a957620009a862000434565b5b6000620009b98482850162000979565b91505092915050565b60805160a051613814620009fd6000396000610bb0015260008181610be20152818161181701528181611d630152611f4501526138146000f3fe608060405234801561001057600080fd5b50600436106102105760003560e01c806370a0823111610125578063ba087652116100ad578063ce96cb771161007c578063ce96cb771461068d578063d905777e146106bd578063dd62ed3e146106ed578063ef8b30f71461071d578063f2fde38b1461074d57610210565b8063ba087652146105df578063bdd2a8921461060f578063c63d75b61461062d578063c6e6f5921461065d57610210565b806395d89b41116100f457806395d89b4114610513578063a9059cbb14610531578063b3d7f6b914610561578063b460af9414610591578063b8606eef146105c157610210565b806370a082311461048b578063715018a6146104bb5780638da5cb5b146104c557806394bf804d146104e357610210565b806318160ddd116101a857806338d52e0f1161017757806338d52e0f146103c1578063402d267d146103df5780634cdad5061461040f57806367f4a5721461043f5780636e553f651461045b57610210565b806318160ddd146103395780631ca334181461035757806323b872dd14610373578063313ce567146103a357610210565b806307a2d13a116101e457806307a2d13a1461028d578063095ea7b3146102bd5780630a28a477146102ed5780630f5766651461031d57610210565b80622703a21461021557806301e1d1141461023357806306fdde03146102515780630758d9241461026f575b600080fd5b61021d610769565b60405161022a91906129c8565b60405180910390f35b61023b61078f565b60405161024891906129fc565b60405180910390f35b6102596107ab565b6040516102669190612aa7565b60405180910390f35b61027761083d565b6040516102849190612aea565b60405180910390f35b6102a760048036038101906102a29190612b45565b610863565b6040516102b491906129fc565b60405180910390f35b6102d760048036038101906102d29190612bb0565b610877565b6040516102e49190612c0b565b60405180910390f35b61030760048036038101906103029190612b45565b61089a565b60405161031491906129fc565b60405180910390f35b61033760048036038101906103329190612b45565b6108ae565b005b610341610a18565b60405161034e91906129fc565b60405180910390f35b610371600480360381019061036c9190612b45565b610a22565b005b61038d60048036038101906103889190612c26565b610b75565b60405161039a9190612c0b565b60405180910390f35b6103ab610ba4565b6040516103b89190612c95565b60405180910390f35b6103c9610bde565b6040516103d69190612cbf565b60405180910390f35b6103f960048036038101906103f49190612cda565b610c06565b60405161040691906129fc565b60405180910390f35b61042960048036038101906104249190612b45565b610c30565b60405161043691906129fc565b60405180910390f35b61045960048036038101906104549190612bb0565b610c44565b005b61047560048036038101906104709190612d07565b611164565b60405161048291906129fc565b60405180910390f35b6104a560048036038101906104a09190612cda565b61120b565b6040516104b291906129fc565b60405180910390f35b6104c3611253565b005b6104cd611267565b6040516104da9190612cbf565b60405180910390f35b6104fd60048036038101906104f89190612d07565b611291565b60405161050a91906129fc565b60405180910390f35b61051b611313565b6040516105289190612aa7565b60405180910390f35b61054b60048036038101906105469190612bb0565b6113a5565b6040516105589190612c0b565b60405180910390f35b61057b60048036038101906105769190612b45565b6113c8565b60405161058891906129fc565b60405180910390f35b6105ab60048036038101906105a69190612d47565b6113dc565b6040516105b891906129fc565b60405180910390f35b6105c96115f6565b6040516105d691906129fc565b60405180910390f35b6105f960048036038101906105f49190612d47565b6115fc565b60405161060691906129fc565b60405180910390f35b610617611680565b60405161062491906129fc565b60405180910390f35b61064760048036038101906106429190612cda565b611686565b60405161065491906129fc565b60405180910390f35b61067760048036038101906106729190612b45565b6116b0565b60405161068491906129fc565b60405180910390f35b6106a760048036038101906106a29190612cda565b6116c4565b6040516106b491906129fc565b60405180910390f35b6106d760048036038101906106d29190612cda565b6116e0565b6040516106e491906129fc565b60405180910390f35b61070760048036038101906107029190612d9a565b6116f2565b60405161071491906129fc565b60405180910390f35b61073760048036038101906107329190612b45565b611779565b60405161074491906129fc565b60405180910390f35b61076760048036038101906107629190612cda565b61178d565b005b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600a5461079c611813565b6107a69190612e09565b905090565b6060600380546107ba90612e6c565b80601f01602080910402602001604051908101604052809291908181526020018280546107e690612e6c565b80156108335780601f1061080857610100808354040283529160200191610833565b820191906000526020600020905b81548152906001019060200180831161081657829003601f168201915b5050505050905090565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006108708260006118b4565b9050919050565b60008061088261190d565b905061088f818585611915565b600191505092915050565b60006108a7826001611927565b9050919050565b6108b6611980565b600a546108c161078f565b6108cb9190612e9d565b81111561090d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090490612f1d565b60405180910390fd5b80600a600082825461091f9190612e09565b92505081905550600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610983929190612f3d565b6020604051808303816000875af11580156109a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c69190612f92565b503373ffffffffffffffffffffffffffffffffffffffff167fc3f75dfc78f6efac88ad5abb5e606276b903647d97b2a62a1ef89840a658bbc382604051610a0d91906129fc565b60405180910390a250565b6000600254905090565b610a2a611980565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610a8993929190612fbf565b6020604051808303816000875af1158015610aa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acc9190612f92565b610b0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0290613042565b60405180910390fd5b80600a6000828254610b1d9190612e9d565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fb84ee419d7201aa2a708df150fe1e02d1c15e233687aadd82dc96276c97931cf82604051610b6a91906129fc565b60405180910390a250565b600080610b8061190d565b9050610b8d858285611a07565b610b98858585611a9b565b60019150509392505050565b6000610bae611b8f565b7f0000000000000000000000000000000000000000000000000000000000000000610bd99190613062565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b6000610c3d8260006118b4565b9050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccb906130e3565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610d1693929190612fbf565b6020604051808303816000875af1158015610d35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d599190612f92565b610d98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8f90613042565b60405180910390fd5b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610df59190612cbf565b602060405180830381865afa158015610e12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e369190613118565b90508173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518363ffffffff1660e01b8152600401610e95929190612f3d565b6020604051808303816000875af1158015610eb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed89190612f92565b506000600267ffffffffffffffff811115610ef657610ef5613145565b5b604051908082528060200260200182016040528015610f245781602001602082028036833780820191505090505b5090508481600081518110610f3c57610f3b613174565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600181518110610fad57610fac613174565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338ed1739856000843061012c426110389190612e09565b6040518663ffffffff1660e01b815260040161105895949392919061329c565b6000604051808303816000875af1158015611077573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906110a0919061340f565b506000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016110fe9190612cbf565b602060405180830381865afa15801561111b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113f9190613118565b90506000838261114f9190612e9d565b905061115b3382611b94565b50505050505050565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405280858152602001428152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506112038383611c16565b905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61125b611980565b6112656000611c98565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008061129d83611686565b9050808411156112e8578284826040517f284ff6670000000000000000000000000000000000000000000000000000000081526004016112df93929190613458565b60405180910390fd5b60006112f3856113c8565b905061130861130061190d565b858388611d5e565b809250505092915050565b60606004805461132290612e6c565b80601f016020809104026020016040519081016040528092919081815260200182805461134e90612e6c565b801561139b5780601f106113705761010080835404028352916020019161139b565b820191906000526020600020905b81548152906001019060200180831161137e57829003601f168201915b5050505050905090565b6000806113b061190d565b90506113bd818585611a9b565b600191505092915050565b60006113d58260016118b4565b9050919050565b6000806000905060005b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905081101561152a576000611506600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061148657611485613174565b5b906000526020600020906002020160000154600b60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481106114e9576114e8613174565b5b906000526020600020906002020160010154600654600754611e01565b905080836115149190612e09565b92505080806115229061348f565b9150506113e6565b50600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb611571611267565b836040518363ffffffff1660e01b815260040161158f929190612f3d565b6020604051808303816000875af11580156115ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d29190612f92565b5080856115df9190612e9d565b94506115ec858585611e73565b9150509392505050565b60065481565b600080611608836116e0565b905080851115611653578285826040517fb94abeec00000000000000000000000000000000000000000000000000000000815260040161164a93929190613458565b60405180910390fd5b600061165e86610c30565b905061167461166b61190d565b8686848a611ef7565b80925050509392505050565b60075481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b60006116bd826000611927565b9050919050565b60006116d96116d28361120b565b60006118b4565b9050919050565b60006116eb8261120b565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000611786826000611927565b9050919050565b611795611980565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118075760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016117fe9190612cbf565b60405180910390fd5b61181081611c98565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161186e9190612cbf565b602060405180830381865afa15801561188b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118af9190613118565b905090565b600061190560016118c361078f565b6118cd9190612e09565b6118d5611b8f565b600a6118e1919061360a565b6118e9610a18565b6118f39190612e09565b8486611ff0909392919063ffffffff16565b905092915050565b600033905090565b6119228383836001612047565b505050565b6000611978611934611b8f565b600a611940919061360a565b611948610a18565b6119529190612e09565b600161195c61078f565b6119669190612e09565b8486611ff0909392919063ffffffff16565b905092915050565b61198861190d565b73ffffffffffffffffffffffffffffffffffffffff166119a6611267565b73ffffffffffffffffffffffffffffffffffffffff1614611a05576119c961190d565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016119fc9190612cbf565b60405180910390fd5b565b6000611a1384846116f2565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611a955781811015611a85578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401611a7c93929190613458565b60405180910390fd5b611a9484848484036000612047565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611b0d5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611b049190612cbf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b7f5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611b769190612cbf565b60405180910390fd5b611b8a83838361221e565b505050565b600090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611c065760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611bfd9190612cbf565b60405180910390fd5b611c126000838361221e565b5050565b600080611c2283610c06565b905080841115611c6d578284826040517f79012fb2000000000000000000000000000000000000000000000000000000008152600401611c6493929190613458565b60405180910390fd5b6000611c7885611779565b9050611c8d611c8561190d565b858784611d5e565b809250505092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611d8a7f0000000000000000000000000000000000000000000000000000000000000000853085612443565b611d948382611b94565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d78484604051611df3929190613655565b60405180910390a350505050565b6000808442611e109190612e9d565b9050600060648483611e2291906136ad565b611e2c91906136de565b90506000818611611e3e576000611e4b565b8186611e4a9190612e9d565b5b90506127108189611e5c91906136de565b611e6691906136ad565b9350505050949350505050565b600080611e7f836116c4565b905080851115611eca578285826040517ffe9cceec000000000000000000000000000000000000000000000000000000008152600401611ec193929190613458565b60405180910390fd5b6000611ed58661089a565b9050611eeb611ee261190d565b86868985611ef7565b80925050509392505050565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611f3657611f35838683611a07565b5b611f4083826124c5565b611f6b7f00000000000000000000000000000000000000000000000000000000000000008584612547565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db8585604051611fe1929190613655565b60405180910390a45050505050565b600080611ffe8686866125c6565b9050612009836126cd565b80156120265750600084806120215761202061367e565b5b868809115b1561203b576001816120389190612e09565b90505b80915050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036120b95760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016120b09190612cbf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361212b5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016121229190612cbf565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015612218578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161220f91906129fc565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036122705780600260008282546122649190612e09565b92505081905550612343565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156122fc578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016122f393929190613458565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361238c57806002600082825403925050819055506123d9565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161243691906129fc565b60405180910390a3505050565b6124bf848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161247893929190612fbf565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506126fb565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036125375760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161252e9190612cbf565b60405180910390fd5b6125438260008361221e565b5050565b6125c1838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb858560405160240161257a929190612f3d565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506126fb565b505050565b6000808385029050600080198587098281108382030391505060008103612601578382816125f7576125f661367e565b5b04925050506126c6565b80841161263a576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b6000600160028360038111156126e6576126e5613720565b5b6126f0919061374f565b60ff16149050919050565b6000612726828473ffffffffffffffffffffffffffffffffffffffff1661279290919063ffffffff16565b9050600081511415801561274b5750808060200190518101906127499190612f92565b155b1561278d57826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016127849190612cbf565b60405180910390fd5b505050565b60606127a0838360006127a8565b905092915050565b6060814710156127ef57306040517fcd7860590000000000000000000000000000000000000000000000000000000081526004016127e69190612cbf565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16848660405161281891906137c7565b60006040518083038185875af1925050503d8060008114612855576040519150601f19603f3d011682016040523d82523d6000602084013e61285a565b606091505b509150915061286a868383612875565b925050509392505050565b60608261288a5761288582612904565b6128fc565b600082511480156128b2575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156128f457836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016128eb9190612cbf565b60405180910390fd5b8190506128fd565b5b9392505050565b6000815111156129175780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061298e61298961298484612949565b612969565b612949565b9050919050565b60006129a082612973565b9050919050565b60006129b282612995565b9050919050565b6129c2816129a7565b82525050565b60006020820190506129dd60008301846129b9565b92915050565b6000819050919050565b6129f6816129e3565b82525050565b6000602082019050612a1160008301846129ed565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612a51578082015181840152602081019050612a36565b60008484015250505050565b6000601f19601f8301169050919050565b6000612a7982612a17565b612a838185612a22565b9350612a93818560208601612a33565b612a9c81612a5d565b840191505092915050565b60006020820190508181036000830152612ac18184612a6e565b905092915050565b6000612ad482612995565b9050919050565b612ae481612ac9565b82525050565b6000602082019050612aff6000830184612adb565b92915050565b6000604051905090565b600080fd5b600080fd5b612b22816129e3565b8114612b2d57600080fd5b50565b600081359050612b3f81612b19565b92915050565b600060208284031215612b5b57612b5a612b0f565b5b6000612b6984828501612b30565b91505092915050565b6000612b7d82612949565b9050919050565b612b8d81612b72565b8114612b9857600080fd5b50565b600081359050612baa81612b84565b92915050565b60008060408385031215612bc757612bc6612b0f565b5b6000612bd585828601612b9b565b9250506020612be685828601612b30565b9150509250929050565b60008115159050919050565b612c0581612bf0565b82525050565b6000602082019050612c206000830184612bfc565b92915050565b600080600060608486031215612c3f57612c3e612b0f565b5b6000612c4d86828701612b9b565b9350506020612c5e86828701612b9b565b9250506040612c6f86828701612b30565b9150509250925092565b600060ff82169050919050565b612c8f81612c79565b82525050565b6000602082019050612caa6000830184612c86565b92915050565b612cb981612b72565b82525050565b6000602082019050612cd46000830184612cb0565b92915050565b600060208284031215612cf057612cef612b0f565b5b6000612cfe84828501612b9b565b91505092915050565b60008060408385031215612d1e57612d1d612b0f565b5b6000612d2c85828601612b30565b9250506020612d3d85828601612b9b565b9150509250929050565b600080600060608486031215612d6057612d5f612b0f565b5b6000612d6e86828701612b30565b9350506020612d7f86828701612b9b565b9250506040612d9086828701612b9b565b9150509250925092565b60008060408385031215612db157612db0612b0f565b5b6000612dbf85828601612b9b565b9250506020612dd085828601612b9b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e14826129e3565b9150612e1f836129e3565b9250828201905080821115612e3757612e36612dda565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612e8457607f821691505b602082108103612e9757612e96612e3d565b5b50919050565b6000612ea8826129e3565b9150612eb3836129e3565b9250828203905081811115612ecb57612eca612dda565b5b92915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000612f07601483612a22565b9150612f1282612ed1565b602082019050919050565b60006020820190508181036000830152612f3681612efa565b9050919050565b6000604082019050612f526000830185612cb0565b612f5f60208301846129ed565b9392505050565b612f6f81612bf0565b8114612f7a57600080fd5b50565b600081519050612f8c81612f66565b92915050565b600060208284031215612fa857612fa7612b0f565b5b6000612fb684828501612f7d565b91505092915050565b6000606082019050612fd46000830186612cb0565b612fe16020830185612cb0565b612fee60408301846129ed565b949350505050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b600061302c600f83612a22565b915061303782612ff6565b602082019050919050565b6000602082019050818103600083015261305b8161301f565b9050919050565b600061306d82612c79565b915061307883612c79565b9250828201905060ff81111561309157613090612dda565b5b92915050565b7f47484f206465706f736974206e6f7420616c6c6f776564000000000000000000600082015250565b60006130cd601783612a22565b91506130d882613097565b602082019050919050565b600060208201905081810360008301526130fc816130c0565b9050919050565b60008151905061311281612b19565b92915050565b60006020828403121561312e5761312d612b0f565b5b600061313c84828501613103565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b60006131c86131c36131be846131a3565b612969565b6129e3565b9050919050565b6131d8816131ad565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61321381612b72565b82525050565b6000613225838361320a565b60208301905092915050565b6000602082019050919050565b6000613249826131de565b61325381856131e9565b935061325e836131fa565b8060005b8381101561328f5781516132768882613219565b975061328183613231565b925050600181019050613262565b5085935050505092915050565b600060a0820190506132b160008301886129ed565b6132be60208301876131cf565b81810360408301526132d0818661323e565b90506132df6060830185612cb0565b6132ec60808301846129ed565b9695505050505050565b600080fd5b61330482612a5d565b810181811067ffffffffffffffff8211171561332357613322613145565b5b80604052505050565b6000613336612b05565b905061334282826132fb565b919050565b600067ffffffffffffffff82111561336257613361613145565b5b602082029050602081019050919050565b600080fd5b600061338b61338684613347565b61332c565b905080838252602082019050602084028301858111156133ae576133ad613373565b5b835b818110156133d757806133c38882613103565b8452602084019350506020810190506133b0565b5050509392505050565b600082601f8301126133f6576133f56132f6565b5b8151613406848260208601613378565b91505092915050565b60006020828403121561342557613424612b0f565b5b600082015167ffffffffffffffff81111561344357613442612b14565b5b61344f848285016133e1565b91505092915050565b600060608201905061346d6000830186612cb0565b61347a60208301856129ed565b61348760408301846129ed565b949350505050565b600061349a826129e3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134cc576134cb612dda565b5b600182019050919050565b60008160011c9050919050565b6000808291508390505b600185111561352e5780860481111561350a57613509612dda565b5b60018516156135195780820291505b8081029050613527856134d7565b94506134ee565b94509492505050565b6000826135475760019050613603565b816135555760009050613603565b816001811461356b5760028114613575576135a4565b6001915050613603565b60ff84111561358757613586612dda565b5b8360020a91508482111561359e5761359d612dda565b5b50613603565b5060208310610133831016604e8410600b84101617156135d95782820a9050838111156135d4576135d3612dda565b5b613603565b6135e684848460016134e4565b925090508184048111156135fd576135fc612dda565b5b81810290505b9392505050565b6000613615826129e3565b915061362083612c79565b925061364d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484613537565b905092915050565b600060408201905061366a60008301856129ed565b61367760208301846129ed565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006136b8826129e3565b91506136c3836129e3565b9250826136d3576136d261367e565b5b828204905092915050565b60006136e9826129e3565b91506136f4836129e3565b9250828202613702816129e3565b9150828204841483151761371957613718612dda565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600061375a82612c79565b915061376583612c79565b9250826137755761377461367e565b5b828206905092915050565b600081519050919050565b600081905092915050565b60006137a182613780565b6137ab818561378b565b93506137bb818560208601612a33565b80840191505092915050565b60006137d38284613796565b91508190509291505056fea2646970667358221220f7fb5d8d869899b4dfd61b4e42b0e3a0c85d1c57f311653c2a67a0e040db82d064736f6c63430008140033" as const;