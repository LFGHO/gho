import React from "react";
import { Link } from "react-router-dom";

function Button({ text, navigate }) {
  return (
    <Link to={navigate}>
    <button className="text-[#d9d7e0] font-bold py-2 px-4 rounded-3xl bg-[#332566] hover:bg-[#8349b9] border-2 border-[#8349b9] w-full">
      {text}
    </button>
    </Link>
  );
}

export default Button;
