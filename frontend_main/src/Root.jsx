import React, { useState } from "react";
import { color } from "./theme";
import {Outlet} from "react-router-dom";

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [provider, setProvider] = useState(null);
  return (
    <div style={{ color: color.text, backgroundColor: color.background }}>
   
            <Outlet />
      {/* <Home/> */}
    </div>
  );
}

export default Root;
