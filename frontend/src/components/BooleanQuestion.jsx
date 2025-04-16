import React, { useState } from "react";

export const BooleanQuestion = ({ question, questionNumber, onAnswer }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleSubmit = () => {
    if (selectedOptionIndex !== null) {
      const selectedOption = question.option[selectedOptionIndex];
      onAnswer(selectedOption.isCorrect);
      setSelectedOptionIndex(null);
    }
  };

  return (
    <div>
      <span className="m-0 py-2 px-4 rounded-3xl justify-between bg-gray-300 text-xl font-bold text-gray-700 sm:text-2xl">
        {question.type}
      </span>

      <h2 className="mt-4 mb-4 text-xl font-bold text-gray-700 sm:text-2xl">
        Question: {questionNumber}
      </h2>

      <p className="mb-6 text-xl font-semibold text-gray-600 sm:text-2xl">
        {question.text}
      </p>

      <form className="flex flex-col space-y-4">
        {question.option.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer text-lg sm:text-xl"
          >
            <input
              type="radio"
              name={`boolean-option-${questionNumber}`}
              checked={selectedOptionIndex === index}
              onChange={() => setSelectedOptionIndex(index)}
              className="h-5 w-5"
            />
            <span>{option.text}</span>
          </label>
        ))}

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-4 self-start rounded-full bg-black px-6 py-2 text-white text-lg sm:text-xl hover:bg-gray-800 disabled:opacity-50"
          disabled={selectedOptionIndex === null}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

