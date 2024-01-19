import { React, useState } from "react";
import TextWithHint from "../../components/TextWithHint";
import ButtonGradient from "../../components/ButtonGradient";
import Button from "../../components/Button";
import Chart from "./Chart";

function ProtfolioCard() {
  return (
    <div className="bg-[#231f36] mx-5 md:mx-8 py-5 rounded-3xl grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-4 grid grid-cols-4 gap-y-6">
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="Net Value" hint="Net Value in the assets" />
          <p className="font-semibold text-lg">7866</p>
        </div>
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="Net Value" hint="Net Value in the assets" />
          <p className="font-semibold text-lg">7866</p>
        </div>
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="Net Value" hint="Net Value in the assets" />
          <p className="font-semibold text-lg">7866</p>
        </div>
        <div className="flex flex-col  justify-center items-center col-span-2">
          <TextWithHint text="Net Value" hint="Net Value in the assets" />
          <p className="font-semibold text-lg">7866</p>
        </div>

        <div className="col-span-2">
          <div className="mx-5">
            <ButtonGradient text="Deposit" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="mx-5">
            <Button text="Withdraw" />
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 px-5 py-5 md:py-0">
        <Chart />
      </div>
    </div>
  );
}

export default ProtfolioCard;
