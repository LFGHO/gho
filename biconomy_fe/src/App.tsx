/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { IBundler, Bundler } from "@biconomy/bundler";
import {
  BiconomySmartAccountV2,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";
import {
  ECDSAOwnershipValidationModule,
  DEFAULT_ECDSA_OWNERSHIP_MODULE,
} from "@biconomy/modules";
import Counter from "./Components/Counter";
import magic, { createMagicSigner } from "./services/magic.service";
import ChainService from "./services/chain.service";
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import { sepolia } from "viem/chains";

const chain = sepolia;
function App() {
  const [smartAccount, setSmartAccount] = useState<BiconomySmartAccountV2>();
  const [loading, setLoading] = useState<boolean>(false);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [alchemyProvider, setAlchemyProvider] = useState<
    AlchemyProvider & {
      account: LightSmartContractAccount<any>;
    }
  >();
  const [address, setAddress] = useState<string>("");

  const logout = useCallback(async () => {
    magic.wallet.disconnect();
  }, []);

  const connectAlchemy = useCallback(async () => {
    const magicSigner = await createMagicSigner();
    await magicSigner.authenticate({
      authenticate: async () => {
        await magicSigner.inner.wallet.connectWithUI();
      },
    });
    console.log(await magicSigner.inner.user.getInfo());
    const provider = new AlchemyProvider({
      rpcUrl: import.meta.env.VITE_RPC_URL,
      chain,
    }).connect(
      (rpcClient) =>
        new LightSmartContractAccount({
          chain: rpcClient.chain,
          owner: magicSigner,
          factoryAddress: getDefaultLightAccountFactoryAddress(rpcClient.chain),
          rpcClient,
        })
    );
    setAddress(await provider.getAddress());
    setAlchemyProvider(provider);
  }, []);

  const connect = useCallback(async () => {
    const bundler: IBundler = new Bundler({
      bundlerUrl: `https://bundler.biconomy.io/api/v2/${
        ChainService.getInstance().chainId
      }/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
      chainId: ChainService.getInstance().chainId,
      entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
    });
    const paymaster: IPaymaster = new BiconomyPaymaster({
      paymasterUrl: `https://paymaster.biconomy.io/api/v1/${
        ChainService.getInstance().chainId
      }/${import.meta.env.VITE_PAYMASTER_APIKEY}`,
    });
    try {
      await magic.wallet.connectWithUI();
      const provider = await magic.wallet.getProvider();
      const web3Provider = new ethers.providers.Web3Provider(provider, "any");
      setProvider(web3Provider);
      const module = await ECDSAOwnershipValidationModule.create({
        signer: web3Provider.getSigner(),
        moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
      });
      setLoading(true);
      const biconomySmartAccount = await BiconomySmartAccountV2.create({
        chainId: ChainService.getInstance().chainId,
        bundler: bundler,
        paymaster: paymaster,
        entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
        defaultValidationModule: module,
        activeValidationModule: module,
      });

      setSmartAccount(biconomySmartAccount);

      const address = await biconomySmartAccount.getAccountAddress();
      setAddress(address);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h1>
        {" "}
        Biconomy Smart Accounts using social login + Gasless Transactions
      </h1>

      {!smartAccount && <button onClick={connect}>Login</button>}
      {!provider && <button onClick={connectAlchemy}>Login Alchemy</button>}
      {<button onClick={logout}>Logout</button>}
      {loading && <p>Loading account details...</p>}
      {(!!smartAccount && !!provider) ||
        (!!alchemyProvider && (
          <div className="buttonWrapper">
            <h3>Smart account address:</h3>
            <p>{address}</p>
            <Counter
              smartAccount={smartAccount}
              provider={provider}
              alchemyProvider={alchemyProvider}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
