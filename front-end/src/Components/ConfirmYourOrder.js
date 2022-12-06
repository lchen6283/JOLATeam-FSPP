import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";
import sohoAPI from "../data/data";

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

function ConfirmYourOrder() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  const ValidationSchema = yup.object().shape({});
  const restaurantPicker = (list, apiObj, survey) => {
    //1. Eliminate two restaurants of choice (PRESERVE THIS LIST IF STEP 2 ELIMINATES ALL CUISINES)
    //2. Eliminate all options that are NOT true w/ word association
    ////////=> Extract cuisine types from word association
    ////////=> . Eliminate all restaurants w/ cuisine types that are NOT the listed cuisine types
    /////////=> RETURN all remaining restaurants
    //3.  RETURN 1 if 1 LEFT // RETURN RANDOM 1 if MORE THAN 1.  RETURN RANDOM from step 1, IF ZERO LEFT.
    if (!formData.choose && !formData.eliminate) {
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
      .filter((e) => survey.choose.includes(e.word))
      .map((e) => e.menu)
      .flat();

    let finalChoice = postElimination.filter((restaurant) =>
      wordAssociationCuisines.includes(restaurant.matchedcategory)
    );
    console.log("this is final choice b4 random", finalChoice);
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
    return [
      { budget: formData.budget },
      chosenRestaurant,
      { notes: formData.notes },
    ];
  };

  return (
    <Formik
      initialValues={{}}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form>
        <div className="block p-10 rounded-lg shadow-lg bg-smakHighlight max-w-md mb-5">
          <h2 className="mb-10 text-center text-3xl font-bold text-white dark:text-white">
            Order Details
          </h2>
          <div className="my-4 text-2xl font-bold text-smakorange dark:text-white">
            Selected Package: ${formData.budget}
          </div>
          <div className="my-0 text-xl font-semibold text-white dark:text-white">
            Will not include:
            {formData.eliminate.map((type) => {
              return <div>{type}</div>;
            })}
          </div>
          <div className="my-10 text-2xl font-bold text-white dark:text-white">
            I'm in the mood for:
            {formData.choose.map((type, i) => {
              return (
                <div
                  className="text-2xl font-bold text-white dark:text-white"
                  key={i}
                >
                  * {type}
                </div>
              );
            })}
          </div>
          <div className="my-10 text-center text-2xl font-bold text-white dark:text-white">
            My notes for the kitchen: {formData.notes}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              className="w-full rounded-md bg-gray-600 font-bold text-white my-2 p-2"
              type="button"
              onClick={() => {
                setActiveStepIndex(activeStepIndex - 1);
              }}
            >
              Back
            </button>
            <button
              className="rounded-md bg-gray-600 font-bold text-white my-2 p-2"
              type="submit"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default ConfirmYourOrder;
