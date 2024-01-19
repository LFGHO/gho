import React from "react";
import { Link } from "react-router-dom";

function LaunchButton({ text, navigate }) {
  return (
    <Link to={navigate}>
    <div className="font-bold py-2 px-4 rounded-3xl border-2 border-[#1d6ea0] text-[#1d6ea0] text-center w-full" style={{ fontFamily: "Hinglish"}}>
      {text}
    </div>
    </Link>
  );
}

export default LaunchButton;
