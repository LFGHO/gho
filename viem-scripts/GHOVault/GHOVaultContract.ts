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
    "inputs": [],
    "name": "PERMIT_TYPEHASH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
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
        "name": "assets",
        "type": "uint256"
      }
    ],
    "name": "depositAndConvert",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getNonce",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "name": "setNonce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "interestRate",
        "type": "uint256"
      }
    ],
    "name": "setUserToInvestmentRate",
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
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "updateNonce",
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

export const bytecode = "0x61010060405260646007556276a7006008553480156200001e57600080fd5b5060405162004c0438038062004c048339818101604052810190620000449190620005f0565b33826040518060400160405280600981526020017f47686f20546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f47484f00000000000000000000000000000000000000000000000000000000008152508160039081620000c39190620008b1565b508060049081620000d59190620008b1565b505050600080620000ec836200034d60201b60201c565b9150915081620000fe57601262000100565b805b60ff1660a08160ff16815250508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001b95760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001b09190620009a9565b60405180910390fd5b620001ca816200046760201b60201c565b5081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060400160405280600881526020017f47484f5661756c74000000000000000000000000000000000000000000000000815250805190602001206040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525080519060200120463060405160200162000300959493929190620009f2565b6040516020818303038152906040528051906020012060e081815250507f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960c08181525050505062000b44565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1660405160240160405160208183030381529060405263313ce56760e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051620003c4919062000ac8565b600060405180830381855afa9150503d806000811462000401576040519150601f19603f3d011682016040523d82523d6000602084013e62000406565b606091505b50915091508180156200041b57506020815110155b15620004585760008180602001905181019062000439919062000b12565b905060ff8016811162000456576001819450945050505062000462565b505b6000809350935050505b915091565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200055f8262000532565b9050919050565b6000620005738262000552565b9050919050565b620005858162000566565b81146200059157600080fd5b50565b600081519050620005a5816200057a565b92915050565b6000620005b88262000552565b9050919050565b620005ca81620005ab565b8114620005d657600080fd5b50565b600081519050620005ea81620005bf565b92915050565b600080604083850312156200060a57620006096200052d565b5b60006200061a8582860162000594565b92505060206200062d85828601620005d9565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006b957607f821691505b602082108103620006cf57620006ce62000671565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620006fa565b620007458683620006fa565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620007926200078c62000786846200075d565b62000767565b6200075d565b9050919050565b6000819050919050565b620007ae8362000771565b620007c6620007bd8262000799565b84845462000707565b825550505050565b600090565b620007dd620007ce565b620007ea818484620007a3565b505050565b5b81811015620008125762000806600082620007d3565b600181019050620007f0565b5050565b601f82111562000861576200082b81620006d5565b6200083684620006ea565b8101602085101562000846578190505b6200085e6200085585620006ea565b830182620007ef565b50505b505050565b600082821c905092915050565b6000620008866000198460080262000866565b1980831691505092915050565b6000620008a1838362000873565b9150826002028217905092915050565b620008bc8262000637565b67ffffffffffffffff811115620008d857620008d762000642565b5b620008e48254620006a0565b620008f182828562000816565b600060209050601f83116001811462000929576000841562000914578287015190505b62000920858262000893565b86555062000990565b601f1984166200093986620006d5565b60005b8281101562000963578489015182556001820191506020850194506020810190506200093c565b868310156200098357848901516200097f601f89168262000873565b8355505b6001600288020188555050505b505050505050565b620009a38162000552565b82525050565b6000602082019050620009c0600083018462000998565b92915050565b6000819050919050565b620009db81620009c6565b82525050565b620009ec816200075d565b82525050565b600060a08201905062000a096000830188620009d0565b62000a186020830187620009d0565b62000a276040830186620009d0565b62000a366060830185620009e1565b62000a45608083018462000998565b9695505050505050565b600081519050919050565b600081905092915050565b60005b8381101562000a8557808201518184015260208101905062000a68565b60008484015250505050565b600062000a9e8262000a4f565b62000aaa818562000a5a565b935062000abc81856020860162000a65565b80840191505092915050565b600062000ad6828462000a91565b915081905092915050565b62000aec816200075d565b811462000af857600080fd5b50565b60008151905062000b0c8162000ae1565b92915050565b60006020828403121562000b2b5762000b2a6200052d565b5b600062000b3b8482850162000afb565b91505092915050565b60805160a05160c05160e05161407462000b90600039600050506000610d8f01526000610dbd015260008181610def01528181611eef0152818161243b015261261d01526140746000f3fe608060405234801561001057600080fd5b50600436106102525760003560e01c806350921b2311610146578063b460af94116100c3578063c6e6f59211610087578063c6e6f5921461075d578063ce96cb771461078d578063d905777e146107bd578063dd62ed3e146107ed578063ef8b30f71461081d578063f2fde38b1461084d57610252565b8063b460af9414610691578063b8606eef146106c1578063ba087652146106df578063bdd2a8921461070f578063c63d75b61461072d57610252565b80638da5cb5b1161010a5780638da5cb5b146105c557806394bf804d146105e357806395d89b4114610613578063a9059cbb14610631578063b3d7f6b91461066157610252565b806350921b231461052357806367f4a5721461053f5780636e553f651461055b57806370a082311461058b578063715018a6146105bb57610252565b80631d79f325116101d4578063313ce56711610198578063313ce5671461046b57806338d52e0f14610489578063402d267d146104a75780634a453638146104d75780634cdad506146104f357610252565b80631d79f325146103b55780631ee48c4a146103d157806323b872dd146103ed5780632d0335ab1461041d57806330adf81f1461044d57610252565b8063095ea7b31161021b578063095ea7b3146102ff5780630a28a4771461032f5780630f5766651461035f57806318160ddd1461037b5780631ca334181461039957610252565b80622703a21461025757806301e1d1141461027557806306fdde03146102935780630758d924146102b157806307a2d13a146102cf575b600080fd5b61025f610869565b60405161026c91906130a0565b60405180910390f35b61027d61088f565b60405161028a91906130d4565b60405180910390f35b61029b6108ab565b6040516102a8919061317f565b60405180910390f35b6102b961093d565b6040516102c691906131c2565b60405180910390f35b6102e960048036038101906102e4919061321d565b610963565b6040516102f691906130d4565b60405180910390f35b61031960048036038101906103149190613288565b610977565b60405161032691906132e3565b60405180910390f35b6103496004803603810190610344919061321d565b61099a565b60405161035691906130d4565b60405180910390f35b6103796004803603810190610374919061321d565b6109ae565b005b610383610b18565b60405161039091906130d4565b60405180910390f35b6103b360048036038101906103ae919061321d565b610b22565b005b6103cf60048036038101906103ca9190613288565b610c75565b005b6103eb60048036038101906103e691906132fe565b610cbd565b005b6104076004803603810190610402919061332b565b610d15565b60405161041491906132e3565b60405180910390f35b610437600480360381019061043291906132fe565b610d44565b60405161044491906130d4565b60405180910390f35b610455610d8d565b6040516104629190613397565b60405180910390f35b610473610db1565b60405161048091906133ce565b60405180910390f35b610491610deb565b60405161049e91906133f8565b60405180910390f35b6104c160048036038101906104bc91906132fe565b610e13565b6040516104ce91906130d4565b60405180910390f35b6104f160048036038101906104ec9190613288565b610e3d565b005b61050d6004803603810190610508919061321d565b610e8d565b60405161051a91906130d4565b60405180910390f35b61053d6004803603810190610538919061346b565b610ea1565b005b61055960048036038101906105549190613288565b611191565b005b610575600480360381019061057091906134f8565b61173e565b60405161058291906130d4565b60405180910390f35b6105a560048036038101906105a091906132fe565b611872565b6040516105b291906130d4565b60405180910390f35b6105c36118ba565b005b6105cd6118ce565b6040516105da91906133f8565b60405180910390f35b6105fd60048036038101906105f891906134f8565b6118f8565b60405161060a91906130d4565b60405180910390f35b61061b61197a565b604051610628919061317f565b60405180910390f35b61064b60048036038101906106469190613288565b611a0c565b60405161065891906132e3565b60405180910390f35b61067b6004803603810190610676919061321d565b611a2f565b60405161068891906130d4565b60405180910390f35b6106ab60048036038101906106a69190613538565b611a43565b6040516106b891906130d4565b60405180910390f35b6106c9611cce565b6040516106d691906130d4565b60405180910390f35b6106f960048036038101906106f49190613538565b611cd4565b60405161070691906130d4565b60405180910390f35b610717611d58565b60405161072491906130d4565b60405180910390f35b610747600480360381019061074291906132fe565b611d5e565b60405161075491906130d4565b60405180910390f35b6107776004803603810190610772919061321d565b611d88565b60405161078491906130d4565b60405180910390f35b6107a760048036038101906107a291906132fe565b611d9c565b6040516107b491906130d4565b60405180910390f35b6107d760048036038101906107d291906132fe565b611db8565b6040516107e491906130d4565b60405180910390f35b6108076004803603810190610802919061358b565b611dca565b60405161081491906130d4565b60405180910390f35b6108376004803603810190610832919061321d565b611e51565b60405161084491906130d4565b60405180910390f35b610867600480360381019061086291906132fe565b611e65565b005b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600b5461089c611eeb565b6108a691906135fa565b905090565b6060600380546108ba9061365d565b80601f01602080910402602001604051908101604052809291908181526020018280546108e69061365d565b80156109335780601f1061090857610100808354040283529160200191610933565b820191906000526020600020905b81548152906001019060200180831161091657829003601f168201915b5050505050905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610970826000611f8c565b9050919050565b600080610982611fe5565b905061098f818585611fed565b600191505092915050565b60006109a7826001611fff565b9050919050565b6109b6612058565b600b546109c161088f565b6109cb919061368e565b811115610a0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a049061370e565b60405180910390fd5b80600b6000828254610a1f91906135fa565b92505081905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610a8392919061372e565b6020604051808303816000875af1158015610aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac69190613783565b503373ffffffffffffffffffffffffffffffffffffffff167fc3f75dfc78f6efac88ad5abb5e606276b903647d97b2a62a1ef89840a658bbc382604051610b0d91906130d4565b60405180910390a250565b6000600254905090565b610b2a612058565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610b89939291906137b0565b6020604051808303816000875af1158015610ba8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcc9190613783565b610c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0290613833565b60405180910390fd5b80600b6000828254610c1d919061368e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fb84ee419d7201aa2a708df150fe1e02d1c15e233687aadd82dc96276c97931cf82604051610c6a91906130d4565b60405180910390a250565b80600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610d0d90613853565b919050555050565b600080610d20611fe5565b9050610d2d8582856120df565b610d38858585612173565b60019150509392505050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610dbb612267565b7f0000000000000000000000000000000000000000000000000000000000000000610de6919061389b565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b610e45612058565b80600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6000610e9a826000611f8c565b9050919050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d505accf333089888888886040518863ffffffff1660e01b8152600401610f0897969594939291906138d0565b600060405180830381600087803b158015610f2257600080fd5b505af1158015610f36573d6000803e3d6000fd5b50505050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b8152600401610f99939291906137b0565b6020604051808303816000875af1158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190613783565b61101b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101290613833565b60405180910390fd5b600c60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405280888152602001428152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506000600d60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540361113b5760c8600d60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8473ffffffffffffffffffffffffffffffffffffffff167fc3f75dfc78f6efac88ad5abb5e606276b903647d97b2a62a1ef89840a658bbc38760405161118191906130d4565b60405180910390a2505050505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611221576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112189061398b565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401611263939291906137b0565b6020604051808303816000875af1158015611282573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a69190613783565b6112e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112dc90613833565b60405180910390fd5b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161134291906133f8565b602060405180830381865afa15801561135f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138391906139c0565b90506000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054036114125760c8600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518363ffffffff1660e01b815260040161146f92919061372e565b6020604051808303816000875af115801561148e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b29190613783565b506000600267ffffffffffffffff8111156114d0576114cf6139ed565b5b6040519080825280602002602001820160405280156114fe5781602001602082028036833780820191505090505b509050848160008151811061151657611515613a1c565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160018151811061158757611586613a1c565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338ed1739856000843061012c4261161291906135fa565b6040518663ffffffff1660e01b8152600401611632959493929190613b44565b6000604051808303816000875af1158015611651573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061167a9190613cb7565b506000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016116d891906133f8565b602060405180830381865afa1580156116f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171991906139c0565b905060008382611729919061368e565b9050611735338261226c565b50505050505050565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405280858152602001428152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506000600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054036118605760c8600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b61186a83836122ee565b905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6118c2612058565b6118cc6000612370565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008061190483611d5e565b90508084111561194f578284826040517f284ff66700000000000000000000000000000000000000000000000000000000815260040161194693929190613d00565b60405180910390fd5b600061195a85611a2f565b905061196f611967611fe5565b858388612436565b809250505092915050565b6060600480546119899061365d565b80601f01602080910402602001604051908101604052809291908181526020018280546119b59061365d565b8015611a025780601f106119d757610100808354040283529160200191611a02565b820191906000526020600020905b8154815290600101906020018083116119e557829003601f168201915b5050505050905090565b600080611a17611fe5565b9050611a24818585612173565b600191505092915050565b6000611a3c826001611f8c565b9050919050565b6000806000905060005b600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015611b91576000611b6d600c60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611aed57611aec613a1c565b5b906000526020600020906002020160000154600c60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110611b5057611b4f613a1c565b5b9060005260206000209060020201600101546007546008546124d9565b90508083611b7b91906135fa565b9250508080611b8990613853565b915050611a4d565b50600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb611bd86118ce565b836040518363ffffffff1660e01b8152600401611bf692919061372e565b6020604051808303816000875af1158015611c15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c399190613783565b508085611c46919061368e565b94506000600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006127108288611c9d9190613d37565b611ca79190613da8565b90508087611cb591906135fa565b9650611cc287878761254b565b93505050509392505050565b60075481565b600080611ce083611db8565b905080851115611d2b578285826040517fb94abeec000000000000000000000000000000000000000000000000000000008152600401611d2293929190613d00565b60405180910390fd5b6000611d3686610e8d565b9050611d4c611d43611fe5565b8686848a6125cf565b80925050509392505050565b60085481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b6000611d95826000611fff565b9050919050565b6000611db1611daa83611872565b6000611f8c565b9050919050565b6000611dc382611872565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000611e5e826000611fff565b9050919050565b611e6d612058565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611edf5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611ed691906133f8565b60405180910390fd5b611ee881612370565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611f4691906133f8565b602060405180830381865afa158015611f63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8791906139c0565b905090565b6000611fdd6001611f9b61088f565b611fa591906135fa565b611fad612267565b600a611fb99190613f0c565b611fc1610b18565b611fcb91906135fa565b84866126c8909392919063ffffffff16565b905092915050565b600033905090565b611ffa838383600161271f565b505050565b600061205061200c612267565b600a6120189190613f0c565b612020610b18565b61202a91906135fa565b600161203461088f565b61203e91906135fa565b84866126c8909392919063ffffffff16565b905092915050565b612060611fe5565b73ffffffffffffffffffffffffffffffffffffffff1661207e6118ce565b73ffffffffffffffffffffffffffffffffffffffff16146120dd576120a1611fe5565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016120d491906133f8565b60405180910390fd5b565b60006120eb8484611dca565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461216d578181101561215d578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161215493929190613d00565b60405180910390fd5b61216c8484848403600061271f565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036121e55760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016121dc91906133f8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036122575760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161224e91906133f8565b60405180910390fd5b6122628383836128f6565b505050565b600090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036122de5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016122d591906133f8565b60405180910390fd5b6122ea600083836128f6565b5050565b6000806122fa83610e13565b905080841115612345578284826040517f79012fb200000000000000000000000000000000000000000000000000000000815260040161233c93929190613d00565b60405180910390fd5b600061235085611e51565b905061236561235d611fe5565b858784612436565b809250505092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6124627f0000000000000000000000000000000000000000000000000000000000000000853085612b1b565b61246c838261226c565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d784846040516124cb929190613f57565b60405180910390a350505050565b60008084426124e8919061368e565b90506000606484836124fa9190613da8565b6125049190613d37565b90506000818611612516576000612523565b8186612522919061368e565b5b905061271081896125349190613d37565b61253e9190613da8565b9350505050949350505050565b60008061255783611d9c565b9050808511156125a2578285826040517ffe9cceec00000000000000000000000000000000000000000000000000000000815260040161259993929190613d00565b60405180910390fd5b60006125ad8661099a565b90506125c36125ba611fe5565b868689856125cf565b80925050509392505050565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461260e5761260d8386836120df565b5b6126188382612b9d565b6126437f00000000000000000000000000000000000000000000000000000000000000008584612c1f565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db85856040516126b9929190613f57565b60405180910390a45050505050565b6000806126d6868686612c9e565b90506126e183612da5565b80156126fe5750600084806126f9576126f8613d79565b5b868809115b156127135760018161271091906135fa565b90505b80915050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036127915760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161278891906133f8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036128035760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016127fa91906133f8565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156128f0578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516128e791906130d4565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361294857806002600082825461293c91906135fa565b92505081905550612a1b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156129d4578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016129cb93929190613d00565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612a645780600260008282540392505081905550612ab1565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612b0e91906130d4565b60405180910390a3505050565b612b97848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401612b50939291906137b0565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612dd3565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612c0f5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401612c0691906133f8565b60405180910390fd5b612c1b826000836128f6565b5050565b612c99838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401612c5292919061372e565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612dd3565b505050565b6000808385029050600080198587098281108382030391505060008103612cd957838281612ccf57612cce613d79565b5b0492505050612d9e565b808411612d12576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b600060016002836003811115612dbe57612dbd613f80565b5b612dc89190613faf565b60ff16149050919050565b6000612dfe828473ffffffffffffffffffffffffffffffffffffffff16612e6a90919063ffffffff16565b90506000815114158015612e23575080806020019051810190612e219190613783565b155b15612e6557826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401612e5c91906133f8565b60405180910390fd5b505050565b6060612e7883836000612e80565b905092915050565b606081471015612ec757306040517fcd786059000000000000000000000000000000000000000000000000000000008152600401612ebe91906133f8565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168486604051612ef09190614027565b60006040518083038185875af1925050503d8060008114612f2d576040519150601f19603f3d011682016040523d82523d6000602084013e612f32565b606091505b5091509150612f42868383612f4d565b925050509392505050565b606082612f6257612f5d82612fdc565b612fd4565b60008251148015612f8a575060008473ffffffffffffffffffffffffffffffffffffffff163b145b15612fcc57836040517f9996b315000000000000000000000000000000000000000000000000000000008152600401612fc391906133f8565b60405180910390fd5b819050612fd5565b5b9392505050565b600081511115612fef5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061306661306161305c84613021565b613041565b613021565b9050919050565b60006130788261304b565b9050919050565b600061308a8261306d565b9050919050565b61309a8161307f565b82525050565b60006020820190506130b56000830184613091565b92915050565b6000819050919050565b6130ce816130bb565b82525050565b60006020820190506130e960008301846130c5565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561312957808201518184015260208101905061310e565b60008484015250505050565b6000601f19601f8301169050919050565b6000613151826130ef565b61315b81856130fa565b935061316b81856020860161310b565b61317481613135565b840191505092915050565b600060208201905081810360008301526131998184613146565b905092915050565b60006131ac8261306d565b9050919050565b6131bc816131a1565b82525050565b60006020820190506131d760008301846131b3565b92915050565b6000604051905090565b600080fd5b600080fd5b6131fa816130bb565b811461320557600080fd5b50565b600081359050613217816131f1565b92915050565b600060208284031215613233576132326131e7565b5b600061324184828501613208565b91505092915050565b600061325582613021565b9050919050565b6132658161324a565b811461327057600080fd5b50565b6000813590506132828161325c565b92915050565b6000806040838503121561329f5761329e6131e7565b5b60006132ad85828601613273565b92505060206132be85828601613208565b9150509250929050565b60008115159050919050565b6132dd816132c8565b82525050565b60006020820190506132f860008301846132d4565b92915050565b600060208284031215613314576133136131e7565b5b600061332284828501613273565b91505092915050565b600080600060608486031215613344576133436131e7565b5b600061335286828701613273565b935050602061336386828701613273565b925050604061337486828701613208565b9150509250925092565b6000819050919050565b6133918161337e565b82525050565b60006020820190506133ac6000830184613388565b92915050565b600060ff82169050919050565b6133c8816133b2565b82525050565b60006020820190506133e360008301846133bf565b92915050565b6133f28161324a565b82525050565b600060208201905061340d60008301846133e9565b92915050565b61341c816133b2565b811461342757600080fd5b50565b60008135905061343981613413565b92915050565b6134488161337e565b811461345357600080fd5b50565b6000813590506134658161343f565b92915050565b60008060008060008060c08789031215613488576134876131e7565b5b600061349689828a01613208565b96505060206134a789828a01613273565b95505060406134b889828a01613208565b94505060606134c989828a0161342a565b93505060806134da89828a01613456565b92505060a06134eb89828a01613456565b9150509295509295509295565b6000806040838503121561350f5761350e6131e7565b5b600061351d85828601613208565b925050602061352e85828601613273565b9150509250929050565b600080600060608486031215613551576135506131e7565b5b600061355f86828701613208565b935050602061357086828701613273565b925050604061358186828701613273565b9150509250925092565b600080604083850312156135a2576135a16131e7565b5b60006135b085828601613273565b92505060206135c185828601613273565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613605826130bb565b9150613610836130bb565b9250828201905080821115613628576136276135cb565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061367557607f821691505b6020821081036136885761368761362e565b5b50919050565b6000613699826130bb565b91506136a4836130bb565b92508282039050818111156136bc576136bb6135cb565b5b92915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b60006136f86014836130fa565b9150613703826136c2565b602082019050919050565b60006020820190508181036000830152613727816136eb565b9050919050565b600060408201905061374360008301856133e9565b61375060208301846130c5565b9392505050565b613760816132c8565b811461376b57600080fd5b50565b60008151905061377d81613757565b92915050565b600060208284031215613799576137986131e7565b5b60006137a78482850161376e565b91505092915050565b60006060820190506137c560008301866133e9565b6137d260208301856133e9565b6137df60408301846130c5565b949350505050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b600061381d600f836130fa565b9150613828826137e7565b602082019050919050565b6000602082019050818103600083015261384c81613810565b9050919050565b600061385e826130bb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036138905761388f6135cb565b5b600182019050919050565b60006138a6826133b2565b91506138b1836133b2565b9250828201905060ff8111156138ca576138c96135cb565b5b92915050565b600060e0820190506138e5600083018a6133e9565b6138f260208301896133e9565b6138ff60408301886130c5565b61390c60608301876130c5565b61391960808301866133bf565b61392660a0830185613388565b61393360c0830184613388565b98975050505050505050565b7f47484f206465706f736974206e6f7420616c6c6f776564000000000000000000600082015250565b60006139756017836130fa565b91506139808261393f565b602082019050919050565b600060208201905081810360008301526139a481613968565b9050919050565b6000815190506139ba816131f1565b92915050565b6000602082840312156139d6576139d56131e7565b5b60006139e4848285016139ab565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b6000613a70613a6b613a6684613a4b565b613041565b6130bb565b9050919050565b613a8081613a55565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b613abb8161324a565b82525050565b6000613acd8383613ab2565b60208301905092915050565b6000602082019050919050565b6000613af182613a86565b613afb8185613a91565b9350613b0683613aa2565b8060005b83811015613b37578151613b1e8882613ac1565b9750613b2983613ad9565b925050600181019050613b0a565b5085935050505092915050565b600060a082019050613b5960008301886130c5565b613b666020830187613a77565b8181036040830152613b788186613ae6565b9050613b8760608301856133e9565b613b9460808301846130c5565b9695505050505050565b600080fd5b613bac82613135565b810181811067ffffffffffffffff82111715613bcb57613bca6139ed565b5b80604052505050565b6000613bde6131dd565b9050613bea8282613ba3565b919050565b600067ffffffffffffffff821115613c0a57613c096139ed565b5b602082029050602081019050919050565b600080fd5b6000613c33613c2e84613bef565b613bd4565b90508083825260208201905060208402830185811115613c5657613c55613c1b565b5b835b81811015613c7f5780613c6b88826139ab565b845260208401935050602081019050613c58565b5050509392505050565b600082601f830112613c9e57613c9d613b9e565b5b8151613cae848260208601613c20565b91505092915050565b600060208284031215613ccd57613ccc6131e7565b5b600082015167ffffffffffffffff811115613ceb57613cea6131ec565b5b613cf784828501613c89565b91505092915050565b6000606082019050613d1560008301866133e9565b613d2260208301856130c5565b613d2f60408301846130c5565b949350505050565b6000613d42826130bb565b9150613d4d836130bb565b9250828202613d5b816130bb565b91508282048414831517613d7257613d716135cb565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613db3826130bb565b9150613dbe836130bb565b925082613dce57613dcd613d79565b5b828204905092915050565b60008160011c9050919050565b6000808291508390505b6001851115613e3057808604811115613e0c57613e0b6135cb565b5b6001851615613e1b5780820291505b8081029050613e2985613dd9565b9450613df0565b94509492505050565b600082613e495760019050613f05565b81613e575760009050613f05565b8160018114613e6d5760028114613e7757613ea6565b6001915050613f05565b60ff841115613e8957613e886135cb565b5b8360020a915084821115613ea057613e9f6135cb565b5b50613f05565b5060208310610133831016604e8410600b8410161715613edb5782820a905083811115613ed657613ed56135cb565b5b613f05565b613ee88484846001613de6565b92509050818404811115613eff57613efe6135cb565b5b81810290505b9392505050565b6000613f17826130bb565b9150613f22836133b2565b9250613f4f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484613e39565b905092915050565b6000604082019050613f6c60008301856130c5565b613f7960208301846130c5565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000613fba826133b2565b9150613fc5836133b2565b925082613fd557613fd4613d79565b5b828206905092915050565b600081519050919050565b600081905092915050565b600061400182613fe0565b61400b8185613feb565b935061401b81856020860161310b565b80840191505092915050565b60006140338284613ff6565b91508190509291505056fea264697066735822122094bd58f93a8297f7d11f3393cec553f782b584c608f8982ad9f3f1fde79956e364736f6c63430008140033" as const;