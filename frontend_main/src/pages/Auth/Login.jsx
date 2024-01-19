import { useEffect } from "react";
import { useCallback, useState, useContext } from "react";
import "./Login.css";

import { createMagicSigner } from "../../services/magic.service";
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import { sepolia } from "viem/chains";
import { AuthContext, ProviderContext } from "../../services/context.service";

const chain = sepolia;

function Login() {
  const [magic, setMagic] = useState(null);
  const [, setProvider] = useContext(ProviderContext);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

  useEffect(() => {
    createMagicSigner().then((magic) => {
      setMagic(magic);
    });
  }, []);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const logout = useCallback(async () => {
    if (magic) {
      magic.inner.wallet.disconnect();
      setIsLoggedIn(false);
    }
  }, [magic, setIsLoggedIn]);

  const connect = useCallback(async () => {
    try {
      if (magic) {
        setLoading(true);
        await magic.authenticate({
          authenticate: async () => {
            await magic.inner.wallet.connectWithUI();
          },
        });
        console.log(await magic.inner.user.getInfo());
        const provider = new AlchemyProvider({
          rpcUrl: import.meta.env.VITE_RPC_URL,
          chain,
        }).connect(
          (rpcClient) =>
            new LightSmartContractAccount({
              chain: rpcClient.chain,
              owner: magic,
              factoryAddress: getDefaultLightAccountFactoryAddress(
                rpcClient.chain
              ),
              rpcClient,
            })
        );
        setProvider(provider);
        setIsLoggedIn(true);
        setLoading(false);
      }
    } catch (error) {
      console.error("error while authenticating with magic and alchemy", error);
    }
  }, [magic, setIsLoggedIn, setProvider]);

  return (
    <div>
      {loading ? (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Loading ...
        </button>
      ) : !isLoggedIn ? (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={connect}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Login;
