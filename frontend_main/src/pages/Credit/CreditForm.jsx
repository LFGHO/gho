import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreditForm.css";
import InputElement from "./components/InputElement";
import handshake from "../../assets/images/handshake.png";
import CustomBtn2 from "../../components/ActionButton";
import {
  ConnectEmbed,
  useShowConnectEmbed,
  useAddress,
} from "@thirdweb-dev/react";

function CreditForm() {

  const address = useAddress();
  const loginOptional = false;
  const showConnectEmbed = useShowConnectEmbed(loginOptional);

  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  let buttonText;
  if (data === "borrow") {
    buttonText = "Borrow";
  } else if (data === "lend") {
    buttonText = "Lend";
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // checking for empty fields
    if (amount === "") {
      toast.error("Amount is required");
      return;
    } else if (interest === "") {
      toast.error("Interest Rate is required");
      return;
    }

    // sending request to server
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/addInList`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            address: address,
            amount: amount,
            i_rate: interest,
            transactionType: data,
          }),
        }
      );
      const json = await response.json();
      setIsLoading(false);
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        setAmount("");
        setInterest("");
        toast.success("Added In the List Successfully!");

        if (data === "borrow") {
          navigate("/borrowing-list");
        }
        else if (data === "lend") {
          navigate("/lending-list");
        }
        else{
          navigate("/portfolio");
        }
        
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to update the List, Try again later!");
      setIsLoading(false);
    }
  };

  return (
    <div className="Login-user-container">
      <div className="Login-Recuiter-image-container ">
        <div className="p-12">
          <img src={handshake} />
        </div>
      </div>
      <form onSubmit={handleLogin} className="Login-Form w-full px-24 md:px-48">
        <h1 className=" text-white font-semibold text-3xl mb-7">
          Welcome Back!
        </h1>

        <InputElement
          placeholder="Enter the Amount in $"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={false}
          type="number"
          step="0.01"
        />
        <InputElement
          placeholder="Enter the Interest Rate in %"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          disabled={false}
          type="number"
          step="0.01"
        />

        <CustomBtn2 onClick={handleLogin} text={buttonText} />
      </form>
    </div>
  );
}

export default CreditForm;
