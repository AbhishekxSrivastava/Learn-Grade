import React from 'react'
import { MCQS } from '../assets/Questions.jsx'

export const Result = ({answers, restartTest}) => {
  const score = answers.reduce((total, score) => total + score, 0);


  const mistakes = MCQS.filter((_, index) => answers[index] === 
  0).map((question) => ({
    question: question.text,
    correctAnswer: question.options.find((opt) => opt.isCorrect).text
  }))

  return (
    <div className='flex flex-col gap-6 text-cnter'>
      
      <h2 className='text-3xl font-bold text-gray-800'>Quize Complete !!!</h2>

      <p className='text-2xl font-semibold text-gray-700'>Your Score: {score} out of {MCQS.length}</p>


      {mistakes.length > 0 && (
        <div className='mt-4 text-left'>
          <h3 mb-3 text-xl font-semibold text-red-600>Questions you missed: </h3>

          <ul className='space-y-3'>
            {mistakes.map((mistakes, index) => (
              <li key={index} className='rounded-lg bg-red-50 p-4'>

                <p className='font-medium text-gray-800'>{mistakes.question}</p>

                <p className='mt-1 text-green-600'>Correct answer : {mistakes.correctAnswer}</p>

              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={restartTest} className='mt-4 rounded-full bg-black px-4 py-2
      text-xl text-white transition-color hover:opacity-80'>Try Again</button>
    </div>
  )
}
