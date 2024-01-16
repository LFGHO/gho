import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { goerli, polygon, polygonMumbai, sepolia } from "viem/chains";

const config = createConfig(
  getDefaultConfig({
    appName: "ConnectKit Vite demo",
    // alchemyId: import.meta.env.VITE_ALCHEMY_API_KEY,
    infuraId: import.meta.env.VITE_INFURA_API_KEY,
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_ID,
    chains: [sepolia, mainnet, polygonMumbai, polygon, goerli],
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider options={{ embedGoogleFonts: true }}>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
