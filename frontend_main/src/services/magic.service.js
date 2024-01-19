import { Magic } from "magic-sdk";
import { chainId } from "./chain.service";
import { MagicSigner } from "@alchemy/aa-signers/magic";
const customNode = {
  rpcUrl: import.meta.env.VITE_RPC_URL || "",
  chainId: chainId,
};

export const createMagicSigner = async () => {
  const magicSigner = new MagicSigner(
    new Magic(import.meta.env.VITE_MAGICLINK_APIKEY || "", {
      network: customNode,
    })
  );

  return magicSigner;
};
