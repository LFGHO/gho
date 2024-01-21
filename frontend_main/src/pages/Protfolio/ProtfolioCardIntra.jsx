import { React, useState, useEffect } from "react";
import TextWithHint from "../../components/TextWithHint";
import ButtonGradient from "../../components/ButtonGradient";
import Button from "../../components/Button";
import Chart from "./Chart";
import {color} from "../../theme";

import {
  ConnectEmbed,
  useShowConnectEmbed,
  useAddress,
} from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ProtfolioCardIntra() {
  const address = useAddress();
  const navigate = useNavigate();
  const loginOptional = false;
  const showConnectEmbed = useShowConnectEmbed(loginOptional);

  useEffect(() => {
    if (showConnectEmbed) {
      navigate("/", { replace: true });
    }
  }, [address]);

  const checkForQuestion = async () => {
    console.log("check for question");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/getUserData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: address }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        console.log(json);
        if (json.user.answer.length === 0) {
          navigate("/get-started", {
            state: address,
          });
        } else {
          navigate("/deposit-page");
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="mx-5 md:mx-8 py-5 mb-5 rounded-3xl grid grid-cols-12 gap-4" style={{backgroundColor: color.highlightbg}}>
      <div className="col-span-12 md:col-span-4 grid grid-cols-4 gap-y-6">
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="TVL" hint="Total Value Logged" />
          <p className="font-semibold text-lg">$234</p>
        </div>
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="APY" hint="Annual Percentage Yield" />
          <p className="font-semibold text-lg">18.76%</p>
        </div>
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="Assets" hint="Youir Investement Value in GO" />
          <p className="font-semibold text-lg">$250</p>
        </div>
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="Expected Yield" hint="This is subjected to changhe depending on the market" />
          <p className="font-semibold text-lg">20.2%</p>
        </div>

        <div className="col-span-2">
          <div className="mx-5" >
            <ButtonGradient text="Deposit" onClick={checkForQuestion}/>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mx-5">
            <Button text="Withdraw" onClick={() => (toast.info("Your Assets will reach your account automatically!"))}/>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 px-5 py-5 md:py-0">
        <Chart intraOrLong={"intra"}/>
      </div>
    </div>
  );
}

export default ProtfolioCardIntra;
