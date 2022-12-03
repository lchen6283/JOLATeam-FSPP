import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import Basic from "./Basic";
import Eliminate from "./Eliminate";
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
      //   stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
