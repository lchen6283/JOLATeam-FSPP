import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";

function Eliminate() {
  const {
    activeStepIndex,
    setActiveStepIndex,
    formData,
    setFormData,
    apiData,
  } = useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );
  let apiCategories = [...new Set(apiData.map((e) => e.matchedcategory))];

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
        className="w-full p-10 rounded-xl shadow-lg bg-gray-300 max-w-xl mb-5 border-[0.5rem] border-gray-400"
        role="group"
        aria-labelledby="checkbox-group"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-600 dark:text-white">
          Eliminate two cuisine types from the list below:
        </h2>

        <div className="flex flex-col items-start mb-2">
          {apiCategories.map((category, i) => {
            return (
              <label className="p-2 font-bold text-gray-600 text-xl " key={i}>
                <Field
                  name="eliminate"
                  type="checkbox"
                  value={category}
                  className="p-4 mr-2 rounded-full border-4 border-orange-400"
                />
                {category[0].toUpperCase() + category.substring(1)}
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
