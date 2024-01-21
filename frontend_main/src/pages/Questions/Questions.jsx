import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import ButtonGradient from "../../components/ButtonGradient";
import { ToastContainer, toast } from "react-toastify";

const question = [
  {
    question: "For How long You Usually Invest?",
    type: "radio",
    options: [
      {
        option: "1-3 Years",
        value: "1-3 Years",
      },
      {
        option: "3-5 Years",
        value: "3-5 Years",
      },
      {
        option: "5-7 Years",
        value: "5-7 Years",
      },
      {
        option: "7+ Years",
        value: "7+ Years",
      },
    ],
  },
  {
    question: "What is your risk tolerance?",
    type: "radio",
    options: [
      {
        option: "Low",
        value: "Low",
      },
      {
        option: "Medium",
        value: "Medium",
      },
      {
        option: "High",
        value: "High",
      },
      {
        option: "Very High",
        value: "Very High",
      },
    ],
  },
  {
    question: "Describe Your Startegy of Investments?",
    type: "input",
  },
];

function Questions() {

  const location = useLocation();
  const address = location.state;
  const navigate = useNavigate();
  const [currQuesIndex, setCurrQuesIndex] = useState(0);
  const [optionAnswer, setOptionAnswer] = useState([]);
  const [textAnswer, setTextAnswer] = useState("");


  const doNext = (ans) => {
    if (currQuesIndex < question.length - 1) {
      setCurrQuesIndex(currQuesIndex + 1);
      setOptionAnswer([...optionAnswer, ans]);
    } else if (currQuesIndex === question.length - 1) {
      if (optionAnswer.length != question.length) {
        setOptionAnswer([...optionAnswer, ans]);
      }
    }
  };

  const handleTextChange = (ans) => {
    if (ans.length <= 250){
      setTextAnswer(ans);
    }else{
      return;
    }
  };

  const saveData = async() => { 
    const finalAnswer = [...optionAnswer, textAnswer];
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/saveAnswer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: address, answer : finalAnswer }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        navigate("/deposit-page",{state: finalAnswer})
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="flex justify-start flex-col border-2 border-[#6c4ed9] rounded-3xl px-8 py-8">
        <p className="text-3xl font-bold text-[#6c4ed9] mb-5">
          Let's Get Started...
        </p>
        <p className="text-lg font-semibold text-[#d9d7e0]">
          {question[currQuesIndex].question}
        </p>
        {question[currQuesIndex].type === "input" ? (
          <>
          <div className="flex justify-center items-center my-2 w-full py-2 rounded-xl bg-[#332566] border border-[#6c4ed9] cursor-pointer">
            <textarea
              rows={5}
              cols={50}
              value={textAnswer}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Write in 250 Characters...."
              className="text-sm font-semibold text-[#d9d7e0] ml-2 w-full bg-transparent outline-none"
            />
            
          </div>
          <p className="text-xs text-center mb-3">{250 - textAnswer.length} Character's left</p>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            {question[currQuesIndex].options.map((choice) => (
              <div
                className="flex justify-center items-center my-2 w-full py-2 rounded-xl bg-[#332566] border border-[#6c4ed9] cursor-pointer"
                onClick={() => doNext(choice.option)}
              >
                <p className="text-lg font-semibold text-[#d9d7e0] ml-2 ">
                  {choice.option}
                </p>
              </div>
            ))}
          </div>
        )}

        {currQuesIndex == question.length-1 && (
          <div onClick={saveData} className="mt-2">
            <ButtonGradient text="Finish" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
