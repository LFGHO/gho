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
          "name": "assets",
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
          "name": "",
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
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;

export const bytecode = "0x60c06040523480156200001157600080fd5b5060405162003a2638038062003a268339818101604052810190620000379190620004eb565b33826040518060400160405280600981526020017f47686f20546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f47484f00000000000000000000000000000000000000000000000000000000008152508160039081620000b69190620007ac565b508060049081620000c89190620007ac565b505050600080620000df836200024860201b60201c565b9150915081620000f1576012620000f3565b805b60ff1660a08160ff16815250508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001ac5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001a39190620008a4565b60405180910390fd5b620001bd816200036260201b60201c565b5081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620009b6565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1660405160240160405160208183030381529060405263313ce56760e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051620002bf91906200093a565b600060405180830381855afa9150503d8060008114620002fc576040519150601f19603f3d011682016040523d82523d6000602084013e62000301565b606091505b50915091508180156200031657506020815110155b15620003535760008180602001905181019062000334919062000984565b905060ff801681116200035157600181945094505050506200035d565b505b6000809350935050505b915091565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200045a826200042d565b9050919050565b60006200046e826200044d565b9050919050565b620004808162000461565b81146200048c57600080fd5b50565b600081519050620004a08162000475565b92915050565b6000620004b3826200044d565b9050919050565b620004c581620004a6565b8114620004d157600080fd5b50565b600081519050620004e581620004ba565b92915050565b6000806040838503121562000505576200050462000428565b5b600062000515858286016200048f565b92505060206200052885828601620004d4565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005b457607f821691505b602082108103620005ca57620005c96200056c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006347fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620005f5565b620006408683620005f5565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200068d62000687620006818462000658565b62000662565b62000658565b9050919050565b6000819050919050565b620006a9836200066c565b620006c1620006b88262000694565b84845462000602565b825550505050565b600090565b620006d8620006c9565b620006e58184846200069e565b505050565b5b818110156200070d5762000701600082620006ce565b600181019050620006eb565b5050565b601f8211156200075c576200072681620005d0565b6200073184620005e5565b8101602085101562000741578190505b620007596200075085620005e5565b830182620006ea565b50505b505050565b600082821c905092915050565b6000620007816000198460080262000761565b1980831691505092915050565b60006200079c83836200076e565b9150826002028217905092915050565b620007b78262000532565b67ffffffffffffffff811115620007d357620007d26200053d565b5b620007df82546200059b565b620007ec82828562000711565b600060209050601f8311600181146200082457600084156200080f578287015190505b6200081b85826200078e565b8655506200088b565b601f1984166200083486620005d0565b60005b828110156200085e5784890151825560018201915060208501945060208101905062000837565b868310156200087e57848901516200087a601f8916826200076e565b8355505b6001600288020188555050505b505050505050565b6200089e816200044d565b82525050565b6000602082019050620008bb600083018462000893565b92915050565b600081519050919050565b600081905092915050565b60005b83811015620008f7578082015181840152602081019050620008da565b60008484015250505050565b60006200091082620008c1565b6200091c8185620008cc565b93506200092e818560208601620008d7565b80840191505092915050565b600062000948828462000903565b915081905092915050565b6200095e8162000658565b81146200096a57600080fd5b50565b6000815190506200097e8162000953565b92915050565b6000602082840312156200099d576200099c62000428565b5b6000620009ad848285016200096d565b91505092915050565b60805160a051613035620009f160003960006108d80152600081816106f30152818161090a01528181611654015261188d01526130356000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c806370a082311161010f578063ba087652116100a2578063d905777e11610071578063d905777e1461061d578063dd62ed3e1461064d578063ef8b30f71461067d578063f2fde38b146106ad576101e4565b8063ba0876521461055d578063c63d75b61461058d578063c6e6f592146105bd578063ce96cb77146105ed576101e4565b806395d89b41116100de57806395d89b41146104af578063a9059cbb146104cd578063b3d7f6b9146104fd578063b460af941461052d576101e4565b806370a0823114610427578063715018a6146104575780638da5cb5b1461046157806394bf804d1461047f576101e4565b806318160ddd11610187578063402d267d11610156578063402d267d1461037b5780634cdad506146103ab57806367f4a572146103db5780636e553f65146103f7576101e4565b806318160ddd146102f157806323b872dd1461030f578063313ce5671461033f57806338d52e0f1461035d576101e4565b80630758d924116101c35780630758d9241461024357806307a2d13a14610261578063095ea7b3146102915780630a28a477146102c1576101e4565b80622703a2146101e957806301e1d1141461020757806306fdde0314610225575b600080fd5b6101f16106c9565b6040516101fe9190612310565b60405180910390f35b61020f6106ef565b60405161021c9190612344565b60405180910390f35b61022d610790565b60405161023a91906123ef565b60405180910390f35b61024b610822565b6040516102589190612432565b60405180910390f35b61027b6004803603810190610276919061248d565b610848565b6040516102889190612344565b60405180910390f35b6102ab60048036038101906102a691906124f8565b61085c565b6040516102b89190612553565b60405180910390f35b6102db60048036038101906102d6919061248d565b61087f565b6040516102e89190612344565b60405180910390f35b6102f9610893565b6040516103069190612344565b60405180910390f35b6103296004803603810190610324919061256e565b61089d565b6040516103369190612553565b60405180910390f35b6103476108cc565b60405161035491906125dd565b60405180910390f35b610365610906565b6040516103729190612607565b60405180910390f35b61039560048036038101906103909190612622565b61092e565b6040516103a29190612344565b60405180910390f35b6103c560048036038101906103c0919061248d565b610958565b6040516103d29190612344565b60405180910390f35b6103f560048036038101906103f091906124f8565b61096c565b005b610411600480360381019061040c919061264f565b610e8c565b60405161041e9190612344565b60405180910390f35b610441600480360381019061043c9190612622565b610f0e565b60405161044e9190612344565b60405180910390f35b61045f610f56565b005b610469610f6a565b6040516104769190612607565b60405180910390f35b6104996004803603810190610494919061264f565b610f94565b6040516104a69190612344565b60405180910390f35b6104b7611016565b6040516104c491906123ef565b60405180910390f35b6104e760048036038101906104e291906124f8565b6110a8565b6040516104f49190612553565b60405180910390f35b6105176004803603810190610512919061248d565b6110cb565b6040516105249190612344565b60405180910390f35b6105476004803603810190610542919061268f565b6110df565b6040516105549190612344565b60405180910390f35b6105776004803603810190610572919061268f565b611163565b6040516105849190612344565b60405180910390f35b6105a760048036038101906105a29190612622565b6111e7565b6040516105b49190612344565b60405180910390f35b6105d760048036038101906105d2919061248d565b611211565b6040516105e49190612344565b60405180910390f35b61060760048036038101906106029190612622565b611225565b6040516106149190612344565b60405180910390f35b61063760048036038101906106329190612622565b611241565b6040516106449190612344565b60405180910390f35b610667600480360381019061066291906126e2565b611253565b6040516106749190612344565b60405180910390f35b6106976004803603810190610692919061248d565b6112da565b6040516106a49190612344565b60405180910390f35b6106c760048036038101906106c29190612622565b6112ee565b005b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161074a9190612607565b602060405180830381865afa158015610767573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078b9190612737565b905090565b60606003805461079f90612793565b80601f01602080910402602001604051908101604052809291908181526020018280546107cb90612793565b80156108185780601f106107ed57610100808354040283529160200191610818565b820191906000526020600020905b8154815290600101906020018083116107fb57829003601f168201915b5050505050905090565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610855826000611374565b9050919050565b6000806108676113cd565b90506108748185856113d5565b600191505092915050565b600061088c8260016113e7565b9050919050565b6000600254905090565b6000806108a86113cd565b90506108b5858285611440565b6108c08585856114d4565b60019150509392505050565b60006108d66115c8565b7f000000000000000000000000000000000000000000000000000000000000000061090191906127f3565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b6000610965826000611374565b9050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f390612874565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610a3e93929190612894565b6020604051808303816000875af1158015610a5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8191906128f7565b610ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab790612970565b60405180910390fd5b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610b1d9190612607565b602060405180830381865afa158015610b3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5e9190612737565b90508173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518363ffffffff1660e01b8152600401610bbd929190612990565b6020604051808303816000875af1158015610bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0091906128f7565b506000600267ffffffffffffffff811115610c1e57610c1d6129b9565b5b604051908082528060200260200182016040528015610c4c5781602001602082028036833780820191505090505b5090508481600081518110610c6457610c636129e8565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600181518110610cd557610cd46129e8565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338ed1739856000843061012c42610d609190612a17565b6040518663ffffffff1660e01b8152600401610d80959493929190612b44565b6000604051808303816000875af1158015610d9f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610dc89190612cb7565b506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610e269190612607565b602060405180830381865afa158015610e43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e679190612737565b905060008382610e779190612d00565b9050610e8333826115cd565b50505050505050565b600080610e988361092e565b905080841115610ee3578284826040517f79012fb2000000000000000000000000000000000000000000000000000000008152600401610eda93929190612d34565b60405180910390fd5b6000610eee856112da565b9050610f03610efb6113cd565b85878461164f565b809250505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610f5e6116f2565b610f686000611779565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080610fa0836111e7565b905080841115610feb578284826040517f284ff667000000000000000000000000000000000000000000000000000000008152600401610fe293929190612d34565b60405180910390fd5b6000610ff6856110cb565b905061100b6110036113cd565b85838861164f565b809250505092915050565b60606004805461102590612793565b80601f016020809104026020016040519081016040528092919081815260200182805461105190612793565b801561109e5780601f106110735761010080835404028352916020019161109e565b820191906000526020600020905b81548152906001019060200180831161108157829003601f168201915b5050505050905090565b6000806110b36113cd565b90506110c08185856114d4565b600191505092915050565b60006110d8826001611374565b9050919050565b6000806110eb83611225565b905080851115611136578285826040517ffe9cceec00000000000000000000000000000000000000000000000000000000815260040161112d93929190612d34565b60405180910390fd5b60006111418661087f565b905061115761114e6113cd565b8686898561183f565b80925050509392505050565b60008061116f83611241565b9050808511156111ba578285826040517fb94abeec0000000000000000000000000000000000000000000000000000000081526004016111b193929190612d34565b60405180910390fd5b60006111c586610958565b90506111db6111d26113cd565b8686848a61183f565b80925050509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050919050565b600061121e8260006113e7565b9050919050565b600061123a61123383610f0e565b6000611374565b9050919050565b600061124c82610f0e565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006112e78260006113e7565b9050919050565b6112f66116f2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036113685760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161135f9190612607565b60405180910390fd5b61137181611779565b50565b60006113c560016113836106ef565b61138d9190612a17565b6113956115c8565b600a6113a19190612e9e565b6113a9610893565b6113b39190612a17565b8486611938909392919063ffffffff16565b905092915050565b600033905090565b6113e2838383600161198f565b505050565b60006114386113f46115c8565b600a6114009190612e9e565b611408610893565b6114129190612a17565b600161141c6106ef565b6114269190612a17565b8486611938909392919063ffffffff16565b905092915050565b600061144c8484611253565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146114ce57818110156114be578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016114b593929190612d34565b60405180910390fd5b6114cd8484848403600061198f565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036115465760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161153d9190612607565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115b85760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016115af9190612607565b60405180910390fd5b6115c3838383611b66565b505050565b600090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361163f5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016116369190612607565b60405180910390fd5b61164b60008383611b66565b5050565b61167b7f0000000000000000000000000000000000000000000000000000000000000000853085611d8b565b61168583826115cd565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d784846040516116e4929190612ee9565b60405180910390a350505050565b6116fa6113cd565b73ffffffffffffffffffffffffffffffffffffffff16611718610f6a565b73ffffffffffffffffffffffffffffffffffffffff16146117775761173b6113cd565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161176e9190612607565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461187e5761187d838683611440565b5b6118888382611e0d565b6118b37f00000000000000000000000000000000000000000000000000000000000000008584611e8f565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db8585604051611929929190612ee9565b60405180910390a45050505050565b600080611946868686611f0e565b905061195183612015565b801561196e57506000848061196957611968612f12565b5b868809115b15611983576001816119809190612a17565b90505b80915050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611a015760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016119f89190612607565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611a735760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401611a6a9190612607565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015611b60578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051611b579190612344565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611bb8578060026000828254611bac9190612a17565b92505081905550611c8b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611c44578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401611c3b93929190612d34565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611cd45780600260008282540392505081905550611d21565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611d7e9190612344565b60405180910390a3505050565b611e07848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401611dc093929190612894565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612043565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611e7f5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611e769190612607565b60405180910390fd5b611e8b82600083611b66565b5050565b611f09838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401611ec2929190612990565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612043565b505050565b6000808385029050600080198587098281108382030391505060008103611f4957838281611f3f57611f3e612f12565b5b049250505061200e565b808411611f82576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b60006001600283600381111561202e5761202d612f41565b5b6120389190612f70565b60ff16149050919050565b600061206e828473ffffffffffffffffffffffffffffffffffffffff166120da90919063ffffffff16565b9050600081511415801561209357508080602001905181019061209191906128f7565b155b156120d557826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016120cc9190612607565b60405180910390fd5b505050565b60606120e8838360006120f0565b905092915050565b60608147101561213757306040517fcd78605900000000000000000000000000000000000000000000000000000000815260040161212e9190612607565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1684866040516121609190612fe8565b60006040518083038185875af1925050503d806000811461219d576040519150601f19603f3d011682016040523d82523d6000602084013e6121a2565b606091505b50915091506121b28683836121bd565b925050509392505050565b6060826121d2576121cd8261224c565b612244565b600082511480156121fa575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561223c57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016122339190612607565b60405180910390fd5b819050612245565b5b9392505050565b60008151111561225f5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006122d66122d16122cc84612291565b6122b1565b612291565b9050919050565b60006122e8826122bb565b9050919050565b60006122fa826122dd565b9050919050565b61230a816122ef565b82525050565b60006020820190506123256000830184612301565b92915050565b6000819050919050565b61233e8161232b565b82525050565b60006020820190506123596000830184612335565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561239957808201518184015260208101905061237e565b60008484015250505050565b6000601f19601f8301169050919050565b60006123c18261235f565b6123cb818561236a565b93506123db81856020860161237b565b6123e4816123a5565b840191505092915050565b6000602082019050818103600083015261240981846123b6565b905092915050565b600061241c826122dd565b9050919050565b61242c81612411565b82525050565b60006020820190506124476000830184612423565b92915050565b6000604051905090565b600080fd5b600080fd5b61246a8161232b565b811461247557600080fd5b50565b60008135905061248781612461565b92915050565b6000602082840312156124a3576124a2612457565b5b60006124b184828501612478565b91505092915050565b60006124c582612291565b9050919050565b6124d5816124ba565b81146124e057600080fd5b50565b6000813590506124f2816124cc565b92915050565b6000806040838503121561250f5761250e612457565b5b600061251d858286016124e3565b925050602061252e85828601612478565b9150509250929050565b60008115159050919050565b61254d81612538565b82525050565b60006020820190506125686000830184612544565b92915050565b60008060006060848603121561258757612586612457565b5b6000612595868287016124e3565b93505060206125a6868287016124e3565b92505060406125b786828701612478565b9150509250925092565b600060ff82169050919050565b6125d7816125c1565b82525050565b60006020820190506125f260008301846125ce565b92915050565b612601816124ba565b82525050565b600060208201905061261c60008301846125f8565b92915050565b60006020828403121561263857612637612457565b5b6000612646848285016124e3565b91505092915050565b6000806040838503121561266657612665612457565b5b600061267485828601612478565b9250506020612685858286016124e3565b9150509250929050565b6000806000606084860312156126a8576126a7612457565b5b60006126b686828701612478565b93505060206126c7868287016124e3565b92505060406126d8868287016124e3565b9150509250925092565b600080604083850312156126f9576126f8612457565b5b6000612707858286016124e3565b9250506020612718858286016124e3565b9150509250929050565b60008151905061273181612461565b92915050565b60006020828403121561274d5761274c612457565b5b600061275b84828501612722565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806127ab57607f821691505b6020821081036127be576127bd612764565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006127fe826125c1565b9150612809836125c1565b9250828201905060ff811115612822576128216127c4565b5b92915050565b7f47484f206465706f736974206e6f7420616c6c6f776564000000000000000000600082015250565b600061285e60178361236a565b915061286982612828565b602082019050919050565b6000602082019050818103600083015261288d81612851565b9050919050565b60006060820190506128a960008301866125f8565b6128b660208301856125f8565b6128c36040830184612335565b949350505050565b6128d481612538565b81146128df57600080fd5b50565b6000815190506128f1816128cb565b92915050565b60006020828403121561290d5761290c612457565b5b600061291b848285016128e2565b91505092915050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b600061295a600f8361236a565b915061296582612924565b602082019050919050565b600060208201905081810360008301526129898161294d565b9050919050565b60006040820190506129a560008301856125f8565b6129b26020830184612335565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000612a228261232b565b9150612a2d8361232b565b9250828201905080821115612a4557612a446127c4565b5b92915050565b6000819050919050565b6000612a70612a6b612a6684612a4b565b6122b1565b61232b565b9050919050565b612a8081612a55565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612abb816124ba565b82525050565b6000612acd8383612ab2565b60208301905092915050565b6000602082019050919050565b6000612af182612a86565b612afb8185612a91565b9350612b0683612aa2565b8060005b83811015612b37578151612b1e8882612ac1565b9750612b2983612ad9565b925050600181019050612b0a565b5085935050505092915050565b600060a082019050612b596000830188612335565b612b666020830187612a77565b8181036040830152612b788186612ae6565b9050612b8760608301856125f8565b612b946080830184612335565b9695505050505050565b600080fd5b612bac826123a5565b810181811067ffffffffffffffff82111715612bcb57612bca6129b9565b5b80604052505050565b6000612bde61244d565b9050612bea8282612ba3565b919050565b600067ffffffffffffffff821115612c0a57612c096129b9565b5b602082029050602081019050919050565b600080fd5b6000612c33612c2e84612bef565b612bd4565b90508083825260208201905060208402830185811115612c5657612c55612c1b565b5b835b81811015612c7f5780612c6b8882612722565b845260208401935050602081019050612c58565b5050509392505050565b600082601f830112612c9e57612c9d612b9e565b5b8151612cae848260208601612c20565b91505092915050565b600060208284031215612ccd57612ccc612457565b5b600082015167ffffffffffffffff811115612ceb57612cea61245c565b5b612cf784828501612c89565b91505092915050565b6000612d0b8261232b565b9150612d168361232b565b9250828203905081811115612d2e57612d2d6127c4565b5b92915050565b6000606082019050612d4960008301866125f8565b612d566020830185612335565b612d636040830184612335565b949350505050565b60008160011c9050919050565b6000808291508390505b6001851115612dc257808604811115612d9e57612d9d6127c4565b5b6001851615612dad5780820291505b8081029050612dbb85612d6b565b9450612d82565b94509492505050565b600082612ddb5760019050612e97565b81612de95760009050612e97565b8160018114612dff5760028114612e0957612e38565b6001915050612e97565b60ff841115612e1b57612e1a6127c4565b5b8360020a915084821115612e3257612e316127c4565b5b50612e97565b5060208310610133831016604e8410600b8410161715612e6d5782820a905083811115612e6857612e676127c4565b5b612e97565b612e7a8484846001612d78565b92509050818404811115612e9157612e906127c4565b5b81810290505b9392505050565b6000612ea98261232b565b9150612eb4836125c1565b9250612ee17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612dcb565b905092915050565b6000604082019050612efe6000830185612335565b612f0b6020830184612335565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000612f7b826125c1565b9150612f86836125c1565b925082612f9657612f95612f12565b5b828206905092915050565b600081519050919050565b600081905092915050565b6000612fc282612fa1565b612fcc8185612fac565b9350612fdc81856020860161237b565b80840191505092915050565b6000612ff48284612fb7565b91508190509291505056fea264697066735822122099ba49c357c586ccfb622f3f365ac404c1694558cff884fa2d7d55667196373464736f6c63430008140033" as const;