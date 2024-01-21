import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./CreditForm.css";
import InputElement from "../Credit/components/InputElement";
import handshake from "../../assets/images/handshake.png";
import CustomBtn2 from "../../components/ActionButton";
import { Web3Button } from "@thirdweb-dev/react";

function DepositForm() {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  return (
    <div className="Login-user-container">
      <div className="Login-Recuiter-image-container ">
        <div className="p-12">
          <img src={handshake} />
        </div>
      </div>
      <div className="Login-Form w-full px-24 md:px-48">
        <h1 className=" text-white font-semibold text-3xl mb-7">
          Enter Amount to Deposit!
        </h1>

        <InputElement
          placeholder="Enter the Amount in $"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={false}
          type="number"
          step="0.01"
        />

        {/* <CustomBtn2  text="Deposit" /> */}
        <CustomBtn2>
        <Web3Button
            contractAddress="0xc4bF5CbDaBE595361438F8c6a187bDc330539c60"
            action={async (contract) => {
              await contract.erc20.transfer(
                "0x6087d7B797eb6B4D10266Aa4bA980e9C54fBC2e0",
                amount
              );
                setAmount("");
                navigate("/portfolio");
                toast.success("Amount Deposited Successfully");
            }}
            className="my-custom-class-text"
          >
            Deposit
          </Web3Button>
        </CustomBtn2>
        
      </div>
    </div>
  );
}

export default DepositForm;
