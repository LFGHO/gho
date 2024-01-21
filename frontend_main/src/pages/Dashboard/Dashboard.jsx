import React from "react";
import { color } from "../../theme";
import coin from "../../assets/images/coin.png";
import DashboardCard from "./components/DashboardCard";
import SplitButton from "../../components/SplitButton";

const data = [
  {
    title: "MultiStrategy Vaults",
  },
  {
    title: "Social Credit Delegation Platform",
  },
  {
    title: "Account Abstraction Wallet",
  },
  {
    title: "Gasless Transactions",
  },
  {
    title: "PortFolio management",
  },
  {
    title: "Interactive UI",
  },
  
]
function Dashboard() {
  return (
    <>
    <div className="grid grid-cols-3">
    
      {data.map((item) => (
        <DashboardCard title={item.title} desc={item.desc} />
      ))}
    </div>
    </>
  );
}

export default Dashboard;
