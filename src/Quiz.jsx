import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import { decode } from "html-entities";

function Quiz({ difficulty, numberOfQuestions }) {
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);

  async function fetchQuestions() {
    const { data } = await axios.get(
      "https://opentdb.com/api.php?amount=30&difficulty=medium&type=multiple"
    );
    const questionsData = data.results;
    setQuestions(questionsData);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const scrambled = addScrambledAnswers();
      setAllQuestions(scrambled);
      console.log(allQuestions)
    }
  }, [questions]);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  //Razburkvame otgovorite v tazi funkciq. NE PROMENQME SETQUESTIONS DIREKTNO(inache moje da ima endlress re-render)!
  function addScrambledAnswers() {
    // Mapvame prez questions, pravim nov const, koito da durji nerazburkaniq otgovor.
    return questions.map((question) => {
      const updatedQuestion = { ...question };

      // Razburkvame otgovorite kato gi zapazvame v nov const i v neq vikame shuffleArray funkciqta, v koqto vkarvame nerazburkanite otgovori.
      const shuffledAnswers = shuffleArray([
        ...updatedQuestion.incorrect_answers,
        updatedQuestion.correct_answer,
      ]);
      // Създаваме нов отговор, в който адваме allAnswers, които са вече разбъркани в предната стъпка.
      const questionWithShuffledAnswers = {
        ...updatedQuestion,
        allAnswers: shuffledAnswers,
      };
  // Връщаме новия въпрос, който се пасва в useEffect по-горе.
      return questionWithShuffledAnswers;
    });
  }

  const oneQuestion = allQuestions.map((question) => (
    <Question
      key={question.question}
      category={question.category}
      question={decode(question.question)}
      correct={decode(question.correct_answer)}
      allAnswers={question.allAnswers}
    />
  ));

  return <div>{oneQuestion}</div>;
}

export default Quiz;
