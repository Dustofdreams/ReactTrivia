import { useState } from "react";
import Quiz from "./Quiz";

function StartScreen() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const [buttonEasy, setButtonEasy] = useState(false);
  const [buttonMedium, setButtonMedium] = useState(false);
  const [buttonHard, setButtonHard] = useState(false);
  const [buttonTen, setButtonTen] = useState(false);
  const [buttonTwenty, setButtonTwenty] = useState(false);
  const [buttonThirty, setButtonThirty] = useState(false);

  function playerName(event) {
    setName(event.target.value);
  }

  function selectEasy() {
    setButtonEasy(true);
    setButtonMedium(false);
    setButtonHard(false);
    setDifficulty("easy");
  }

  function selectMedium() {
    setButtonEasy(false);
    setButtonMedium(true);
    setButtonHard(false);
    setDifficulty("medium");
  }

  function selectHard() {
    setButtonEasy(false);
    setButtonMedium(false);
    setButtonHard(true);
    setDifficulty("hard");
  }

  function selectTen() {
    setButtonTen(true);
    setButtonTwenty(false);
    setButtonThirty(false);
    setNumberOfQuestions(10);
  }

  function selectTwenty() {
    setButtonTen(false);
    setButtonTwenty(true);
    setButtonThirty(false);
    setNumberOfQuestions(20);
  }

  function selectThirty() {
    setButtonTen(false);
    setButtonTwenty(false);
    setButtonThirty(true);
    setNumberOfQuestions(30);
  }



  return (
    <main className="w-full max-w-[1280px] min-h-screen flex flex-col justify-center align-middle m-auto text-center bg-white">
      <h1 className="text-8xl font-black text-[#9747FF]">TRIVIA</h1>
      <p className="mb-10 text-[#1A1a1A] text-3xl">
        Answer as many questions as you can and don't forget to have fun!
      </p>
      <form action="" className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Please enter your name"
          className="w-[600px] h-[65px]  bg-backgroundgrey border-2 border-backgroundgrey focus:border-[#9747FF] px-4 py-2 rounded-2xl outline-none text-2xl placeholder:text-l "
          onChange={playerName}
          value={name}
        />
        <div className="flex flex-col mt-10 justify-center align-middle">
          <h3 className="text-2xl text-textgreyblack">Select diffculty</h3>
          <div className="flex mt-5 gap-6">
            <label
              className={`text-xl px-6 py-4 font-bold rounded-2xl cursor-pointer ${
                buttonEasy ? "bg-mainpurple text-white" : "bg-backgroundgrey"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                name="easy"
                value="easy"
                onClick={selectEasy}
              />
              Easy
            </label>
            <label
              className={`text-xl px-6 py-4 font-bold rounded-2xl cursor-pointer ${
                buttonMedium ? "bg-mainpurple text-white" : "bg-backgroundgrey"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                name="medium"
                value="medium"
                onClick={selectMedium}
              />
              Medium
            </label>
            <label
              className={`text-xl px-6 py-4 font-bold rounded-2xl cursor-pointer ${
                buttonHard ? "bg-mainpurple text-white" : "bg-backgroundgrey"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                name="hard"
                value="hard"
                onClick={selectHard}
              />
              Hard
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <h3 className="text-2xl text-textgreyblack">
            Select number of questions
          </h3>
          <div className="flex mt-5 gap-6">
            <label
              className={`text-xl px-6 py-4 font-bold rounded-2xl cursor-pointer ${
                buttonTen ? "bg-mainpurple text-white" : "bg-backgroundgrey"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                name="10"
                value="10"
                onClick={selectTen}
              />
              10
            </label>
            <label
              className={`text-xl px-6 py-4 font-bold rounded-2xl cursor-pointer ${
                buttonTwenty ? "bg-mainpurple text-white" : "bg-backgroundgrey"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                name="20"
                value="20"
                onClick={selectTwenty}
              />
              20
            </label>
            <label
              className={`text-xl px-6 py-4 font-bold rounded-2xl cursor-pointer ${
                buttonThirty ? "bg-mainpurple text-white" : "bg-backgroundgrey"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                name="30"
                value="30"
                onClick={selectThirty}
              />
              30
            </label>
          </div>
        </div>
        {<div className={numberOfQuestions && difficulty && name? "visible" : "invisible"}>

          <p className="mt-20">
            {name}, you have selected {numberOfQuestions} questions on{" "}
            {difficulty} diffculty. Press the start button to begin.
          </p>


          <button className="bg-[#F26CCD] w-[260px] h-[65px] rounded-lg text-xl font-bold text-white mt-5">
            Start trivia
          </button>

        </div>}
      </form>
      <Quiz difficulty={difficulty} numberOfQuestions={numberOfQuestions} />
    </main>
  );
}

export default StartScreen;
