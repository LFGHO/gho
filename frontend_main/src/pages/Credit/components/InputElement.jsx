import React from "react";
import {color} from "../../../theme";
// import "./InputElement.css"

function InputElement({ placeholder, value, onChange, disabled, type }) {
  return (
    <input
      className="w-full py-3 md:py-4 my-2 text-white rounded-xl text-sm pl-5"
      style={{ backgroundColor: color.highlightbg }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      type={type}
    />
  );
}

export default InputElement;
