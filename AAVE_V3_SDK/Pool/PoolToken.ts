export const abi = [
    {
        "inputs": [
            {
                "internalType": "contract IPoolAddressesProvider",
                "name": "provider",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "backer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            }
        ],
        "name": "BackUnbacked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum DataTypes.InterestRateMode",
                "name": "interestRateMode",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "borrowRate",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "Borrow",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "initiator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum DataTypes.InterestRateMode",
                "name": "interestRateMode",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "premium",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "FlashLoan",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalDebt",
                "type": "uint256"
            }
        ],
        "name": "IsolationModeTotalDebtUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "collateralAsset",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "debtAsset",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "debtToCover",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "liquidatedCollateralAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "liquidator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "receiveAToken",
                "type": "bool"
            }
        ],
        "name": "LiquidationCall",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "MintUnbacked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountMinted",
                "type": "uint256"
            }
        ],
        "name": "MintedToTreasury",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "RebalanceStableBorrowRate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "repayer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "useATokens",
                "type": "bool"
            }
        ],
        "name": "Repay",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "liquidityRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "stableBorrowRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "variableBorrowRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "liquidityIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "variableBorrowIndex",
                "type": "uint256"
            }
        ],
        "name": "ReserveDataUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "ReserveUsedAsCollateralDisabled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "ReserveUsedAsCollateralEnabled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "Supply",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "enum DataTypes.InterestRateMode",
                "name": "interestRateMode",
                "type": "uint8"
            }
        ],
        "name": "SwapBorrowRateMode",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "categoryId",
                "type": "uint8"
            }
        ],
        "name": "UserEModeSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
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
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ADDRESSES_PROVIDER",
        "outputs": [
            {
                "internalType": "contract IPoolAddressesProvider",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "BRIDGE_PROTOCOL_FEE",
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
        "name": "FLASHLOAN_PREMIUM_TOTAL",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FLASHLOAN_PREMIUM_TO_PROTOCOL",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_NUMBER_RESERVES",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
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
        "name": "POOL_REVISION",
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
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            }
        ],
        "name": "backUnbacked",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "interestRateMode",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            }
        ],
        "name": "borrow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "id",
                "type": "uint8"
            },
            {
                "components": [
                    {
                        "internalType": "uint16",
                        "name": "ltv",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "liquidationThreshold",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "liquidationBonus",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "priceSource",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "label",
                        "type": "string"
                    }
                ],
                "internalType": "struct DataTypes.EModeCategory",
                "name": "category",
                "type": "tuple"
            }
        ],
        "name": "configureEModeCategory",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "dropReserve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
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
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "balanceFromBefore",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "balanceToBefore",
                "type": "uint256"
            }
        ],
        "name": "finalizeTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiverAddress",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "assets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "interestRateModes",
                "type": "uint256[]"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            },
            {
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "flashLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiverAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            },
            {
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "flashLoanSimple",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "getConfiguration",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "data",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DataTypes.ReserveConfigurationMap",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "id",
                "type": "uint8"
            }
        ],
        "name": "getEModeCategoryData",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint16",
                        "name": "ltv",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "liquidationThreshold",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "liquidationBonus",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "priceSource",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "label",
                        "type": "string"
                    }
                ],
                "internalType": "struct DataTypes.EModeCategory",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            }
        ],
        "name": "getReserveAddressById",
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
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "getReserveData",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "data",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct DataTypes.ReserveConfigurationMap",
                        "name": "configuration",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint128",
                        "name": "liquidityIndex",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "currentLiquidityRate",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "variableBorrowIndex",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "currentVariableBorrowRate",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "currentStableBorrowRate",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint40",
                        "name": "lastUpdateTimestamp",
                        "type": "uint40"
                    },
                    {
                        "internalType": "uint16",
                        "name": "id",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "aTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "stableDebtTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "variableDebtTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "interestRateStrategyAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint128",
                        "name": "accruedToTreasury",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "unbacked",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "isolationModeTotalDebt",
                        "type": "uint128"
                    }
                ],
                "internalType": "struct DataTypes.ReserveData",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "getReserveNormalizedIncome",
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
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "getReserveNormalizedVariableDebt",
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
        "name": "getReservesList",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
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
        "name": "getUserAccountData",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalCollateralBase",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalDebtBase",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "availableBorrowsBase",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentLiquidationThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ltv",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "healthFactor",
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
        "name": "getUserConfiguration",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "data",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DataTypes.UserConfigurationMap",
                "name": "",
                "type": "tuple"
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
        "name": "getUserEMode",
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
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "aTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "stableDebtAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "variableDebtAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "interestRateStrategyAddress",
                "type": "address"
            }
        ],
        "name": "initReserve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IPoolAddressesProvider",
                "name": "provider",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collateralAsset",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "debtAsset",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "debtToCover",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "receiveAToken",
                "type": "bool"
            }
        ],
        "name": "liquidationCall",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "assets",
                "type": "address[]"
            }
        ],
        "name": "mintToTreasury",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "mintUnbacked",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "rebalanceStableBorrowRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "interestRateMode",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            }
        ],
        "name": "repay",
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
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "interestRateMode",
                "type": "uint256"
            }
        ],
        "name": "repayWithATokens",
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
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "interestRateMode",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "permitV",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "permitR",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "permitS",
                "type": "bytes32"
            }
        ],
        "name": "repayWithPermit",
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
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "rescueTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "resetIsolationModeTotalDebt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "data",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DataTypes.ReserveConfigurationMap",
                "name": "configuration",
                "type": "tuple"
            }
        ],
        "name": "setConfiguration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "rateStrategyAddress",
                "type": "address"
            }
        ],
        "name": "setReserveInterestRateStrategyAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "categoryId",
                "type": "uint8"
            }
        ],
        "name": "setUserEMode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "useAsCollateral",
                "type": "bool"
            }
        ],
        "name": "setUserUseReserveAsCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            }
        ],
        "name": "supply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "referralCode",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "permitV",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "permitR",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "permitS",
                "type": "bytes32"
            }
        ],
        "name": "supplyWithPermit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "interestRateMode",
                "type": "uint256"
            }
        ],
        "name": "swapBorrowRateMode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "protocolFee",
                "type": "uint256"
            }
        ],
        "name": "updateBridgeProtocolFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "flashLoanPremiumTotal",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "flashLoanPremiumToProtocol",
                "type": "uint128"
            }
        ],
        "name": "updateFlashloanPremiums",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
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

