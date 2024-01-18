import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  // solidity: "0.5.16",
  solidity: {
    compilers: [
      {
        version: "0.5.5",
      },
      {
        version: "0.6.6",
        settings: {},
      },
    ],
  },
};

export default config;
