import React from "react";
import { color } from "../../theme";
import coin from "../../assets/images/coin.png";
import DashboardCard from "./components/DashboardCard";

const data = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  },
]

function Dashboard() {
  return (
    <div className="grid grid-cols-3">
      {data.map((item) => (
        <DashboardCard title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}

export default Dashboard;
