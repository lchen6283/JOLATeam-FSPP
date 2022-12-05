import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";
import sohoAPI from "../data/data";

function ConfirmYourOrder() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  console.log(formData);
  const ValidationSchema = yup.object().shape({});

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
          <h2 
            className="mb-10 text-center text-2xl font-bold text-white dark:text-white"
          >
            Order Details
          </h2>
          <div className="my-4 text-2xl font-bold text-smakorange dark:text-white">Selected Package: ${formData.budget}</div>
          <div className="my-0 text-xl font-semibold text-white dark:text-white">
            Will not include:
            {formData.eliminate.map((type) => {
              return <div>{type}</div>;
            })}
          </div>
          <div className="my-10 text-2xl font-bold text-white dark:text-white">
            I'm in the mood for:
            {formData.choose.map((type, i) => {
              return <div 
              className="text-2xl font-bold text-white dark:text-white"
              key={i}
              >* {type}</div>;
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
