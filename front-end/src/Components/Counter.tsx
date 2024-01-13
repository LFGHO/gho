/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import { BiconomySmartAccountV2 } from "@biconomy/account";
import { PaymasterMode } from "@biconomy/paymaster";
import abi from "../utils/counterAbi.json";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Transaction } from "@biconomy/core-types";

interface Props {
  smartAccount: BiconomySmartAccountV2;
  provider: ethers.providers.Web3Provider;
}

const counterAddress = import.meta.env.VITE_COUNTER_CONTRACT_ADDRESS;

const Counter: React.FC<Props> = ({ smartAccount, provider }) => {
  const [count, setCount] = useState<number>(0);
  const [counterContract, setCounterContract] = useState<ethers.Contract>();

  const getCount = useCallback(
    async (isUpdating: boolean) => {
      const contract = new ethers.Contract(counterAddress, abi, provider);
      setCounterContract(contract);
      const currentCount = await contract.count();
      setCount(currentCount.toNumber());
      if (isUpdating) {
        toast.success("Count has been updated!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
    [provider]
  );

  const incrementCount = useCallback(async () => {
    try {
      toast.info("Processing count on the blockchain!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const incrementTx = new ethers.utils.Interface([
        "function incrementCount()",
      ]);
      const data = incrementTx.encodeFunctionData("incrementCount");

      const tx1: Transaction = {
        to: counterContract!.address,
        data: data,
      };

      const userOp = await smartAccount.buildUserOp([tx1], {
        paymasterServiceData: {
          mode: PaymasterMode.SPONSORED,
        },
      });

      try {
        const userOpResponse = await smartAccount.sendUserOp(userOp);
        const transactionDetails = await userOpResponse.wait();

        console.log("Transaction Details:", transactionDetails);
        console.log(
          "Transaction Hash:",
          transactionDetails.receipt.transactionHash
        );

        toast.success(
          `Transaction Hash: ${transactionDetails.receipt.transactionHash}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );

        getCount(true);
      } catch (e) {
        console.error("Error executing transaction:", e);
        // ... handle the error if needed ...
      }
    } catch (error) {
      console.error("Error executing transaction:", error);
      toast.error("Error occurred, check the console", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [getCount, smartAccount, counterContract]);

  useEffect(() => {
    getCount(false);
  }, [getCount]);

  return (
    <>
      <div>Total count is {count}</div>{" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <br></br>
      {counterAddress && (
        <button onClick={() => incrementCount()}>Increment Count</button>
      )}
    </>
  );
};

export default Counter;
