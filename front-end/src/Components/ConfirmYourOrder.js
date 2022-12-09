import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";
import axios from "axios";
import sohoAPI from "../data/data";

const API = process.env.REACT_APP_API_URL;
const id = 2;
let created_at = new Date().toISOString().slice(0, 19).replace("T", " ");

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
  let [menuItems, setMenuitems] = useState([]);

  const restaurantPicker = (list, apiObj, survey) => {
    if (!formData.choose && !formData.eliminate) {
      console.log(apiObj[Math.floor(Math.random() * apiObj.length + 1)]);
    }
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
    let chosenRestaurant = {};
    if (finalChoice.length === 1) {
      chosenRestaurant = finalChoice[0];
    } else if (finalChoice.length > 1) {
      chosenRestaurant =
        finalChoice[Math.floor(Math.random() * finalChoice.length)];
    } else {
      chosenRestaurant =
        postElimination[Math.floor(Math.random() * postElimination.length)];
    }
    return chosenRestaurant;
  };
  let restaurant = restaurantPicker(list, sohoAPI, formData);
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `${API}/menus/${restaurant.matchedcategory}/plates/${formData.budget}`
      );
      let items = data.payload.map((item) => {
        return { type: item.dish_type, name: item.name };
      });
      setMenuitems(items);
    };
    fetching();
  }, []);

  let postNewOrder = async () => {
    let obj = {
      restaurant_id: JSON.stringify(restaurant),
      restaurant_name: restaurant.name,
      date: created_at,
      delivery_address: "529 APT 2F Broadway New York, NY",
      total_cost: formData.budget,
      order_contents: JSON.stringify(menuItems),
      userid: 2,
    };
    axios
      .post(`${API}/users/${id}/orders`, obj)
      .then(() => {
        console.log("success");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log(menuItems);
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        setActiveStepIndex(activeStepIndex + 1);
        postNewOrder();
      }}
    >
      <Form className="w-full p-10 rounded-lg shadow-lg bg-gray-300 max-w-xl mb-5">
        <div >
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-600 dark:text-white">
            Order Details
          </h2>
          <div>
            <div className="my-4 text-2xl font-bold text-smakHighlight dark:text-white">
              Selected Package: ${formData.budget}
            </div>
            <div className="my-0 text-xl font-semibold text-gray-600 dark:text-white">
              Will not include:
              {formData.eliminate.map((type, i) => {
                return <div key={i}>{type}</div>;
              })}
            </div>
            <div className="my-10 text-xl font-bold text-gray-600 dark:text-white">
              I'm in the mood for:
              {formData.choose.map((type, i) => {
                return (
                  <div
                    className="text-xl font-bold text-gray-600 dark:text-white"
                    key={i}
                  >
                    * {type}
                  </div>
                );
              })}
            </div>
            <div className="my-10 text-left text-xl font-bold text-gray-600 dark:text-white">
              My notes for the kitchen: {formData.notes}
            </div>
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
              Pay with Stripe
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default ConfirmYourOrder;
