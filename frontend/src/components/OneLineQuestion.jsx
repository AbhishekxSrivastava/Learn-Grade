import React, { useState } from "react";

export const OneLineQuestion = ({ question, questionNumber, onAnswer }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <span className="m-0 py-2 px-4 rounded-3xl justify-between bg-gray-300 text-xl font-bold text-gray-700 sm:text-2xl">
        {question.type}
      </span>

      <h2 className="m-6 text-xl font-bold">
        Q{questionNumber}. {question.text}
      </h2>
      <input
        type="text"
        className="w-full rounded-md border p-2"
        placeholder="Type your answer here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Submit Answer
      </button>
    </form>
  );
};
