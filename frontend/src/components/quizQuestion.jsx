import React from 'react'

export const QuizQuestion = ({question, questionNumber, onAnswer}) => {
  return (
    <div>
      <h2 className='mb-4 text-xl font-bold text-gray-700 sm:text-2xl'>
        Question {questionNumber}
      </h2>

      <p className='mb-6 text-xl font-semibold text-gray-600 sm:text-2xl'>
        {question.text}
      </p>

      <div className='flex flex-col space-y-4'>
        {question.options.map((option) => (
          <button key={option.text} 
          onClick={() => onAnswer(option.isCorrect)}
          className='rounded-full bg-black py-1 text-lg text-white hover:opacity-80 sm:text-xl'>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}
 