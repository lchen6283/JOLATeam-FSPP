import { Field, Form, Formik } from "formik";
import React, { useContext, useState, useEffect } from "react";
import StripeContainer from "../Stripe/StripeContainer";
import { FormContext } from "../Pages/OrderConfirmation";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { MdCheckCircle } from "@react-icons/all-files/md/MdCheckCircle";
import { MdBlock } from "@react-icons/all-files/md/MdBlock.esm";

const API = process.env.REACT_APP_API_URL;
let created_at = new Date().toISOString().slice(0, 19).replace("T", " ");

function ConfirmYourOrder() {
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  const {
    apiData,
    activeStepIndex,
    setActiveStepIndex,
    formData,
    setFormData,
    finalOrderData,
    setFinalOrderData,
    restaurant,
  } = useContext(FormContext);
  let [menuItems, setMenuitems] = useState([]);
  useEffect(() => {
    fetching();
  }, []);

  const id = auth.data ? auth.data.id : "2";

  const fetching = async () => {
    const { data } = await axios.get(
      `${API}/menus/${restaurant.matchedcategory.type}/plates/${formData.budget}`
    );
    let items = data.payload.map((item) => {
      return { type: item.dish_type, name: item.name };
    });
    setMenuitems(items);
  };

  let postNewOrder = async () => {
    let obj = {
      restaurant_id: JSON.stringify(restaurant),
      restaurant_name: restaurant.name,
      date: created_at,
      delivery_address: "529 APT 2F Broadway New York, NY",
      total_cost: formData.budget,
      order_contents: JSON.stringify(menuItems),
      userid: id,
    };

    let objNonParsed = {
      restaurant_id: restaurant,
      restaurant_name: restaurant.name,
      date: created_at,
      delivery_address: "529 APT 2F Broadway New York, NY",
      total_cost: formData.budget,
      order_contents: menuItems,
      userid: id,
    };

    setFinalOrderData(objNonParsed);

    axios
      .post(`${API}/users/${id}/orders`, obj)
      .then(() => {
        console.log("success");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container mx-auto p-10 ">
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col py-10 px-10 rounded-xl shadow-xl bg-orange-200 border-[0.5rem] border-orange-400">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Pre-Order Configuration
          </h2>
          <Formik
            initialValues={{}}
            onSubmit={(values) => {
              setActiveStepIndex(activeStepIndex + 1);
              postNewOrder();
            }}
          >
            <Form className="">
              <div className="flex flex-col p-8 bg-white rounded-xl">
                <div className="py-0 px-0 my-2 border-2 border-gray-200 rounded-lg">
                  <h4
                    className="p-2 mb-0 text-xl font-bold text-gray-600 bg-gray-200 font-[Open Sans] ">
                    Order Budget: 
                  </h4>
                  <p
                    className="p-2 flex flex-row my-2 text-xl font-bold text-gray-600 font-[Open Sans] ">
                    ${formData.budget} Package 
                  </p>
                </div>
                <div className="py-0 px-0 my-8 border-2 border-gray-200 rounded-lg">
                  <h4 className="p-2 mb-4 text-xl font-bold text-gray-600 bg-gray-200 font-[Open Sans]">
                    Cousines Eliminated:
                  </h4>
                  {formData.eliminate.map((type, i) => {
                    return (
                      <div
                        className="px-2 my-2 flex flex-row text-xl font-bold text-gray-600 font-[Open Sans]"
                        key={i}
                      >
                        <MdBlock className="w-6 h-6 py-0 px-0 my-1 mr-2 fill-[#cc444b] border-0 rounded-sm" />
                        {type}
                      </div>
                    );
                  })}
                </div>
                <div className="py-0 px-0 my-2 border-2 border-gray-200 rounded-lg">
                  <h4 className="p-2 mb-4 text-xl font-bold text-gray-600 bg-gray-200 font-[Open Sans]">
                    Tastes Selected:
                  </h4>
                  {formData.choose.map((type, i) => {
                    return (
                      <div
                        className="px-2 my-2 flex flex-row text-xl font-bold text-gray-600 dark:text-white "
                        key={i}
                      >
                        <MdCheckCircle className="w-6 h-6 py-0 px-0 my-1 mr-2 fill-[#23856d] border-0 rounded-sm" />
                        {type}
                      </div>
                    );
                  })}
                </div>
                <div >
                  {formData.notes ? (
                    <div className="py-0 px-0 my-2 border-2 border-gray-200 rounded-lg">
                      <h4 className="p-2 mb-4 text-xl font-bold text-gray-600 bg-gray-200 font-[Open Sans]">
                        Order Notes:
                      </h4>
                      <div
                        className="px-2 my-2 flex flex-row text-xl font-bold text-gray-600 dark:text-white "
                      > 
                        {formData.notes}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    className="w-full rounded-xl bg-gray-600 text-lg font-bold text-white my-2 p-3"
                    type="button"
                    onClick={() => {
                      setActiveStepIndex(activeStepIndex - 1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="hidden rounded-xl bg-gray-600 text-lg font-bold text-white my-2 p-3"
                    type="submit"
                  >
                    Pay with Stripe
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex flex-col py-40 px-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Pay with Stripe
          </h2>
          <StripeContainer postNewOrder={postNewOrder} />
        </div>
      </div>
    </div>
  );
}

export default ConfirmYourOrder;
