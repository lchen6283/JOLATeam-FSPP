import React, { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { FormContext } from "../Pages/OrderConfirmation";
import { ToastContainer, toast } from "react-toastify";

const STRIPE_SERVER = process.env.REACT_APP_API_URL;

export const CheckoutForm = (props) => {
  const { activeStepIndex, setActiveStepIndex } = useContext(FormContext);
  const { postNewOrder } = props;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log()

    const search = toast.loading("Proccesing...", {
      position: toast.POSITION.TOP_CENTER,
    });
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${STRIPE_SERVER}/stripe/charge`,
          // {
          //   amount: 999,
          //   id: id,
          // }
          JSON.stringify({ 
            amount: 999, 
            id: id 
          }),
          {
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer pk_test_51KsxPfEDJs1UCEIIMbLIJmNULUkLQbcjEdwIzbvj19HHtr6zEtU5WISWQo9DMB6ws8lNf1VquosSSlkpvtzHAJ1j00didwPp1m`,
            //withCredentials: false,
          }
        );

        console.log("data:", response.data.success);
        if (response.data.success) {
          console.log("Payment successful!");
          
          // Notification
          toast.update(search, {
            render: "Payment successful!",
            type: "success",
            isLoading: false,
            autoClose: 1000,
          });
          setActiveStepIndex(activeStepIndex + 1);
          postNewOrder();
        }
      } catch (error) {
        toast.update({
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
        console.log("Error:", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div 
    className=" md:px-0 ">
      <ToastContainer/>
      <form 
      onSubmit={handleSubmit} 
      // style={{ maxWidth: 400 }}
      className="w-full h-64 bg-white py-10 px-4 md:px-10 border-0 border-gray-200 rounded-xl"
      >
        
        <fieldset className="FormGroup p-0 ">
          <div >
            <label 
              htmlFor="card-element"
              className="text-lg text-gray-600 font-bold"
            >
              Card information</label>
            <CardElement 
              id="card-element"
              className="p-4  my-2 border-2 border-gray-200  rounded-lg"
            />
          </div>
        </fieldset>
        <button 
          className="w-full rounded-xl bg-smakHighlight text-xl font-bold text-white my-2 py-3 px-8"
        >
          Submit Pay
        </button>
      </form>
    </div>
  );
};
