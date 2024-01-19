import React from "react";
import { Link } from "react-router-dom";
import { color } from "../../theme";
import Title from "../../components/Title/Title";
import TitleSm from "../../components/Title/TitleSm";

import intraday from "../../assets/images/intraday.png";
import long_term from "../../assets/images/long_term.png";

function VaultOptions() {
  return (
    <div className="h-screen flex items-center ">
      <div style={{ color: color.text }} className=" w-full">
        <div>
          <Title>Choose Investment Track?</Title>
        </div>
        <div className="flex flex-col items-center md:grid md:grid-cols-4 my-5 md:my-20">
          <div className="md:col-start-2 flex justify-center">
            <Link
              to="/auth/login/recruiter"
              className="flex flex-col  justify-center items-center w-56 md:w-64  h-60 md:h-72 rounded-xl my-3"
              style={{ backgroundColor: color.highlightbg }}
            >
              <img
                src={intraday}
                alt="intraday"
                className="w-28 h-28 md:w-44 md:h-44"
              />
              <div className="mb-2">
                <TitleSm>Intraday</TitleSm>
              </div>
              <p className="text-center text-xs px-4">
                Use your AAVE Credit Delegation points for a high risk high
                reward Intra-day trade
              </p>
            </Link>
          </div>
          <div className="md:col-start-3 flex justify-center">
            <Link
              to="/auth/login/user"
              className=" flex flex-col  justify-center items-center w-56 md:w-64  h-60 md:h-72 rounded-xl my-3"
              style={{ backgroundColor: color.highlightbg }}
            >
              <img
                src={long_term}
                alt="long_term"
                className="w-28 h-28 md:w-44 md:h-44"
              />
              <div className="mb-2">
                <TitleSm>Long Term</TitleSm>
              </div>
              <p className="text-center text-xs px-4">
                Use your AAVE Credit Delegation points for a high risk high
                reward Intra-day trade
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaultOptions;