export const bytecode = "0x608060405234801561001057600080fd5b50600436106103095760003560e01c80637a708e921161019c578063d15e0053116100ee578063e82fec2f11610097578063ee3e210b11610071578063ee3e210b1461096d578063f51e435b14610980578063f8119d511461099357600080fd5b8063e82fec2f14610922578063e8eda9df146106da578063eddf1b791461093457600080fd5b8063d5ed3933116100c8578063d5ed3933146108e9578063d65dc7a1146108fc578063e43e88a11461090f57600080fd5b8063d15e0053146108ae578063d1946dbc146108c1578063d579ea7d146108d657600080fd5b8063bcb6e52211610150578063c4d66de81161012a578063c4d66de814610875578063cd11238214610888578063cea9d26f1461089b57600080fd5b8063bcb6e522146107d3578063bf92857c146107e6578063c44b11f71461082657600080fd5b80639cd19996116101815780639cd199961461079a578063a415bcad146107ad578063ab9c4b5d146107c057600080fd5b80637a708e921461077457806394ba89a21461078757600080fd5b8063386497fd11610260578063617ba0371161020957806369a933a5116101e357806369a933a5146107135780636a99c036146107265780636c6f6ae11461075457600080fd5b8063617ba037146106da57806363c9b860146106ed57806369328dec1461070057600080fd5b8063527517971161023a578063527517971461067a578063573ade81146106b45780635a3b74b9146106c757600080fd5b8063386497fd146105f657806342b0b77c146106095780634417a5831461061c57600080fd5b80631d2118f9116102c25780632dad97d41161029c5780632dad97d4146104025780633036b4391461041557806335ea6a751461042857600080fd5b80631d2118f9146103d4578063272d9072146103e757806328530a47146103ef57600080fd5b806302c205f0116102f357806302c205f01461033e5780630542975c14610351578063074b2e431461039d57600080fd5b8062a718a91461030e5780630148170e14610323575b600080fd5b61032161031c366004613e1b565b6109a2565b005b61032b600181565b6040519081526020015b60405180910390f35b61032161034c366004613ea6565b610c1d565b6103787f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610335565b603a546fffffffffffffffffffffffffffffffff165b6040516fffffffffffffffffffffffffffffffff9091168152602001610335565b6103216103e2366004613f25565b610dcd565b60395461032b565b6103216103fd366004613f5e565b610fbb565b61032b610410366004613f79565b61119a565b610321610423366004613fae565b6112de565b6105e9610436366004613fc7565b604080516102008101825260006101e08201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c08101919091525073ffffffffffffffffffffffffffffffffffffffff90811660009081526034602090815260409182902082516102008101845281546101e08201908152815260018201546fffffffffffffffffffffffffffffffff80821694830194909452700100000000000000000000000000000000908190048416948201949094526002820154808416606083015284900483166080820152600382015480841660a083015284810464ffffffffff1660c08301527501000000000000000000000000000000000000000000900461ffff1660e0820152600482015485166101008201526005820154851661012082015260068201548516610140820152600782015490941661016085015260088101548083166101808601529290920481166101a0840152600990910154166101c082015290565b6040516103359190613fe4565b61032b610604366004613fc7565b6112eb565b6103216106173660046141aa565b61131f565b61066b61062a366004613fc7565b604080516020808201835260009182905273ffffffffffffffffffffffffffffffffffffffff93909316815260358352819020815192830190915254815290565b60405190518152602001610335565b61037861068836600461422c565b61ffff1660009081526036602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b61032b6106c2366004614247565b611499565b6103216106d5366004614291565b6115f2565b6103216106e83660046142bf565b6117c7565b6103216106fb366004613fc7565b6118ca565b61032b61070e366004614310565b611946565b6103216107213660046142bf565b611b65565b603a5470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff166103b3565b610767610762366004613f5e565b611c12565b60405161033591906143bd565b610321610782366004614420565b611d4c565b610321610795366004614483565b611ed8565b6103216107a83660046144f4565b611f59565b6103216107bb366004614536565b611fae565b6103216107ce366004614575565b612294565b6103216107e136600461468f565b61264d565b6107f96107f4366004613fc7565b612684565b604080519687526020870195909552938501929092526060840152608083015260a082015260c001610335565b61066b610834366004613fc7565b604080516020808201835260009182905273ffffffffffffffffffffffffffffffffffffffff93909316815260348352819020815192830190915254815290565b610321610883366004613fc7565b6128b3565b610321610896366004613f25565b612ab7565b6103216108a93660046146c2565b612b40565b61032b6108bc366004613fc7565b612bed565b6108c9612c1b565b6040516103359190614703565b6103216108e4366004614804565b612d57565b6103216108f736600461493c565b612ec3565b61032b61090a366004613f79565b61314a565b61032161091d366004613fc7565b6131ea565b603b5467ffffffffffffffff1661032b565b61032b610942366004613fc7565b73ffffffffffffffffffffffffffffffffffffffff1660009081526038602052604090205460ff1690565b61032b61097b3660046149a1565b61325f565b61032161098e3660046149e7565b61343a565b60405160808152602001610335565b732e021eead190cd55c0ceecf308416d0ba0a8a0156383c1087d6034603660356037604051806101200160405280603b60089054906101000a900461ffff1661ffff1681526020018981526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018b73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff16815260200188151581526020017f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ab7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adb9190614a46565b73ffffffffffffffffffffffffffffffffffffffff90811682528b81166000908152603860209081526040918290205460ff168185015281517f5eb88d3d000000000000000000000000000000000000000000000000000000008152825192909401937f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a90931692635eb88d3d92600480830193928290030181865afa158015610b89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bad9190614a46565b73ffffffffffffffffffffffffffffffffffffffff168152506040518663ffffffff1660e01b8152600401610be6959493929190614a63565b60006040518083038186803b158015610bfe57600080fd5b505af4158015610c12573d6000803e3d6000fd5b505050505050505050565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810185905260ff8416608482015260a4810183905260c4810182905273ffffffffffffffffffffffffffffffffffffffff89169063d505accf9060e401600060405180830381600087803b158015610caf57600080fd5b505af1158015610cc3573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff86811660008181526035602090815260409182902082516080810184528d861681529182018c815282840194855261ffff8b81166060850190815294517f1913f16100000000000000000000000000000000000000000000000000000000815260346004820152603660248201526044810193909352925186166064830152516084820152925190931660a48301525190911660c48201527377241299ffa12df99da6c3d9f195aa298955aec690631913f1619060e40160006040518083038186803b158015610dab57600080fd5b505af4158015610dbf573d6000803e3d6000fd5b505050505050505050505050565b610dd56135f6565b60408051808201909152600281527f3737000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff8316610e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b60405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff82166000908152603460205260409020600301547501000000000000000000000000000000000000000000900461ffff16151580610ef657506000805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e005473ffffffffffffffffffffffffffffffffffffffff8381169116145b6040518060400160405280600281526020017f383200000000000000000000000000000000000000000000000000000000000081525090610f64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b5073ffffffffffffffffffffffffffffffffffffffff918216600090815260346020526040902060070180547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b7337dc7863a743fca4e532bbe6dee644b87d636ea0635d5dc3136034603660376038603560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405280603b60089054906101000a900461ffff1661ffff1681526020017f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d09190614a46565b73ffffffffffffffffffffffffffffffffffffffff1681526020018960ff168152506040518763ffffffff1660e01b81526004016111679695949392919095865260208087019590955260408087019490945260608601929092526080850152805160a08501529182015173ffffffffffffffffffffffffffffffffffffffff1660c0840152015160ff1660e08201526101000190565b60006040518083038186803b15801561117f57600080fd5b505af4158015611193573d6000803e3d6000fd5b5050505050565b6000730f154441c7026edd6a89cc3a5faa2f64c7335c806340e95de660346036603560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052808a73ffffffffffffffffffffffffffffffffffffffff16815260200189815260200188600281111561123857611238614b57565b600281111561124957611249614b57565b81523360208201526001604091820152517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526112939493929190600401614bc1565b602060405180830381865af41580156112b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d49190614c34565b90505b9392505050565b6112e66135f6565b603955565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260346020526040812061131990613724565b92915050565b60006040518060e001604052808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250505061ffff8516602080840191909152603a546fffffffffffffffffffffffffffffffff70010000000000000000000000000000000082048116604080870191909152911660609094019390935273ffffffffffffffffffffffffffffffffffffffff8a1682526034905281902090517fa1fe0e8d000000000000000000000000000000000000000000000000000000008152919250735e659d4c0f8a727d00ae70f96a02c4a64f76c5cb9163a1fe0e8d91611460918590600401614c4d565b60006040518083038186803b15801561147857600080fd5b505af415801561148c573d6000803e3d6000fd5b5050505050505050505050565b6000730f154441c7026edd6a89cc3a5faa2f64c7335c806340e95de660346036603560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052808b73ffffffffffffffffffffffffffffffffffffffff1681526020018a815260200189600281111561153757611537614b57565b600281111561154857611548614b57565b815273ffffffffffffffffffffffffffffffffffffffff891660208201526000604091820152517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526115a89493929190600401614bc1565b602060405180830381865af41580156115c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e99190614c34565b95945050505050565b7377241299ffa12df99da6c3d9f195aa298955aec663bf697a26603460366037603560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208787603b60089054906101000a900461ffff167f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f39190614a46565b336000908152603860205260409081902054905160e08b901b7fffffffff00000000000000000000000000000000000000000000000000000000168152600481019990995260248901979097526044880195909552606487019390935273ffffffffffffffffffffffffffffffffffffffff9182166084870152151560a486015261ffff90911660c48501521660e483015260ff16610104820152610124015b60006040518083038186803b1580156117ab57600080fd5b505af41580156117bf573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152603560209081526040918290208251608081018452898616815291820188815282840194855261ffff8781166060850190815294517f1913f16100000000000000000000000000000000000000000000000000000000815260346004820152603660248201526044810193909352925186166064830152516084820152925190931660a48301525190911660c48201527377241299ffa12df99da6c3d9f195aa298955aec690631913f1619060e4015b60006040518083038186803b1580156118ac57600080fd5b505af41580156118c0573d6000803e3d6000fd5b5050505050505050565b6118d26135f6565b6040517f9cf57023000000000000000000000000000000000000000000000000000000008152603460048201526036602482015273ffffffffffffffffffffffffffffffffffffffff82166044820152731ce1ba9946c30b4c505631ad9e3e0342877fde0290639cf5702390606401611167565b60007377241299ffa12df99da6c3d9f195aa298955aec663186dea44603460366037603560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052808b73ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018973ffffffffffffffffffffffffffffffffffffffff168152602001603b60089054906101000a900461ffff1661ffff1681526020017f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a999190614a46565b73ffffffffffffffffffffffffffffffffffffffff9081168252336000908152603860209081526040918290205460ff90811694820194909452815160e08b901b7fffffffff0000000000000000000000000000000000000000000000000000000016815260048101999099526024890197909752604488019590955260648701939093528151831660848701529381015160a486015291820151811660c4850152606082015160e485015260808201511661010484015260a001511661012482015261014401611293565b611b6d6137b4565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152603560205260409081902090517f0413c86f0000000000000000000000000000000000000000000000000000000081526034600482015260366024820152604481019190915291861660648301526084820185905260a482015261ffff821660c48201527350360e830f4cc6d9daa1e74d2a5ad9644fd202c190630413c86f9060e401611894565b6040805160a081018252600080825260208201819052918101829052606080820192909252608081019190915260ff8216600090815260376020908152604091829020825160a081018452815461ffff8082168352620100008204811694830194909452640100000000810490931693810193909352660100000000000090910473ffffffffffffffffffffffffffffffffffffffff166060830152600181018054608084019190611cc390614cd8565b80601f0160208091040260200160405190810160405280929190818152602001828054611cef90614cd8565b8015611d3c5780601f10611d1157610100808354040283529160200191611d3c565b820191906000526020600020905b815481529060010190602001808311611d1f57829003601f168201915b5050505050815250509050919050565b611d546135f6565b731ce1ba9946c30b4c505631ad9e3e0342877fde026369fc1bdf603460366040518060e001604052808a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001603b60089054906101000a900461ffff1661ffff168152602001611e2b608090565b61ffff168152506040518463ffffffff1660e01b8152600401611e5093929190614d26565b602060405180830381865af4158015611e6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e919190614db6565b1561119357603b805468010000000000000000900461ffff16906008611eb683614e02565b91906101000a81548161ffff021916908361ffff160217905550505050505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526034602090815260408083203384526035909252909120730f154441c7026edd6a89cc3a5faa2f64c7335c809163eac4d7039185856002811115611f3a57611f3a614b57565b6040518563ffffffff1660e01b81526004016117939493929190614e24565b6040517f48c2ca8c000000000000000000000000000000000000000000000000000000008152731ce1ba9946c30b4c505631ad9e3e0342877fde02906348c2ca8c906117939060349086908690600401614e5b565b730f154441c7026edd6a89cc3a5faa2f64c7335c80631e6473f9603460366037603560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518061018001604052808c73ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a600281111561208557612085614b57565b600281111561209657612096614b57565b815261ffff808b166020808401919091526001604080850191909152603b5467ffffffffffffffff81166060860152680100000000000000009004909216608084015281517ffca513a8000000000000000000000000000000000000000000000000000000008152915160a09093019273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a169263fca513a89260048083019391928290030181865afa158015612165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121899190614a46565b73ffffffffffffffffffffffffffffffffffffffff90811682528981166000908152603860209081526040918290205460ff168185015281517f5eb88d3d000000000000000000000000000000000000000000000000000000008152825192909401937f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a90931692635eb88d3d92600480830193928290030181865afa158015612237573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061225b9190614a46565b73ffffffffffffffffffffffffffffffffffffffff168152506040518663ffffffff1660e01b8152600401610be6959493929190614ec0565b6000604051806101c001604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c8c808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506040805160208c810282810182019093528c82529283019290918d918d9182918501908490808284376000920191909152505050908252506040805160208a810282810182019093528a82529283019290918b918b91829185019084908082843760009201919091525050509082525073ffffffffffffffffffffffffffffffffffffffff871660208083019190915260408051601f88018390048302810183018252878152920191908790879081908401838280828437600092018290525093855250505061ffff808616602080850191909152603a546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811660408088019190915291166060860152603b5467ffffffffffffffff8116608087015268010000000000000000900490921660a085015273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a811660c08601819052908b16845260388252928290205460ff1660e085015281517f707cd71600000000000000000000000000000000000000000000000000000000815291516101009094019363707cd7169260048082019392918290030181865afa1580156124d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124f89190614a46565b6040517ffa50f29700000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff919091169063fa50f29790602401602060405180830381865afa158015612564573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125889190614db6565b1515905273ffffffffffffffffffffffffffffffffffffffff86166000908152603560205260409081902090517f2e7263ea000000000000000000000000000000000000000000000000000000008152919250735e659d4c0f8a727d00ae70f96a02c4a64f76c5cb91632e7263ea9161260f91603491603691603791908890600401615069565b60006040518083038186803b15801561262757600080fd5b505af415801561263b573d6000803e3d6000fd5b50505050505050505050505050505050565b6126556135f6565b6fffffffffffffffffffffffffffffffff90811670010000000000000000000000000000000002911617603a55565b6040805173ffffffffffffffffffffffffffffffffffffffff83811660008181526035602090815285822060c0860187525460a086019081528552603b5468010000000000000000900461ffff16818601528486019290925284517ffca513a80000000000000000000000000000000000000000000000000000000081529451909485948594859485948594731ce1ba9946c30b4c505631ad9e3e0342877fde02946326ec273f9460349460369460379460608501937f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a169263fca513a8926004808401938290030181865afa158015612782573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a69190614a46565b73ffffffffffffffffffffffffffffffffffffffff90811682528e81166000908152603860209081526040918290205460ff90811694820194909452815160e08a901b7fffffffff00000000000000000000000000000000000000000000000000000000168152600481019890985260248801969096526044870194909452825151606487015293820151608486015291810151831660a4850152606081015190921660c48401526080909101511660e48201526101040160c060405180830381865af415801561287b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061289f919061520f565b949c939b5091995097509550909350915050565b6001805460ff16806128c45750303b155b806128d0575060005481115b61295c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a65640000000000000000000000000000000000006064820152608401610e57565b60015460ff1615801561299957600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b7f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f313200000000000000000000000000000000000000000000000000000000000081525090612a56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b50603b80547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166109c41790558015612ab257600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b505050565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152603460205260409081902090517f6973f744000000000000000000000000000000000000000000000000000000008152600481019190915260248101919091529082166044820152730f154441c7026edd6a89cc3a5faa2f64c7335c8090636973f74490606401611793565b612b48613941565b6040517f87b322b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80851660048301528316602482015260448101829052731ce1ba9946c30b4c505631ad9e3e0342877fde02906387b322b29060640160006040518083038186803b158015612bd057600080fd5b505af4158015612be4573d6000803e3d6000fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260346020526040812061131990613ace565b603b5460609068010000000000000000900461ffff166000808267ffffffffffffffff811115612c4d57612c4d61475d565b604051908082528060200260200182016040528015612c76578160200160208202803683370190505b50905060005b83811015612d4d5760008181526036602052604090205473ffffffffffffffffffffffffffffffffffffffff1615612d2d5760008181526036602052604090205473ffffffffffffffffffffffffffffffffffffffff1682612cde8584615259565b81518110612cee57612cee615270565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050612d3b565b82612d378161529f565b9350505b80612d458161529f565b915050612c7c565b5091038152919050565b612d5f6135f6565b60408051808201909152600281527f3136000000000000000000000000000000000000000000000000000000000000602082015260ff8316612dce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b5060ff8216600090815260376020908152604091829020835181548386015194860151606087015173ffffffffffffffffffffffffffffffffffffffff166601000000000000027fffffffffffff0000000000000000000000000000000000000000ffffffffffff61ffff92831664010000000002167fffffffffffff00000000000000000000000000000000000000000000ffffffff97831662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000909416929094169190911791909117949094161792909217825560808301518051849392611193926001850192910190613d42565b73ffffffffffffffffffffffffffffffffffffffff868116600090815260346020908152604091829020600401548251808401909352600283527f3131000000000000000000000000000000000000000000000000000000000000918301919091529091163314612f61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b507377241299ffa12df99da6c3d9f195aa298955aec6638a5dadd160346036603760356040518061012001604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018b73ffffffffffffffffffffffffffffffffffffffff1681526020018a8152602001898152602001888152602001603b60089054906101000a900461ffff1661ffff1681526020017f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801561307b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061309f9190614a46565b73ffffffffffffffffffffffffffffffffffffffff90811682528d166000908152603860209081526040918290205460ff16920191909152517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b1681526131129594939291906004016152d8565b60006040518083038186803b15801561312a57600080fd5b505af415801561313e573d6000803e3d6000fd5b50505050505050505050565b60006131546137b4565b73ffffffffffffffffffffffffffffffffffffffff84166000818152603460205260409081902060395491517f8e74324800000000000000000000000000000000000000000000000000000000815260048101919091526024810192909252604482018590526064820184905260848201527350360e830f4cc6d9daa1e74d2a5ad9644fd202c190638e7432489060a401611293565b6131f26135f6565b6040517f1e3b41450000000000000000000000000000000000000000000000000000000081526034600482015273ffffffffffffffffffffffffffffffffffffffff82166024820152731ce1ba9946c30b4c505631ad9e3e0342877fde0290631e3b414590604401611167565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810185905260ff8416608482015260a4810183905260c4810182905260009073ffffffffffffffffffffffffffffffffffffffff8a169063d505accf9060e401600060405180830381600087803b1580156132f457600080fd5b505af1158015613308573d6000803e3d6000fd5b5050505060006040518060a001604052808b73ffffffffffffffffffffffffffffffffffffffff1681526020018a815260200189600281111561334d5761334d614b57565b600281111561335e5761335e614b57565b815273ffffffffffffffffffffffffffffffffffffffff89166020808301829052600060409384018190529182526035905281902090517f40e95de6000000000000000000000000000000000000000000000000000000008152919250730f154441c7026edd6a89cc3a5faa2f64c7335c80916340e95de6916133eb916034916036918790600401614bc1565b602060405180830381865af4158015613408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061342c9190614c34565b9a9950505050505050505050565b6134426135f6565b60408051808201909152600281527f3737000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff83166134c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b5073ffffffffffffffffffffffffffffffffffffffff82166000908152603460205260409020600301547501000000000000000000000000000000000000000000900461ffff1615158061355a57506000805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e005473ffffffffffffffffffffffffffffffffffffffff8381169116145b6040518060400160405280600281526020017f3832000000000000000000000000000000000000000000000000000000000000815250906135c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b5073ffffffffffffffffffffffffffffffffffffffff91909116600090815260346020526040902090359055565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663631adfca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613678573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061369c9190614a46565b73ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f313000000000000000000000000000000000000000000000000000000000000081525090613721576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b50565b6003810154600090700100000000000000000000000000000000900464ffffffffff164281141561376a575050600201546fffffffffffffffffffffffffffffffff1690565b60028301546112d7906fffffffffffffffffffffffffffffffff808216916137a8917001000000000000000000000000000000009091041684613b52565b90613b5f565b50919050565b7f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa15801561381f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906138439190614a46565b6040517f726600ce00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff919091169063726600ce90602401602060405180830381865afa1580156138af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906138d39190614db6565b6040518060400160405280600181526020017f360000000000000000000000000000000000000000000000000000000000000081525090613721576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b7f000000000000000000000000012bac54348c0e635dcac9d5fb99f06f24136c9a73ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156139ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139d09190614a46565b6040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9190911690637be53ca190602401602060405180830381865afa158015613a3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a609190614db6565b6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525090613721576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579190614b44565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415613b14575050600101546fffffffffffffffffffffffffffffffff1690565b60018301546112d7906fffffffffffffffffffffffffffffffff808216916137a8917001000000000000000000000000000000009091041684613bb6565b60006112d7838342613bfb565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff83900484111517613b9457600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600080613bca64ffffffffff841642615259565b613bd490856153b4565b6301e1338090049050613bf3816b033b2e3c9fd0803ce8000000615420565b949350505050565b600080613c0f64ffffffffff851684615259565b905080613c2b576b033b2e3c9fd0803ce80000009150506112d7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81016000808060028511613c61576000613c66565b600285035b925066038882915c4000613c7a8a80613b5f565b81613c8757613c876153f1565b0491506301e13380613c99838b613b5f565b81613ca657613ca66153f1565b049050600082613cb686886153b4565b613cc091906153b4565b60029004905060008285613cd4888a6153b4565b613cde91906153b4565b613ce891906153b4565b60069004905080826301e13380613cff8a8f6153b4565b613d099190615438565b613d1f906b033b2e3c9fd0803ce8000000615420565b613d299190615420565b613d339190615420565b9b9a5050505050505050505050565b828054613d4e90614cd8565b90600052602060002090601f016020900481019282613d705760008555613db6565b82601f10613d8957805160ff1916838001178555613db6565b82800160010185558215613db6579182015b82811115613db6578251825591602001919060010190613d9b565b50613dc2929150613dc6565b5090565b5b80821115613dc25760008155600101613dc7565b73ffffffffffffffffffffffffffffffffffffffff8116811461372157600080fd5b8035613e0881613ddb565b919050565b801515811461372157600080fd5b600080600080600060a08688031215613e3357600080fd5b8535613e3e81613ddb565b94506020860135613e4e81613ddb565b93506040860135613e5e81613ddb565b9250606086013591506080860135613e7581613e0d565b809150509295509295909350565b803561ffff81168114613e0857600080fd5b803560ff81168114613e0857600080fd5b600080600080600080600080610100898b031215613ec357600080fd5b8835613ece81613ddb565b9750602089013596506040890135613ee581613ddb565b9550613ef360608a01613e83565b945060808901359350613f0860a08a01613e95565b925060c0890135915060e089013590509295985092959890939650565b60008060408385031215613f3857600080fd5b8235613f4381613ddb565b91506020830135613f5381613ddb565b809150509250929050565b600060208284031215613f7057600080fd5b6112d782613e95565b600080600060608486031215613f8e57600080fd5b8335613f9981613ddb565b95602085013595506040909401359392505050565b600060208284031215613fc057600080fd5b5035919050565b600060208284031215613fd957600080fd5b81356112d781613ddb565b81515181526101e08101602083015161401160208401826fffffffffffffffffffffffffffffffff169052565b50604083015161403560408401826fffffffffffffffffffffffffffffffff169052565b50606083015161405960608401826fffffffffffffffffffffffffffffffff169052565b50608083015161407d60808401826fffffffffffffffffffffffffffffffff169052565b5060a08301516140a160a08401826fffffffffffffffffffffffffffffffff169052565b5060c08301516140ba60c084018264ffffffffff169052565b5060e08301516140d060e084018261ffff169052565b506101008381015173ffffffffffffffffffffffffffffffffffffffff9081169184019190915261012080850151821690840152610140808501518216908401526101608085015190911690830152610180808401516fffffffffffffffffffffffffffffffff908116918401919091526101a0808501518216908401526101c09384015116929091019190915290565b60008083601f84011261417357600080fd5b50813567ffffffffffffffff81111561418b57600080fd5b6020830191508360208285010111156141a357600080fd5b9250929050565b60008060008060008060a087890312156141c357600080fd5b86356141ce81613ddb565b955060208701356141de81613ddb565b945060408701359350606087013567ffffffffffffffff81111561420157600080fd5b61420d89828a01614161565b9094509250614220905060808801613e83565b90509295509295509295565b60006020828403121561423e57600080fd5b6112d782613e83565b6000806000806080858703121561425d57600080fd5b843561426881613ddb565b93506020850135925060408501359150606085013561428681613ddb565b939692955090935050565b600080604083850312156142a457600080fd5b82356142af81613ddb565b91506020830135613f5381613e0d565b600080600080608085870312156142d557600080fd5b84356142e081613ddb565b93506020850135925060408501356142f781613ddb565b915061430560608601613e83565b905092959194509250565b60008060006060848603121561432557600080fd5b833561433081613ddb565b925060208401359150604084013561434781613ddb565b809150509250925092565b6000815180845260005b818110156143785760208185018101518683018201520161435c565b8181111561438a576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061ffff8084511660208401528060208501511660408401528060408501511660608401525073ffffffffffffffffffffffffffffffffffffffff6060840151166080830152608083015160a080840152613bf360c0840182614352565b600080600080600060a0868803121561443857600080fd5b853561444381613ddb565b9450602086013561445381613ddb565b9350604086013561446381613ddb565b9250606086013561447381613ddb565b91506080860135613e7581613ddb565b6000806040838503121561449657600080fd5b82356144a181613ddb565b946020939093013593505050565b60008083601f8401126144c157600080fd5b50813567ffffffffffffffff8111156144d957600080fd5b6020830191508360208260051b85010111156141a357600080fd5b6000806020838503121561450757600080fd5b823567ffffffffffffffff81111561451e57600080fd5b61452a858286016144af565b90969095509350505050565b600080600080600060a0868803121561454e57600080fd5b853561455981613ddb565b9450602086013593506040860135925061447360608701613e83565b600080600080600080600080600080600060e08c8e03121561459657600080fd5b61459f8c613dfd565b9a5067ffffffffffffffff8060208e013511156145bb57600080fd5b6145cb8e60208f01358f016144af565b909b50995060408d01358110156145e157600080fd5b6145f18e60408f01358f016144af565b909950975060608d013581101561460757600080fd5b6146178e60608f01358f016144af565b909750955061462860808e01613dfd565b94508060a08e0135111561463b57600080fd5b5061464c8d60a08e01358e01614161565b909350915061465d60c08d01613e83565b90509295989b509295989b9093969950565b80356fffffffffffffffffffffffffffffffff81168114613e0857600080fd5b600080604083850312156146a257600080fd5b6146ab8361466f565b91506146b96020840161466f565b90509250929050565b6000806000606084860312156146d757600080fd5b83356146e281613ddb565b925060208401356146f281613ddb565b929592945050506040919091013590565b6020808252825182820181905260009190848201906040850190845b8181101561475157835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161471f565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156147af576147af61475d565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156147fc576147fc61475d565b604052919050565b6000806040838503121561481757600080fd5b61482083613e95565b915060208084013567ffffffffffffffff8082111561483e57600080fd5b9085019060a0828803121561485257600080fd5b61485a61478c565b61486383613e83565b8152614870848401613e83565b8482015261488060408401613e83565b6040820152606083013561489381613ddb565b60608201526080830135828111156148aa57600080fd5b80840193505087601f8401126148bf57600080fd5b8235828111156148d1576148d161475d565b614901857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016147b5565b9250808352888582860101111561491757600080fd5b8085850186850137600085828501015250816080820152809450505050509250929050565b60008060008060008060c0878903121561495557600080fd5b863561496081613ddb565b9550602087013561497081613ddb565b9450604087013561498081613ddb565b959894975094956060810135955060808101359460a0909101359350915050565b600080600080600080600080610100898b0312156149be57600080fd5b88356149c981613ddb565b975060208901359650604089013595506060890135613ef381613ddb565b60008082840360408112156149fb57600080fd5b8335614a0681613ddb565b925060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215614a3857600080fd5b506020830190509250929050565b600060208284031215614a5857600080fd5b81516112d781613ddb565b60006101a08201905086825285602083015284604083015283606083015282516080830152602083015160a0830152604083015173ffffffffffffffffffffffffffffffffffffffff80821660c08501528060608601511660e085015250506080830151610100614aeb8185018373ffffffffffffffffffffffffffffffffffffffff169052565b60a0850151151561012085015260c085015173ffffffffffffffffffffffffffffffffffffffff90811661014086015260e086015160ff166101608601529085015190811661018085015290505b509695505050505050565b6020815260006112d76020830184614352565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110614bbd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b60006101008201905085825284602083015283604083015273ffffffffffffffffffffffffffffffffffffffff808451166060840152602084015160808401526040840151614c1360a0850182614b86565b5060608401511660c0830152608090920151151560e0909101529392505050565b600060208284031215614c4657600080fd5b5051919050565b82815260406020820152600073ffffffffffffffffffffffffffffffffffffffff8084511660408401528060208501511660608401525060408301516080830152606083015160e060a0840152614ca8610120840182614352565b905061ffff60808501511660c084015260a084015160e084015260c0840151610100840152809150509392505050565b600181811c90821680614cec57607f821691505b602082108114156137ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006101208201905084825283602083015273ffffffffffffffffffffffffffffffffffffffff8084511660408401528060208501511660608401528060408501511660808401528060608501511660a08401528060808501511660c08401525060a0830151614d9c60e084018261ffff169052565b5060c083015161ffff811661010084015250949350505050565b600060208284031215614dc857600080fd5b81516112d781613e0d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061ffff80831681811415614e1a57614e1a614dd3565b6001019392505050565b8481526020810184905273ffffffffffffffffffffffffffffffffffffffff83166040820152608081016115e96060830184614b86565b83815260406020808301829052908201839052600090849060608401835b86811015614eb4578335614e8c81613ddb565b73ffffffffffffffffffffffffffffffffffffffff1682529282019290820190600101614e79565b50979650505050505050565b858152602081018590526040810184905260608101839052815173ffffffffffffffffffffffffffffffffffffffff1660808201526102008101602083015173ffffffffffffffffffffffffffffffffffffffff811660a084015250604083015173ffffffffffffffffffffffffffffffffffffffff811660c084015250606083015160e08301526080830151610100614f5c81850183614b86565b60a08501519150610120614f758186018461ffff169052565b60c08601519250610140614f8c8187018515159052565b60e087015161016087810191909152928701516101808701529086015173ffffffffffffffffffffffffffffffffffffffff9081166101a08701529086015160ff166101c0860152908501519081166101e08501529050614b39565b600081518084526020808501945080840160005b8381101561502e57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101614ffc565b509495945050505050565b600081518084526020808501945080840160005b8381101561502e5781518752958201959082019060010161504d565b85815284602082015283604082015282606082015260a060808201526150a860a08201835173ffffffffffffffffffffffffffffffffffffffff169052565b600060208301516101c08060c08501526150c6610260850183614fe8565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60808685030160e08701526151028483615039565b9350606087015191506101008187860301818801526151218584615039565b94506080880151925061012061514e8189018573ffffffffffffffffffffffffffffffffffffffff169052565b60a089015193506101408389880301818a015261516b8786614352565b965060c08a015194506101609350615188848a018661ffff169052565b60e08a0151945061018085818b0152838b015195506101a0935085848b0152828b0151878b0152818b01516101e08b0152848b015196506151e26102008b018873ffffffffffffffffffffffffffffffffffffffff169052565b8a015160ff81166102208b015295506151f9915050565b8701518015156102408801529250614eb4915050565b60008060008060008060c0878903121561522857600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b60008282101561526b5761526b614dd3565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156152d1576152d1614dd3565b5060010190565b60006101a08201905086825285602083015284604083015283606083015273ffffffffffffffffffffffffffffffffffffffff8084511660808401528060208501511660a084015250604083015161534860c084018273ffffffffffffffffffffffffffffffffffffffff169052565b50606083015160e08301526080830151610100818185015260a085015161012085015260c085015161014085015260e085015191506153a061016085018373ffffffffffffffffffffffffffffffffffffffff169052565b84015160ff81166101808501529050614b39565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156153ec576153ec614dd3565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000821982111561543357615433614dd3565b500190565b60008261546e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220ff1d21d596e69751319c9e3948eab4b10128664f31ae77f5e38f7ef33bd5a56664736f6c634300080a0033" as const;