import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";

function Basic() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    budget: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        budget: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
        <div className="text-2xl font-medium self-center mb-2">
          Choose A Budget
        </div>
        <div className="flex flex-col items-start mb-2">
          <label htmlFor="budget" className="font-medium text-gray-900">
            What is your budget?
          </label>
          <Field id="budget" name="budget" as="select" className="my-select">
            <option value="100">$ 100</option>
            <option value="150">$ 150</option>
            <option value="200">$ 200</option>
          </Field>
        </div>
        <ErrorMessage name="name" render={renderError} />
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

export default Basic;
{
  /* <div class="px-4 sm:px-0">
<h2 class="text-lg font-medium leading-6 text-gray-900">
  Select A Budget
</h2>
</div>
<div class="col-span-6 sm:col-span-3">
<select
  value={budget}
  id="budget"
  name="budget"
  onChange={handleChange}
>
  <option value="">Select An Option</option>
  <option value="100">100 $</option>
  <option value="150">150 $</option>
  <option value="200">200 $</option>
</select>
</div> */
}
