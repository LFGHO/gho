import { Magic } from "magic-sdk";
import ChainService from "./chain.service";
import { MagicSigner } from "@alchemy/aa-signers/magic";
const customNode = {
  rpcUrl: import.meta.env.VITE_RPC_URL || "",
  chainId: ChainService.getInstance().chainId,
};

export default new Magic(import.meta.env.VITE_MAGICLINK_APIKEY || "", {
  network: customNode,
});

export const createMagicSigner = async () => {
  const magicSigner = new MagicSigner(
    new Magic(import.meta.env.VITE_MAGICLINK_APIKEY || "", {
      network: customNode,
    })
  );

  return magicSigner;
};
