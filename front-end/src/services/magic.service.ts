import { ChainId } from "@biconomy/core-types";
import { Magic } from "magic-sdk";

const customNode = {
  rpcUrl: import.meta.env.VITE_POLYGON_RPC_URL || "",
  chainId: ChainId.POLYGON_MUMBAI,
};

export default new Magic(import.meta.env.VITE_MAGICLINK_APIKEY || "", {
  network: customNode,
});
