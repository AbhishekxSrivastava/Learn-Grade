// import { useState, useEffect } from "react";
// import axios from "axios";

// export const QuizParamz = ({onSub}) => {
//   const [inputs, setInputs] = useState({});
//   const [message, setMessage] = useState("");


//   const sendData = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/data",
//         inputs,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       setMessage(response.data.message);
//     } catch (error) {
//       console.error("Error sending data:", error);
//       setMessage("Failed to send data.");
//     }
//   };

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // alert(JSON.stringify(inputs));
//     onSub();
//     console.log(JSON.stringify(inputs));
//     sendData();
//   };

//   const difficultyLevels = ["Easy", "Medium", "Hard"];

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col items-start">
//       <label className="m-1">
//         Enter the Topic here:
//         <input
//           className="border-1 m-1"
//           type="text"
//           name="topic"
//           value={inputs.topic || ""}
//           onChange={handleChange}
//         />
//       </label>

//       <label className="m-1">
//         Select the Difficulty of Questions:
//         <select
//           className="border-1 m-1"
//           name="difficulty"
//           value={inputs.difficulty || ""}
//           onChange={handleChange}
//         >
//           <option value="" disabled>
//             Select difficulty
//           </option>
//           {difficultyLevels.map((level) => (
//             <option key={level} value={level}>
//               {level}
//             </option>
//           ))}
//         </select>
//       </label>

//       <label className="m-1">
//         Select No. of MCQs type:
//         <input
//           className="border-1 m-1"
//           type="number"
//           name="mcq"
//           value={inputs.mcq || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label className="m-1">
//         Select No. of True/False type:
//         <input
//           className="border-1 m-1"
//           type="number"
//           name="bool"
//           value={inputs.bool || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label className="m-1">
//         Select No. of One Line Answer type:
//         <input
//           className="border-1 m-1"
//           type="number"
//           name="oneLine"
//           value={inputs.oneLine || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label className="m-1">
//         Select No. of One Para Answer type:
//         <input
//           className="border-1 m-1"
//           type="number"
//           name="para"
//           value={inputs.para || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" className="border-1 rounded-xl px-2" />
//     </form>
//   );
// }



// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// /* <div className="w-1/2 flex flex-wrap justify-end text-right">
//   <p className="text-black/40 mb-2 w-full">Currency Type</p>
//   <select
//     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//     value={selectCurrency}
//     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//     disabled={currencyDisable}
//   >
//     {currencyOptions.map((cur) => (
//       <option key={cur} value={cur}>
//         {cur}
//       </option>
//     ))}
//   </select>
// </div>; */


// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



//   // const [inputs, setInputs] = useState({});

//   // const handleChange = (event) => {
//   //   const name = event.target.name;
//   //   const value = event.target.value;
//   //   setInputs((values) => ({ ...values, [name]: value }));
//   // };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   alert(JSON.stringify(inputs));
//   // };


//   // <form onSubmit={handleSubmit}>
//   //   <label>
//   //     Enter your name:
//   //     <input
//   //       type="text"
//   //       name="username"
//   //       value={inputs.username || ""}
//   //       onChange={handleChange}
//   //     />
//   //   </label>
//   //   <label>
//   //     Enter your age:
//   //     <input
//   //       type="number"
//   //       name="age"
//   //       value={inputs.age || ""}
//   //       onChange={handleChange}
//   //     />
//   //   </label>
//   //   <input type="submit" />
//   // </form>




import { useState } from "react";
import axios from "axios";

export const QuizParamz = ({ onSub }) => {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");

  const sendData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/data",
        inputs,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error sending data:", error);
      setMessage("Failed to send data.");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSub(); 
    sendData();
  };


  const difficultyLevels = ["Easy", "Medium", "Hard"];

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800">
          Quiz Configuration
        </h2>

        <div className="flex flex-col">
          <label className="mb-2 text-lg text-gray-700">
            Enter the Topic here:
          </label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="topic"
            value={inputs.topic || ""}
            onChange={handleChange}
            placeholder="Enter quiz topic"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-lg text-gray-700">
            Select Difficulty Level:
          </label>
          <select
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="difficulty"
            value={inputs.difficulty || ""}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select difficulty
            </option>
            {difficultyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>


        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 text-lg text-gray-700">
              Select No. of MCQs:
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="mcq"
              value={inputs.mcq || ""}
              onChange={handleChange}
              placeholder="Number of MCQs"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg text-gray-700">
              Select No. of True/False:
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="bool"
              value={inputs.bool || ""}
              onChange={handleChange}
              placeholder="Number of True/False"
            />
          </div>


          <div className="flex flex-col">
            <label className="mb-2 text-lg text-gray-700">
              Select No. of One Line Answers:
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="oneLine"
              value={inputs.oneLine || ""}
              onChange={handleChange}
              placeholder="Number of One Line Answers"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg text-gray-700">
              Select No. of One Paragraph Answers:
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="para"
              value={inputs.para || ""}
              onChange={handleChange}
              placeholder="Number of One Paragraph Answers"
            />
          </div>
        </div>


        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>


        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("Failed") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};
