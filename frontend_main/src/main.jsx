import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Protfolio from "./pages/Protfolio/Protfolio";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import LandingPage from "./pages/Home/LandingPage";
import VaultOptions from "./pages/Vault/VaultOptions";
import WithNav from "./WithNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./fonts/SAMAN___.ttf";
import CreditOption from "./pages/Credit/CreditOption";
import BorrowingList from "./pages/Credit/Borrowings/BorrowingList";

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
        path: "/credit-option",
        element: <CreditOption />,
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
            element: <BorrowingList />,
          },
        ],
      },
      
      
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
