import React from "react";
import { color } from "../../theme";
import styles from "./List.module.css";
import Button from "../../components/Button";
import ActionButton from "../../components/ActionButton";
import { borrow_data} from "./data/Borrow";
import { lend_data} from "./data/Lend";


function List({mode}) {

  let data;
  if (mode === "borrow") {
    data = borrow_data;
  } else {
    data = lend_data;
  }
  return (
    <>
      <div className="mt-8 flex justify-end">
        <div className="mr-4">
          <ActionButton text="Borrow Someone" />
        </div>
        <div className="mr-12">
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
                <td>{val.name}</td>
                <td>{val.amount}$</td>
                <td>{val.date_published}</td>
                <td>{val.i_rate}%</td>
                <td className="w-20">
                  <Button text={val.action} />
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
