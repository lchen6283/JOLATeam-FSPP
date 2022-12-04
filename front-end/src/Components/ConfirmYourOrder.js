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
        <div className="flex flex-col">
          <h3>Order Details</h3>
          <div>Selected Package: ${formData.budget}</div>
          <div>
            Will not include:
            {formData.eliminate.map((type) => {
              return <div>{type}</div>;
            })}
          </div>
          <div>
            I'm in the mood for:
            {formData.choose.map((type, i) => {
              return <div key={i}>{type}</div>;
            })}
          </div>
          <div>My notes for the kitchen: {formData.notes}</div>
          <button
            className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
            type="button"
            onClick={() => {
              setActiveStepIndex(activeStepIndex - 1);
            }}
          >
            BACK
          </button>
          <button
            className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
            type="submit"
          >
            Confirm & Pay
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ConfirmYourOrder;
