import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_live_51KsxPfEDJs1UCEIIQ6eCJVzsRmm10bqnDekEH0wnLFCTIy8PScHvn1fBKCHjGHVRdtlekfg6NeGc1s9ZOrf2CZS000lXb7k12n";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;