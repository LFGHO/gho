import React, { useEffect } from "react";
import {
  ConnectEmbed,
  useShowConnectEmbed,
  useAddress,
} from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

function Login() {
  const address = useAddress();
  const navigate = useNavigate();
  const loginOptional = false;
  const showConnectEmbed = useShowConnectEmbed(loginOptional);

  useEffect(() => {
    if (!showConnectEmbed) {
      navigate("/portfolio", { replace: true });
    }
  }, [address]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <ConnectEmbed
        auth={{
          loginOptional,
        }}
      />
    </div>
  );
}

export default Login;
