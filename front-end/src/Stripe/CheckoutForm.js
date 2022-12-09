import React, { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { FormContext } from "../Pages/OrderConfirmation";


const STRIPE_SERVER = process.env.REACT_APP_API_URL;

export const CheckoutForm = (props) => {
  const { activeStepIndex, setActiveStepIndex } =
    useContext(FormContext);
  const { postNewOrder } = props;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${STRIPE_SERVER}/stripe/charge`,
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          //
          setActiveStepIndex(activeStepIndex + 1);
          postNewOrder();
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form 
    onSubmit={handleSubmit} 
    style={{ maxWidth: 400 }}
    className="w-full h-64 bg-white p-10 border-8 border-gray-200 rounded-lg"
    >
      
      <fieldset className="FormGroup p-0 ">
        <div className="FormRow my-2 border-2 border-gray-200 p-2 rounded-lg">
          <CardElement />
        </div>
      </fieldset>
      <button 
        className="rounded-md bg-smakHighlight font-bold text-white my-2 py-2 px-4"
      >
        Submit Pay
      </button>
    </form>
  );
};