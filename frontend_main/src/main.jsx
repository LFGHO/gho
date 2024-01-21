import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Protfolio from "./pages/Protfolio/Protfolio";
import Questions from "./pages/Questions/Questions";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import LandingPage from "./pages/Home/LandingPage";
import VaultOptions from "./pages/Vault/VaultOptions";
import WithNav from "./WithNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./fonts/SAMAN___.ttf";
import CreditOption from "./pages/Credit/CreditOption";
import List from "./pages/Credit/List";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  smartWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import { LocalWallet, SmartWallet } from "@thirdweb-dev/wallets";
import {Sepolia} from "@thirdweb-dev/chains"
import Login from "./pages/Auth/Login";
import DepositPage from "./pages/Vault/DepositPage";
import CreditForm from "./pages/Credit/CreditForm";
import Notifications from "./pages/Notifications/Notifications";
import DepositForm from "./pages/Vault/DepositForm";

const smartWalletOptions = {
  factoryAddress: "0x9d0a83c7a52bc028cf953af40836ff2e4d65980d",
  gasless: true,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/get-started",
        element: <Questions />,
      },
      {
        path: "/vault-options",
        element: <VaultOptions />,
      },
      {
        path: "/deposit-page",
        element: <DepositPage />,
      },
      {
        path: "/credit-option",
        element: <CreditOption />,
      },
      {
        path: "/credit-form",
        element: <CreditForm />,
      },
      {
        path: "/deposit-form",
        element: <DepositForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <WithNav />,
        children: [
          {
            path: "/portfolio",
            element: <Protfolio />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/borrowing-list",
            element: <List mode="borrow"/>,
          },
          {
            path: "/lending-list",
            element: <List mode="lend"/>,
          },
          {
            path: "/notifications",
            element: <Notifications/>,
          },
        ],
      },
      
      
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId="61a6d8958608c0895498206cf21fc890"
      // locale={en()}
      supportedWallets={[
        smartWallet(
          metamaskWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          coinbaseWallet({ recommended: true }),
          smartWalletOptions,
        ),
        smartWallet(
          walletConnect(),
          smartWalletOptions,
        ),
        smartWallet(
          localWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          embeddedWallet({
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            },
          }),
          smartWalletOptions,
        ),
      //  metamaskWallet()
      ]}
    >
      <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);
