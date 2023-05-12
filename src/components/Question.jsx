import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import { decode } from "html-entities";

function Question({ question, category, correct, allAnswers }) {

  const shuffledAnswer = allAnswers.map((answer) => (
    <div className="mb-16"><Answer answer={decode(answer)} key={answer}/></div>
  ));

  return (
    <div className="flex flex-col items-center">
      <p className="text-left mb-1">{category}</p>
      <div>
        <h3 className="text-xl mb-5">{question}</h3>
      </div>
      <div>
        <div className="flex justify-between gap-5 max-w-[100%]">{shuffledAnswer}</div>
      </div>
    </div>
  );
}

export default Question;
