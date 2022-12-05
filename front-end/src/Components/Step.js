import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import Basic from "./Basic";
import Eliminate from "./Eliminate";
import Choose from "./Choose";
import ConfirmYourOrder from "./ConfirmYourOrder";
import Success from "./Success";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Basic />;
      break;
    case 1:
      stepContent = <Eliminate />;
      break;
    case 2:
      stepContent = <Choose />;
      break;
    case 3:
      stepContent = <ConfirmYourOrder />;
      break;
    case 4:
      stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;