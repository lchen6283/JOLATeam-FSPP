import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";

function DeliveryAddress() {
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
        className="block p-10 rounded-lg shadow-lg bg-smakHighlight max-w-md mb-5"
        role="group"
        aria-labelledby="checkbox-group"
      >
        <h2 className="mb-10 text-center text-2xl font-bold text-white dark:text-white">
          Please Enter Your Delivery Address Below:
        </h2>
        <div className="flex flex-col items-start mb-2">
          <label className="p-2 font-bold text-white text-xl ">
            <input
              name="addressLine1"
              type="text"
              values=""
              className="text-input p-4 mr-2 rounded-full border-2 text-black  border-orange-400"
            />
            Address Line 1
          </label>
          <label className="p-2 font-bold text-white text-xl ">
            <input
              name="addressLine2"
              type="text"
              className="p-4 mr-2 rounded-full border-2 text-black border-orange-400"
            />
            Address Line 2
          </label>
          <label className="p-2 font-bold text-white text-xl ">
            <input
              name="city"
              type="text"
              className="p-4 mr-2 rounded-full border-2 text-black  border-orange-400"
            />
            City
          </label>
          <label className="p-2 font-bold text-white text-xl ">
            <input
              name="state"
              type="text"
              className="p-4 mr-2 rounded-full border-2 text-black  border-orange-400"
            />
            State
          </label>
          <label className="p-2 font-bold text-white text-xl ">
            <input
              type="text"
              name="zipcode"
              inputmode="numeric"
              pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
              className="p-4 mr-2 rounded-full border-2 text-black border-orange-400"
            />
            Zip
          </label>
          <label className="p-2 font-bold text-white text-xl ">
            <input
              name="phone"
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              placeholder="123-456-7890"
              className="p-4 mr-2 rounded-full border-2 text-black border-orange-400"
            />
            Phone Number
          </label>
        </div>
        <ErrorMessage name="choose" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-bold text-white">Delivery Notes</label>
          <Field
            name="notes"
            as="textarea"
            className="w-full rounded-md border-2 p-2"
            placeholder="Ring doorbell"
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

export default DeliveryAddress;
