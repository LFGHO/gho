import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreditForm.css";
import InputElement from "./components/InputElement";
import handshake from "../../assets/images/handshake.png";
import CustomBtn2 from "../../components/ActionButton";

function CreditForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const handleLogin = async (e) => {
    e.preventDefault();

    // checking for empty fields
    if (email === "") {
      toast.error("Email is required");
      return;
    } else if (password === "") {
      toast.error("Password is required");
      return;
    }

    // sending request to server
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const json = await response.json();
      setIsLoading(false);
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        setEmail("");
        setPassword("");
        toast.success(json.msg);

        localStorage.setItem("token", json.data.token);
        localStorage.setItem("userId", json.userId);
        const expiration = new Date();
        expiration.setDate(expiration.getDate() + 5);
        localStorage.setItem("expiration", expiration.toISOString());
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to login, Try again later!");
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
          placeholder="Enter Wallet Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={false}
          type="text"
        />
        <InputElement
          placeholder="Enter the Amount"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={false}
          type="number"
          step="0.01"
        />
        <InputElement
          placeholder="Enter the Interest Rate"
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={false}
          type="number"
          step="0.01"
        />

        <CustomBtn2 onClick={handleLogin} text={data} />
      </form>
    </div>
  );
}

export default CreditForm;
