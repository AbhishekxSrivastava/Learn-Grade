// import React from 'react'

// export const QuizQuestion = ({question, questionNumber, onAnswer}) => {
//   return (
//     <div>
//       <span className="m-0 py-2 px-4 rounded-3xl justify-between bg-gray-300 text-xl font-bold text-gray-700 sm:text-2xl">
//         {question.type}
//       </span>
//       <h2 className="mt-4 mb-4 text-xl font-bold text-gray-700 sm:text-2xl">
//         Question : {questionNumber}
//       </h2>

//       <p className="mb-6 text-xl font-semibold text-gray-600 sm:text-2xl">
//         {question.text}
//       </p>

//       <div className="flex flex-col space-y-4">
//         {question.options.map((option) => (
//           <button
//             key={option.text}
//             onClick={() => onAnswer(option.isCorrect)}
//             className="rounded-full bg-black py-1 text-lg text-white hover:opacity-80 sm:text-xl"
//           >
//             {option.text}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
 


import React, { useState } from "react";

export const QuizQuestion = ({
  question,
  questionNumber,
  onAnswer,
  onNext,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (optionText) => {
    setSelectedOption(optionText);
  };

  const handleSubmit = () => {
    const selected = question.options.find(
      (opt) => opt.text === selectedOption
    );
    if (selected) {
      onAnswer(selected.isCorrect);
      setSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setSubmitted(false);
    onNext();
  };

  return (
    <div>
      <span className="m-0 py-2 px-4 rounded-3xl justify-between bg-gray-300 text-xl font-bold text-gray-700 sm:text-2xl">
        {question.type}
      </span>

      <h2 className="mt-4 mb-4 text-xl font-bold text-gray-700 sm:text-2xl">
        Question : {questionNumber}
      </h2>

      <p className="mb-6 text-xl font-semibold text-gray-600 sm:text-2xl">
        {question.text}
      </p>

      <div className="flex flex-col space-y-4 mb-6">
        {question.options.map((option) => (
          <label key={option.text} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={selectedOption === option.text}
              onChange={() => handleCheckboxChange(option.text)}
              disabled={submitted}
              className="h-5 w-5"
            />
            <span className="text-lg sm:text-xl">{option.text}</span>
          </label>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={(handleSubmit, () => handleNext())}
          disabled={!selectedOption || submitted}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
        >
          Submit
        </button>

        {/* <button
          onClick={handleNext}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Next
        </button> */}
      </div>
    </div>
  );
};
