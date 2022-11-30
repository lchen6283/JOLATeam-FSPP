import React, { useState } from "react";
import sohoAPI from "../data/data"; //HARD CODED API CALL ---> EDIT TO BRING IN AS PROPS
import "./survey.css";

const list = [
  { word: "zesty", menu: ["mediterranean", "mexican"] },
  { word: "rich", menu: ["french", "italian"] },
  { word: "creamy", menu: ["italian", "french"] },
  { word: "hearty", menu: ["spanish", "other"] },
  { word: "crunchy", menu: ["other", "korean"] },
  { word: "sweet", menu: ["newamerican", "thai"] },
  { word: "savory", menu: ["spanish", "korean"] },
  { word: "comfort", menu: ["american", "vietnamese"] },
  { word: "fresh", menu: ["mediterranean", "vietnamese"] },
];
let apiCategories = [...new Set(sohoAPI.map((e) => e.matchedcategory))];

export default function Survey() {
  const [budget, setBudget] = useState("");
  const [cuisineType, setCuisineType] = useState({
    spicy: false,
    flavor: [],
    eliminate: [],
  });
  console.log("budget", budget, "cuisineType", cuisineType);
  // HANDLERS
  const handleChange = (e) => {
    setBudget(([e.target.id] = e.target.value));
  };
  const handleFlavorCheck = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { flavor } = cuisineType;
    // Case 1 : The user checks the box
    if (checked) {
      setCuisineType((prevState) => ({
        ...prevState,
        flavor: [...flavor, value],
      }));
    }
    // Case 2  : The user unchecks the box
    else {
      setCuisineType((prevState) => ({
        ...prevState,
        flavor: flavor.filter((e) => e !== value),
      }));
    }
  };
  const handleEliminationCheck = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { eliminate } = cuisineType;
    // Case 1 : The user checks the box
    if (checked) {
      setCuisineType((prevState) => ({
        ...prevState,
        eliminate: [...eliminate, value],
      }));
    }
    // Case 2  : The user unchecks the box
    else {
      setCuisineType((prevState) => ({
        ...prevState,
        eliminate: eliminate.filter((e) => e !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 1ST QUIZ */}
      <div class="mt-4 space-y-4">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium leading-6 text-gray-900">
            Select A Budget
          </h2>
        </div>
        <div class="col-span-6 sm:col-span-3">
          <select
            value={budget}
            id="budget"
            name="budget"
            onChange={handleChange}
          >
            <option value="">Select An Option</option>
            <option value="100">100 $</option>
            <option value="150">150 $</option>
            <option value="200">200 $</option>
          </select>
        </div>
      </div>
      {/* 2ND QUIZ */}
      <div class="mt-4 space-y-4">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium leading-6 text-gray-900">
            Choose your flavors
          </h2>
        </div>
        {list.map((item, i) => {
          return (
            <div class="flex items-start" key={i}>
              <div class="flex h-5 items-center">
                <input
                  id={item.word}
                  name={item.word}
                  value={item.word}
                  onChange={handleFlavorCheck}
                  type="checkbox"
                  class=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label htmlFor={item.word} class="font-medium text-gray-700">
                  {item.word.toUpperCase()}
                </label>
              </div>
            </div>
          );
        })}
      </div>
      {/* THIRD QUIZ */}
      <div class="mt-4 space-y-4">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium leading-6 text-gray-900">
            Eliminate Two Cuisines
          </h2>
        </div>
        <div class="px-4 sm:px-0">
          {apiCategories.map((category, i) => {
            return (
              <div class="flex items-start" key={i}>
                <div class="flex h-5 items-center">
                  <input
                    id={category}
                    name={category}
                    value={category}
                    onChange={handleEliminationCheck}
                    type="checkbox"
                    class=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label htmlFor={category} class="font-medium text-gray-700">
                    {category.toUpperCase()}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <label
        htmlFor="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <h2 class="text-lg font-medium leading-6 text-gray-900">
          Notes for your order
        </h2>
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Spicy? Allergies?"
      ></textarea>

      <div class="">
        <button
          type="submit"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

// export default function Survey() {
//     const [showResults, setShowResults] = useState(false);
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [score, setScore] = useState(0);

//     const questions = [
//         {
//           text: "Pick a Budget!",
//           options: [
//             { id: 0, text: "$$"},
//             { id: 1, text: "$$$"},
//             { id: 2, text: "$$$$"},
//           ],
//         },
//         {
//           text: "Which Word Best Describes What You In The Mood For?",
//           options: [
//             { id: 0, text: "ZESTY" },
//             { id: 1, text: "CRUNCHY"},
//             { id: 2, text: "SPICY"},
//             { id: 3, text: "SAVORY" },
//             { id: 4, text: "CREAMY" },
//             { id: 5, text: "RICH" },
//             { id: 6, text: "COMFORT" },
//             { id: 7, text: "HEARTY" },
//             { id: 8, text: "SMOOTH" },
//           ],
//         },
//         {
//           text: "Elminate 2 Out of this Options?",
//           options: [
//             { id: 0, text: "Mediterranean" },
//             { id: 1, text: "Italian" },
//             { id: 2, text: "Spanish"},
//             { id: 3, text: "French" },
//             { id: 4, text: "Vietnamese" },
//             { id: 5, text: "Other" },
//             { id: 6, text: "Korean" },
//           ],
//         },
//         {
//           text: "Another Question?",
//           options: [
//             { id: 0, text: "HAPPY" },
//             { id: 1, text: "PEOPLE" },
//             { id: 2, text: "SMILE" },
//             { id: 3, text: "EVERYDAY" },
//           ],
//         },
//         {
//           text: "Another Question?",
//           options: [
//             { id: 0, text: "HAPPY" },
//             { id: 1, text: "PEOPLE" },
//             { id: 2, text: "SMILE" },
//             { id: 3, text: "EVERYDAY" },

//           ],
//         },
//         {
//           text: "Another Question?",
//           options: [
//             { id: 0, text: "HAPPY" },
//             { id: 1, text: "PEOPLE" },
//             { id: 2, text: "SMILE" },
//             { id: 3, text: "EVERYDAY" },

//           ],
//         },
//         {
//           text: "Another Question?",
//           options: [
//             { id: 0, text: "HAPPY" },
//             { id: 1, text: "PEOPLE" },
//             { id: 2, text: "SMILE" },
//             { id: 3, text: "EVERYDAY" },
//           ],
//         },
//       ];

//       // Helper Functions

//       /* A possible answer was clicked */
//       const optionClicked = (isCorrect) => {
//         // Increment the score
//         if (isCorrect) {
//           setScore(score + 1);
//         }

//         if (currentQuestion + 1 < questions.length) {
//           setCurrentQuestion(currentQuestion + 1);
//         } else {
//           setShowResults(true);
//         }
//       };

//       /* Resets the game back to default */
//       const restartGame = () => {
//         setScore(0);
//         setCurrentQuestion(0);
//         setShowResults(false);
//       };

//       return (
//         <div className="survey">
//           <h1>Take Our SMAK Quiz</h1>

//           {showResults ? (
//             /* 4. Final Results */
//             <div className="final-results">
//               <h1>Final Results</h1>
//               <button onClick={() => restartGame()}>Restart game</button>
//             </div>
//           ) : (
//             /* 5. Question Card  */
//             <div className="question-card">
//               {/* Current Question  */}
//               <h2>
//                 Question: {currentQuestion + 1} out of {questions.length}
//               </h2>
//               <h3 className="question-text">{questions[currentQuestion].text}</h3>

//               {/* List of possible answers  */}
//               <ul>
//                 {questions[currentQuestion].options.map((option) => {
//                   return (
//                     <li className="happy"
//                       key={option.id}
//                       onClick={() => optionClicked(option.isCorrect)}
//                     >
//                       {option.text}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           )}
//         </div>
//       );
//             }
