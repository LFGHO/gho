import { Magic } from "magic-sdk";
import ChainService from "./chain.service";

const customNode = {
  rpcUrl: import.meta.env.VITE_RPC_URL || "",
  chainId: ChainService.getInstance().chainId,
};

export default new Magic(import.meta.env.VITE_MAGICLINK_APIKEY || "", {
  network: customNode,
});
