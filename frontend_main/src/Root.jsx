import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { color } from "./theme";
import Header from "./pages/Header/Header";
import { AuthContext, ProviderContext } from "./services/context.service";

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [provider, setProvider] = useState(null);
  return (
    <div style={{ color: color.text, backgroundColor: color.background }}>
      <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <ProviderContext.Provider value={[provider, setProvider]}>
   
            <Outlet />
        
          {/* <Header /> */}
        </ProviderContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default Root;
