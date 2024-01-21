import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../components/Button";
import styles from "../Credit/List.module.css";
import {
  ConnectEmbed,
  useShowConnectEmbed,
  useAddress,
} from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();
  const address = useAddress();
  const loginOptional = false;
  const showConnectEmbed = useShowConnectEmbed(loginOptional);

  useEffect(() => {
    if (showConnectEmbed) {
      navigate("/", { replace: true });
    }
  }, [address]);

  const [data, setData] = useState([]);

  const load_data = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/getNotifications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: address }),
        }
      );
      const json = await response.json();
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        setData(json.list);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  function isoFormatDMY(date) {
    const d = parseISOString(date);
    function pad(n) {
      return (n < 10 ? "0" : "") + n;
    }
    return (
      pad(d.getUTCDate()) +
      "/" +
      pad(d.getUTCMonth() + 1) +
      "/" +
      d.getUTCFullYear()
    );
  }

  useEffect(() => {
    load_data();
    console.log("Loaded", data);
  }, []);

  return (
    <>
      <div className="text-center text-3xl md:text-4xl my-5 font-bold">
        Notifications
      </div>
      {data.length === 0 ? <p className="text-center">No New Notifications Found!!</p> : <div className={styles.borrowings}>
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date Published</th>
            <th>Interest Rate</th>
            <th>Action</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.address}</td>
                <td>{val.amount}$</td>
                <td>{isoFormatDMY(val.date)}</td>
                <td>{val.i_rate}%</td>
                <td className="w-20">
                  <Button text="Approve" />
                </td>
              </tr>
            );
          })}
        </table>
      </div>}
    </>
  );
}

export default Notifications;
