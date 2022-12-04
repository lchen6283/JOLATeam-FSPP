import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

import sohoAPI from "../data/data"; //HARD CODED API CALL ---> EDIT TO BRING IN AS PROPS
import "./survey.css";
import Budget from "../Components/Budget";
import Questionnaire from "../Components/Questionnaire";

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
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();

  const [budget, setBudget] = useState("");
  const [cuisineType, setCuisineType] = useState({
    notes: "",
    flavor: [],
    eliminate: [],
  });
  // HANDLERS
  const handleChange = (e) => {
    setBudget(([e.target.id] = e.target.value));
  };
  const handleNotes = (e) => {
    setCuisineType((prevState) => ({
      ...prevState,
      notes: e.target.value,
    }));
  };
  const handleFlavorCheck = (e) => {
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

  const restaurantPicker = (list, apiObj, survey) => {
    //1. Eliminate two restaurants of choice (PRESERVE THIS LIST IF STEP 2 ELIMINATES ALL CUISINES)
    //2. Eliminate all options that are NOT true w/ word association
    ////////=> Extract cuisine types from word association
    ////////=> . Eliminate all restaurants w/ cuisine types that are NOT the listed cuisine types
    /////////=> RETURN all remaining restaurants
    //3.  RETURN 1 if 1 LEFT // RETURN RANDOM 1 if MORE THAN 1.  RETURN RANDOM from step 1, IF ZERO LEFT.
    if (!cuisineType.flavor && !cuisineType.eliminate) {
      console.log(apiObj[Math.floor(Math.random() * apiObj.length + 1)]);
    }
    console.log(apiObj);
    //POST ELIMINATION IS LIST OF RESTAURANT OBJECTS REMAINING AFTER FIRST ELIMINATION ROUND
    let postElimination = apiObj.filter(
      (e) =>
        e.matchedcategory !== survey.eliminate[0] &&
        e.matchedcategory !== survey.eliminate[1]
    );
    let wordAssociationCuisines = list
      .filter((e) => survey.flavor.includes(e.word))
      .map((e) => e.menu)
      .flat();

    let finalChoice = postElimination.filter((restaurant) =>
      wordAssociationCuisines.includes(restaurant.matchedcategory)
    );
    let chosenRestaurant = {};
    if (finalChoice.length === 1) {
      chosenRestaurant = finalChoice;
    } else if (finalChoice.length > 1) {
      chosenRestaurant =
        finalChoice[Math.floor(Math.random() * finalChoice.length + 1)];
    } else {
      chosenRestaurant =
        postElimination[Math.floor(Math.random() * postElimination.length + 1)];
    }
    console.log([chosenRestaurant, { notes: cuisineType.notes }]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    restaurantPicker(list, sohoAPI, cuisineType);
  };

  return (
    <div className="w-full" >
      <div className="container mx-auto" >
        <form onSubmit={handleSubmit}>
          <Budget budget={budget} handleChange={handleChange} />
          {/* THIRD QUIZ */}
          <Questionnaire
            list={list}
            apiCategories={apiCategories}
            handleEliminationCheck={handleEliminationCheck}
            handleFlavorCheck={handleFlavorCheck}
            cuisineType={cuisineType}
            handleNotes={handleNotes}
          />
          <div class="">
            <button
              type="submit"
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
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
