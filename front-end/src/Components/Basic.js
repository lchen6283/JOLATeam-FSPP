import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";

function Basic() {
  const {
    activeStepIndex,
    setActiveStepIndex,
    formData,
    setFormData,
    setApiData,
  } = useContext(FormContext);

  useEffect(() => {
    setApiData(JSON.parse(window.localStorage.getItem("searchResults")));
  }, []);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    budget: yup.string().required(),
  });
  let packageLegend = (val) => {
    val = Number(val);
    if (val === 60) {
      return (
        <div className="flex text-center text-1xl font-bold my-5">
          <div className="w-1/3 h-12 ">
            <div className="text-3xl ">🍢 </div>
            <div>Appetizer</div>
          </div>
          <div className="w-1/3 h-12 	">
            <div className="text-3xl ">🥘</div>
            <div>Entree</div>
          </div>
          <div className="w-1/3 h-12">
            <div className="text-3xl ">🍰 </div>
            <div>Dessert</div>
          </div>
        </div>
      );
    } else if (val === 100) {
      return (
        <div className="flex text-center text-1xl font-bold my-5">
          <div className="w-1/3 h-12 ">
            <div className="text-3xl ">🍢 </div>
            <div>Appetizer</div>
          </div>
          <div className="w-1/3 h-12 ">
            <div className="text-3xl ">🥗 </div>
            <div>Appetizer</div>
          </div>
          <div className="w-1/3 h-12 	">
            <div className="text-3xl ">🥘</div>
            <div>Entree</div>
          </div>
          <div className="w-1/3 h-12 	">
            <div className="text-3xl ">🍝</div>
            <div>Entree</div>
          </div>
          <div className="w-1/3 h-12">
            <div className="text-3xl ">🍰 </div>
            <div>Dessert</div>
          </div>
        </div>
      );
    } else if (val === 150) {
      return (
        <div className="flex text-center text-1xl font-bold my-5">
          <div className="w-1/3 h-12 ">
            <div className="text-3xl ">🍢 </div>
            <div>Appetizer</div>
          </div>
          <div className="w-1/3 h-12 ">
            <div className="text-3xl ">🥗 </div>
            <div>Appetizer</div>
          </div>
          <div className="w-1/3 h-12 	">
            <div className="text-3xl ">🥘</div>
            <div>Entree</div>
          </div>
          <div className="w-1/3 h-12 	">
            <div className="text-3xl ">🍱</div>
            <div>Entree</div>
          </div>
          <div className="w-1/3 h-12 	">
            <div className="text-3xl ">🍝</div>
            <div>Entree</div>
          </div>
          <div className="w-1/3 h-12">
            <div className="text-3xl ">🍰 </div>
            <div>Dessert</div>
          </div>
          <div className="w-1/3 h-12">
            <div className="text-3xl ">🍨 </div>
            <div>Dessert</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-3xl flex flex-row text-center">
          <div className="mx-auto"></div>
        </div>
      );
    }
  };

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
      {({ values }) => (
        <Form className="w-full p-10 rounded-xl shadow-lg bg-orange-200 max-w-xl mb-5 border-[0.5rem] border-orange-400">
          <div className="mg6">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="budget"
                className="mb-10 text-center text-3xl font-bold text-gray-600 dark:text-white"
              >
                Choose A Budget
              </label>
              <Field
                id="budget"
                name="budget"
                as="select"
                className="bg-gray-50 border-4 border-gray-400 font-semibold text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select An Option</option>
                <option value="60">$ 60 (Perfect For 1)</option>
                <option value="100">$ 100 (Ideal for 2)</option>
                <option value="150">$ 150 (Treat The Family)</option>
              </Field>
            </div>
            <ErrorMessage
              name="budget"
              render={renderError}
              className="py-2 text-xl font-bold"
            />
            <div>{packageLegend(values.budget)}</div>
            <button
              className="w-full p-3 my-2 rounded-xl bg-gray-600 font-bold text-white text-xl"
              type="submit"
            >
              Continue
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Basic;
