import React from "react";
import { Link } from "react-router-dom";

function ButtonGradient({text , navigate}) {
  return (
    <Link to={navigate}>
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #d44a8f, #724ed5)", // Red to blue gradient
      }}
      className="text-white font-bold py-2 px-4 rounded-3xl border-2 border-[#8349b9] w-full text-center"
    >
      {text}
    </div>
    </Link>
  );
}

export default ButtonGradient;
