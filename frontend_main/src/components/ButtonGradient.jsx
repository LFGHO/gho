import React from "react";
import { Link } from "react-router-dom";

function ButtonGradient({text , children, navigate, onClick}) {
  return (
    <Link to={navigate} onClick={onClick}>
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #d44a8f, #724ed5)", // Red to blue gradient
      }}
      className="text-white font-bold py-2 px-4 rounded-3xl border-2 border-[#8349b9] w-full text-center"
    >
      {text || children}
    </div>
    </Link>
  );
}

export default ButtonGradient;
