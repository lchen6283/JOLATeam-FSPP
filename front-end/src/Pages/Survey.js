import React, { useState } from "react";
import './survey.css'

export default function Survey() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
        {
          text: "Pick a Budget!",
          options: [
            { id: 0, text: "$$"},
            { id: 1, text: "$$$"},
            { id: 2, text: "$$$$"},
          ],
        },
        {
          text: "Which Word Best Describes What You In The Mood For?",
          options: [
            { id: 0, text: "ZESTY" },
            { id: 1, text: "CRUNCHY"},
            { id: 2, text: "SPICY"},
            { id: 3, text: "SAVORY" },
            { id: 4, text: "CREAMY" },
            { id: 5, text: "RICH" },
            { id: 6, text: "COMFORT" },
            { id: 7, text: "HEARTY" },
            { id: 8, text: "SMOOTH" },
          ],
        },
        {
          text: "Elminate 2 Out of this Options?",
          options: [
            { id: 0, text: "Mediterranean" },
            { id: 1, text: "Italian" },
            { id: 2, text: "Spanish"},
            { id: 3, text: "French" },
            { id: 4, text: "Vietnamese" },
            { id: 5, text: "Other" },
            { id: 6, text: "Korean" },
          ],
        },
        {
          text: "Another Question?",
          options: [
            { id: 0, text: "HAPPY" },
            { id: 1, text: "PEOPLE" },
            { id: 2, text: "SMILE" },
            { id: 3, text: "EVERYDAY" },
          ],
        },
        {
          text: "Another Question?",
          options: [
            { id: 0, text: "HAPPY" },
            { id: 1, text: "PEOPLE" },
            { id: 2, text: "SMILE" },
            { id: 3, text: "EVERYDAY" },
          
          ],
        },
        {
          text: "Another Question?",
          options: [
            { id: 0, text: "HAPPY" },
            { id: 1, text: "PEOPLE" },
            { id: 2, text: "SMILE" },
            { id: 3, text: "EVERYDAY" },
          
          ],
        },
        {
          text: "Another Question?",
          options: [
            { id: 0, text: "HAPPY" },
            { id: 1, text: "PEOPLE" },
            { id: 2, text: "SMILE" },
            { id: 3, text: "EVERYDAY" },
          
          ],
        },
      ];
    
      // Helper Functions
    
      /* A possible answer was clicked */
      const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
          setScore(score + 1);
        }
    
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        }
      };
    
      /* Resets the game back to default */
      const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
      };
    
      return (
        <div className="survey">
          <h1>Take Our SMAK Quiz</h1>
  
          {showResults ? (
            /* 4. Final Results */
            <div className="final-results">
              <h1>Final Results</h1>
              <button onClick={() => restartGame()}>Restart game</button>
            </div>
          ) : (
            /* 5. Question Card  */
            <div className="question-card">
              {/* Current Question  */}
              <h2>
                Question: {currentQuestion + 1} out of {questions.length}
              </h2>
              <h3 className="question-text">{questions[currentQuestion].text}</h3>
    
              {/* List of possible answers  */}
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li className="happy"
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      );
            }