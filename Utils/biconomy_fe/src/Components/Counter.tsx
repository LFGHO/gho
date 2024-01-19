/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import { BiconomySmartAccountV2 } from "@biconomy/account";
import { PaymasterMode } from "@biconomy/paymaster";
import abi from "../utils/counterAbi.json";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Transaction } from "@biconomy/core-types";
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import { LightSmartContractAccount } from "@alchemy/aa-accounts";
import ChainService from "../services/chain.service";

interface Props {
  smartAccount?: BiconomySmartAccountV2;
  provider?: ethers.providers.Web3Provider;
  alchemyProvider?: AlchemyProvider & {
    account: LightSmartContractAccount<any>;
  };
}

const counterAddress = import.meta.env.VITE_COUNTER_CONTRACT_ADDRESS;

const Counter: React.FC<Props> = ({
  smartAccount,
  provider,
  alchemyProvider,
}) => {
  const [count, setCount] = useState<number>(0);
  const [counterContract, setCounterContract] = useState<ethers.Contract>();

  const getCount = useCallback(
    async (isUpdating: boolean) => {
      const pp = new ethers.providers.JsonRpcProvider(
        import.meta.env.VITE_RPC_URL,
        ChainService.getInstance().chainId
      );
      const contract = new ethers.Contract(counterAddress, abi, pp);
      console.log(contract);
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

  const incrementCountAlchemy = useCallback(async () => {
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
      const { hash: uoHash } = await alchemyProvider!.sendUserOperation({
        data: data as `0x${string}`,
        target: import.meta.env.VITE_COUNTER_CONTRACT_ADDRESS,
      });

      console.log("UserOperation Hash: ", uoHash); // Log the user operation hash

      alchemyProvider?.withAlchemyGasManager({
        policyId: "b4fba127-96c5-4ef0-9a73-97b4f0043572",
      });

      // Wait for the user operation to be mined
      const txHash = await alchemyProvider!.waitForUserOperationTransaction(
        uoHash
      );

      console.log("Transaction Hash: ", txHash);
      getCount(true);
      toast.success(`Transaction Hash: ${txHash}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
  }, [getCount, alchemyProvider]);

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
      const userOp = await smartAccount!.buildUserOp([tx1], {
        paymasterServiceData: {
          mode: PaymasterMode.SPONSORED,
        },
      });
      try {
        const userOpResponse = await smartAccount!.sendUserOp(userOp);
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
        <>
          <button onClick={() => incrementCount()}>Increment Count</button>
          <button onClick={() => incrementCountAlchemy()}>
            Increment Count Alchemy
          </button>
        </>
      )}
    </>
  );
};

export default Counter;
