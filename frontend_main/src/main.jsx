import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Protfolio from "./pages/Protfolio/Protfolio";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/get-started",
    element: <Questions />,
  },
  {
    path: "/portfolio",
    element: <Protfolio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
