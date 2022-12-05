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
      <Form className="w-full p-6 rounded-lg shadow-lg bg-white max-w-md mb-5">
        <div className="mg6">
          <div className="flex flex-col items-start mb-2">
            <label
              htmlFor="budget"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose A Budget
            </label>
            <Field
              id="budget"
              name="budget"
              as="select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select An Option</option>
              <option value="100">$ 100 (Perfect For 1)</option>
              <option value="150">$ 150 (Ideal for 2)</option>
              <option value="200">$ 200 (Treat The Family)</option>
            </Field>
          </div>
          <ErrorMessage name="budget" render={renderError} />
          <button
            className="my-10 rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
            type="submit"
          >
            Continue
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Basic;

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
