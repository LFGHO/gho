import React from "react";
import { Link } from "react-router-dom";

function Button({ text, navigate, disable, onClick, children}) {
  return (
    <Link to={navigate} onClick={onClick}>
    <div className={`text-[#d9d7e0] font-bold py-2 px-4 rounded-3xl  text-center w-full ${disable ? "bg-gray-500 cursor-not-allowed" : "bg-[#332566] hover:bg-[#8349b9] border-2 border-[#8349b9]"}`}>
      {text || children}
    </div>
    </Link>
  );
}

export default Button;
