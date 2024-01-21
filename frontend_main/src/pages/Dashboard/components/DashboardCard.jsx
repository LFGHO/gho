import React from 'react'
import { color } from "../../../theme";
import coin from "../../../assets/images/coin.png";

function DashboardCard({title, desc}) {
  return (
    <div
        className="col-span-3 xl:col-span-1 colborder h-44 rounded-3xl mx-5 my-6 flex flex-col justify-center items-center"
        style={{ backgroundColor: color.highlightbg }}
      >
        <img src={coin} className="w-20 "/>
        <p className="text-xl font-semibold mb-3">{title}</p>
      </div>
  )
}

export default DashboardCard