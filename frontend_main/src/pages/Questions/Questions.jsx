import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ButtonGradient from "../../components/ButtonGradient";

const question = [
  {
    question: "For How long You Usually Invest?",
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
    question: "What is your risk tolerance dupli?",
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
];

function Questions() {
  const navigate = useNavigate();
  const [currQuesIndex, setCurrQuesIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const doNext = (ans) => {
    if (currQuesIndex < question.length - 1) {
      setCurrQuesIndex(currQuesIndex + 1);
      console.log(ans);
      setAnswers([...answers, ans]);
    } else if (currQuesIndex === question.length - 1) {
      if(answers.length != question.length){
      console.log(ans);
      setAnswers([...answers, ans]);
      }
    }
  };

  const goToProtfolio = () => {
    console.log(answers);
    navigate("/portfolio");
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

        {answers.length === question.length && (
          <div onClick={goToProtfolio} className="mt-2">
            <ButtonGradient text="Finish" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
