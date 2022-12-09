import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";
import sohoAPI from "../data/data";
//import { NavItem } from "react-bootstrap";

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
function Choose() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    choose: yup.array().min(2).of(yup.string().required()).required(),
    name: yup.string(),
  });

  return (
    <Formik
      initialValues={{
        choose: [],
        notes: "",
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
          Select at least 2 from the list below:
        </h2>
        <div className="flex flex-col items-start mb-2">
          {list.map((item, i) => {
            return (
              <label className="p-2 font-bold text-gray-600 text-xl " key={i}>
                <Field
                  name="choose"
                  type="checkbox"
                  value={item.word}
                  className="p-4 mr-2 rounded-full border-4 border-orange-400"
                />
                {item.word[0].toUpperCase() + item.word.substring(1)}
              </label>
            );
          })}
        </div>
        <ErrorMessage name="choose" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="w-full my-4 items-justify-center text-center text-xl font-bold text-gray-600">
            Order Notes
          </label>
          <Field
            name="notes"
            as="textarea"
            className="w-full rounded-xl border-4 border-gray-400 p-2"
            placeholder="Spicy, Allergies, Protein of Choice?"
          />
        </div>
        <ErrorMessage name="notes" render={renderError} />
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

export default Choose;
