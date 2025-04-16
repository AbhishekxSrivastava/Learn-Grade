import React from "react";
import { MCQS, Booleans, OneLine, Para } from "../assets/Questions.jsx";

export const Result = ({ answers, restartTest }) => {
  const allQuestions = [...MCQS, ...Booleans, ...OneLine, ...Para];

  const autoGraded = [...MCQS, ...Booleans];
  const score = answers
    .slice(0, autoGraded.length)
    .reduce((total, val) => total + (typeof val === "number" ? val : 0), 0);

  const mistakes = autoGraded
    .filter((q, index) => answers[index] === 0)
    .map((q) => {
      const correctAnswer = (q.options || q.option).find(
        (opt) => opt.isCorrect
      ).text;
      return {
        question: q.text,
        correctAnswer,
      };
    });

    
  const writtenAnswers = answers.slice(autoGraded.length);
  const writtenMistakes = [...OneLine, ...Para]
    .map((q, i) => ({
      question: q.text,
      userAnswer: writtenAnswers[i] || "No answer provided",
      isCorrect:
        writtenAnswers[i]?.toLowerCase().trim() ===
        q.correctAnswer.toLowerCase().trim(),
      correctAnswer: q.correctAnswer,
    }))
    .filter((item) => !item.isCorrect);

  return (
    <div className="flex flex-col gap-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Quiz Complete!!!</h2>
      <p className="text-2xl font-semibold text-gray-700">
        Your Score: {score} out of {autoGraded.length + writtenAnswers.length}
      </p>

      {mistakes.length > 0 && (
        <div className="mt-4 text-left">
          <h3 className="mb-3 text-xl font-semibold text-red-600">
            Questions you missed in MCQS and True/False Type :
          </h3>
          <ul className="space-y-3">
            {mistakes.map((m, index) => (
              <li key={index} className="rounded-lg bg-red-50 p-4">
                <p className="font-medium text-gray-800">{m.question}</p>
                <p className="mt-1 text-green-600">
                  Correct answer: {m.correctAnswer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {writtenMistakes.length > 0 && (
        <div className="mt-6 text-left">
          <h3 className="mb-3 text-xl font-semibold text-blue-600">
            Your Written Responses (Mistakes):
          </h3>
          <ul className="space-y-4">
            {writtenMistakes.map((q, index) => (
              <li key={index} className="rounded-lg bg-blue-50 p-4">
                <p className="font-medium text-gray-800">{q.question}</p>
                <p className="mt-1 text-gray-700">
                  Your answer: <span className="italic">{q.userAnswer}</span>
                </p>
                <p className="mt-1 text-red-600">
                  Correct answer: {q.correctAnswer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={restartTest}
        className="mt-4 rounded-full bg-black px-4 py-2 text-xl text-white transition-colors hover:opacity-80"
      >
        Try Again
      </button>
    </div>
  );
};

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//  Well i used this only for the MCQs type Evaluation.



// import React from 'react'
// import { MCQS } from '../assets/Questions.jsx'

// export const Result = ({answers, restartTest}) => {
//   const score = answers.reduce((total, score) => total + score, 0);

//   const mistakes = MCQS.filter((_, index) => answers[index] ===
//   0).map((question) => ({
//     question: question.text,
//     correctAnswer: question.options.find((opt) => opt.isCorrect).text
//   }))

//   return (
//     <div className='flex flex-col gap-6 text-cnter'>

//       <h2 className='text-3xl font-bold text-gray-800'>Quize Complete !!!</h2>

//       <p className='text-2xl font-semibold text-gray-700'>Your Score: {score} out of {MCQS.length}</p>

//       {mistakes.length > 0 && (
//         <div className='mt-4 text-left'>
//           <h3 mb-3 text-xl font-semibold text-red-600>Questions you missed: </h3>

//           <ul className='space-y-3'>
//             {mistakes.map((mistakes, index) => (
//               <li key={index} className='rounded-lg bg-red-50 p-4'>

//                 <p className='font-medium text-gray-800'>{mistakes.question}</p>

//                 <p className='mt-1 text-green-600'>Correct answer : {mistakes.correctAnswer}</p>

//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <button onClick={restartTest} className='mt-4 rounded-full bg-black px-4 py-2
//       text-xl text-white transition-color hover:opacity-80'>Try Again</button>
//     </div>
//   )
// }
