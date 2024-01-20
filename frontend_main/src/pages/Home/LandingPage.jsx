import React from "react";
import gfo_logo from "../../assets/Logo/gfo_logo.png";
import { color } from "../../theme";
import Button from "../../components/Button";
import LaunchButton from "../../components/LaunchButton";


function LandingPage() {

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center`}
      style={{ backgroundColor: "#78c4ea" }}
    >
      <div>
        <img
          src={gfo_logo}
          className="h-[25rem] md:h-[20rem]"
          alt="Group-1"
          border="0"
        />
      </div>
      <p
        className="text-4xl font-bold mb-10"
        style={{ fontFamily: "Hinglish", color: "#1d6ea0" }}
      >
        GHOvardhan
      </p>
      <div className="font-bold text-5xl">
        <LaunchButton text="LAUNCH APP" navigate="/login" />
      </div>
    </div>
  );
}

export default LandingPage;
