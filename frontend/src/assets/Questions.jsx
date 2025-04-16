export const MCQS = [
  {
    type: "MCQS",
    text: "Which of the following is a key characteristic of a 2-stroke engine?",
    options: [
      { text: "Completes a power cycle in 4 strokes", isCorrect: false },
      { text: "Requires oil to be mixed with fuel", isCorrect: true },
      { text: "Has a complex valve mechanism", isCorrect: false },
      { text: "Consumes less fuel than a 4-stroke engine", isCorrect: false },
    ],
  },
  {
    type: "MCQS",
    text: "What is the main advantage of a 4-stroke engine over a 2-stroke engine?",
    options: [
      { text: "Higher power output", isCorrect: false },
      { text: "Lower fuel consumption", isCorrect: true },
      { text: "Lighter weight", isCorrect: false },
      { text: "Requires oil mixing with fuel", isCorrect: false },
    ],
  },
  {
    type: "MCQS",
    text: "Which component is NOT present in a typical 2-stroke engine?",
    options: [
      { text: "Piston", isCorrect: false },
      { text: "Valves", isCorrect: true },
      { text: "Crankshaft", isCorrect: false },
      { text: "Spark plug", isCorrect: false },
    ],
  },
  {
    type: "MCQS",
    text: "Which type of engine is commonly used in motorcycles and chainsaws?",
    options: [
      { text: "4-stroke engine", isCorrect: false },
      { text: "2-stroke engine", isCorrect: true },
      { text: "Steam engine", isCorrect: false },
      { text: "Rotary engine", isCorrect: false },
    ],
  },
  {
    type: "MCQS",
    text: "Why do 2-stroke engines produce more emissions than 4-stroke engines?",
    options: [
      { text: "They have more moving parts", isCorrect: false },
      { text: "They burn oil along with fuel", isCorrect: true },
      { text: "They operate at lower speeds", isCorrect: false },
      { text: "They have a longer power cycle", isCorrect: false },
    ],
  },
];


export const Booleans = [
  {
    type: "TRUE/FALSE",
    text: "2-Stroke Engine is commonly used in Motorcycles and Chainsaws",
    option: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
  },
  {
    type: "TRUE/FALSE",
    text: "Valves is NOT present in a typical 2-stroke engine",
    option: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
  },
];


export const OneLine = [
  {
    type: "One Line Answer-Type",
    text: "What is the main advantage of a 4-stroke engine over a 2-stroke engine?",
    correctAnswer: "Lower fuel consumption", // Added correct answer
  },
  {
    type: "One Line Answer-Type",
    text: "Which type of engine is commonly used in motorcycles and chainsaws?",
    correctAnswer: "2-stroke engine", // Added correct answer
  },
];


export const Para = [
  {
    type: "One Paragraph Answer-Type",
    text: "Write a short note on the working of 2-Stroke Engine",
    correctAnswer:
      "2-stroke engines work by firing once every two strokes of the piston...", // Added correct answer
  },
  {
    type: "One Paragraph Answer-Type",
    text: "Write a short note on the working of 4-Stroke Engine",
    correctAnswer:
      "4-stroke engines complete a power cycle in four strokes of the piston...", // Added correct answer
  },
];