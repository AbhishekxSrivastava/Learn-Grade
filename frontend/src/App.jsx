import './App.css'
import React from "react";
import { Header } from './components/Header.jsx';
import { Welcome } from "./components/Welcome.jsx";
import { Result } from "./components/Result.jsx";
import { QuizQuestion } from "./components/quizQuestion.jsx";
import { questions } from "./assets/Questions.jsx";
import { useState } from "react";
import { QuizParamz } from './components/QuizParamz.jsx';


function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [showQuizParamz, setShowQuizParamz] = useState(true);

    const handleAnswers = (isCorrect) => {
      const newAnswers = [...answers, isCorrect ? 1 : 0];

      setAnswers(newAnswers);

      if (currentQuestion >= questions.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    };

    const setParamz = () => setShowWelcome(false);
    const saveParamz = () => setShowQuizParamz(false);

    const restartTest = () => {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowResult(false);
      setShowWelcome(true);
      setShowQuizParamz(true);
    };


  return (
    <>
      <div className="bg-zinc-200">
        <Header />
        <div className="flex min-h-screen items-center justify-center">
          <div
            className="my-1 w-full max-w-4xl rounded-3xl bg-white p-5
            shadow-lg md:m-10 md:p-10"
          >
            {showWelcome && <Welcome onStart={setParamz} />}
            {!showWelcome && showQuizParamz && (
              <QuizParamz onSub={saveParamz} />
            )}
            {!showQuizParamz && !showResult && (
              <QuizQuestion
                question={questions[currentQuestion]}
                questionNumber={currentQuestion + 1}
                onAnswer={handleAnswers}
              />
            )}
            {showResult && (
              <Result answers={answers} restartTest={restartTest} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
