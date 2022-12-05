import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";
import sohoAPI from "../data/data";

let apiCategories = [...new Set(sohoAPI.map((e) => e.matchedcategory))];
function Eliminate() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    eliminate: yup.array().max(2).of(yup.string().required()).required(),
  });

  return (
    <Formik
      initialValues={{
        eliminate: [],
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form
        className="block p-10 rounded-lg shadow-lg bg-smakHighlight max-w-md mb-5"
        role="group"
        aria-labelledby="checkbox-group"
      >
        <h2
          className="mb-10 text-center text-2xl font-bold text-white dark:text-white"
        >
          Select two cousine types from the list below:
        </h2>
        
        <div className="flex flex-col items-start mb-2">
          {apiCategories.map((category, i) => {
            return (
              <label className="p-2 font-bold text-white text-xl " key={i}>
                <Field 
                  name="eliminate" 
                  type="checkbox" 
                  value={category} 
                  className="p-4 mr-2 rounded-full border-2 border-orange-400"
                />
                {category}
              </label>
            );
          })}
        </div>
        <ErrorMessage name="eliminate" render={renderError} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          className="rounded-md bg-gray-600 font-bold text-white my-2 p-2"
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
          Continue
        </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Eliminate;
