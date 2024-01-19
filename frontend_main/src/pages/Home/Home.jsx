import Header from "../Header/Header";
import { AuthContext, ProviderContext } from "../../services/context.service";
import { useState } from "react";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [provider, setProvider] = useState(null);

  return (
    <>
      <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <ProviderContext.Provider value={[provider, setProvider]}>
          {/* <Header /> */}
        </ProviderContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default Home;
