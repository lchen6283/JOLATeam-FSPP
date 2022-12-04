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
        className="block p-6 rounded-lg shadow-lg bg-white max-w-md mb-5"
        role="group"
        aria-labelledby="checkbox-group"
      >
        <div className="flex flex-col items-start mb-2">
          {list.map((item, i) => {
            return (
              <label className="font-medium text-gray-900" key={i}>
                <Field name="choose" type="checkbox" value={item.word} />
                {item.word}
              </label>
            );
          })}
        </div>
        <ErrorMessage name="choose" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Notes</label>
          <Field
            name="notes"
            as="textarea"
            className="rounded-md border-2 p-2"
            placeholder="Spicy, Allergies, Protein of Choice?"
          />
        </div>
        <ErrorMessage name="notes" render={renderError} />
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
          Continue
        </button>
      </Form>
    </Formik>
  );
}

export default Choose;
