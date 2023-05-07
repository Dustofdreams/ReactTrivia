import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import { Routes, Route, Router } from "react-router";

function App() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");

  function playerName(event) {
    setName(event.target.value);
  }

  function selectDifficulty(event) {
    setDifficulty(event.target.value);
  }

  function selectNumberOfQuestions(event) {
    selectNumberOfQuestions(event.target.value);
  }

  return (
    <main className="max-w-[1280px] min-h-screen flex flex-col justify-center align-middle m-auto text-center bg-[#fffcf2]">
      <h1 className="text-5xl font-bold text-[#eb5e28]">
        Welcome to my Trivia!
      </h1>
      <p className="mb-10 text-[#eb5e28]">
        Answer as many answers as you can and don't forget to have fun!
      </p>
      <form action="" className="flex flex-col items-center">
        <p>Enter your name</p>
        <input
          type="text"
          onChange={playerName}
          value={name}
          className="max-w-sm text-center mb-10"
        />

        <div className="flex justify-around mb-10 gap-20">
          <div className="flex">
            <p className="mr-3">Select question difficulty</p>
            <select name="difficulty" id="" onChange={selectDifficulty}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div
            className="flex
          "
          >
            <p className="mr-3">Select number of questions</p>
            <select name="numberofquestions" id="" onChange={selectDifficulty}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
        <Router>
          <Routes>
            <Route path="./assets" element={<Quiz difficulty={difficulty} numberOfQuestions={numberOfQuestions} />}>
              <button>Start the game!</button>
            </Route>
          </Routes>
        </Router>
      </form>
    </main>
  );
}

export default App;
