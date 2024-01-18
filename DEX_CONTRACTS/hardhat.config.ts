import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  // solidity: "0.5.16",
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {},
      },
      {
        version: "0.6.6",
        settings: {},
      },
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
      }
    ],
  },
};

export default config;
