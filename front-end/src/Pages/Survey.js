import React, { useState } from "react";
import "./survey.css";

export default function Survey() {
  const [budget, setBudget] = useState("");
  const [cuisineType, setCuisineType] = useState({
    spicy: false,
    flavor: "",
    eliminate: [],
  });

  // HANDLERS
  const handleChange = (e) => {
    setBudget(([e.target.id] = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form>
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
            <option value="">Select an option</option>
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

        <div class="mt-4 space-y-4">
          <div class="flex h-5 items-center">
            <input id="zesty" name="zesty" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="zesty" class="font-medium text-gray-700">
              ZESTY
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="rich" name="rich" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="rich" class="font-medium text-gray-700">
              RICH
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="creamy" name="creamy" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="creamy" class="font-medium text-gray-700">
              CREAMY
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="hearty" name="hearty" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="hearty" class="font-medium text-gray-700">
              HEARTY
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="crunchy" name="crunchy" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="crunchy" class="font-medium text-gray-700">
              CRUNCHY
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="sweet" name="sweet" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="sweet" class="font-medium text-gray-700">
              SWEET
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="savory" name="savory" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="savory" class="font-medium text-gray-700">
              SAVORY
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="comfort" name="comfort" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="comfort" class="font-medium text-gray-700">
              COMFORT
            </label>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input id="fresh" name="fresh" type="checkbox" class="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="fresh" class="font-medium text-gray-700">
              FRESH
            </label>
          </div>
        </div>
      </div>
      {/* THIRD QUIZ */}
      <div class="mt-4 space-y-4">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium leading-6 text-gray-900">3 QUIZ</h2>
        </div>
        <div class="px-4 sm:px-0">{/*  */}</div>
      </div>
      <div class="">
        <button type="submit" class="">
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
