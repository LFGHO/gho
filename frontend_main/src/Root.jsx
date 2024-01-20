import React, { useState } from "react";
import { color } from "./theme";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [provider, setProvider] = useState(null);
  return (
    <div style={{ color: color.text, backgroundColor: color.background }}>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Outlet />
    </div>
  );
}

export default Root;
