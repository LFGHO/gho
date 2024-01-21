import React, {useState, useEffect} from "react";
import { color } from "../../theme";
import { useNavigate } from "react-router-dom";
import styles from "./List.module.css";
import Button from "../../components/Button";
import ActionButton from "../../components/ActionButton";
import { ToastContainer, toast } from "react-toastify";
import {
  ConnectEmbed,
  useShowConnectEmbed,
  useAddress,
} from "@thirdweb-dev/react";


function List({mode}) {

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
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/getList`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: mode}),
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

  const deleteEntrie = (id) => async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/deleteEntrie/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        toast.success(json.msg);
        load_data();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const changeStatus = (id) => async () => { 
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/changeStatus/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        toast.success(json.msg);
        load_data();
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
    function pad(n) {return (n<10? '0' :  '') + n}
    return pad(d.getUTCDate()) + '/' + pad(d.getUTCMonth() + 1) + '/' + d.getUTCFullYear();
  }

  useEffect(() => {
    load_data();
  }, []);

  return (
    <>
      <div className="mt-8 flex justify-end">
        <div className="mr-4" onClick={() => navigate("/credit-form", {state: "borrow"})}>
          <ActionButton text="Borrow Someone" />
        </div>
        <div className="mr-12 " onClick={() => navigate("/credit-form", {state: "lend"})}>
          <ActionButton text="Lend Someone" />
        </div>
      </div>
      <div className={styles.borrowings}>
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
                  {val.address === address ? <Button text="Delete" onClick={deleteEntrie(val._id)} />: mode === "borrow" ? <Button text={mode.charAt(0).toUpperCase() + mode.slice(1)} onClick={changeStatus(val._id)}/> : <Button text={mode.charAt(0).toUpperCase() + mode.slice(1)} />}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default List;
