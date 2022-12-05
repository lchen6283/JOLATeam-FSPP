// Stepper.js
import React, { useContext, useEffect } from "react";
import { FormContext } from "../Pages/OrderConfirmation";

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-orange-400", "text-white");
      } else {
        step.classList.remove("bg-orange-400", "text-white");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="w-2/3 flex flex-row items-center justify-center px-32 py-16">
      
      <div className="stepper-item w-12 h-12 text-center text-xl font-bold border-4 border-orange-400 rounded-full items-center justify-center flex">
        1
      </div>
      <div className="flex-auto border-t-4 border-orange-400"></div>
      <div className="stepper-item w-12 h-12 text-center text-xl font-bold border-4 border-orange-400 rounded-full items-center justify-center flex ">
        2
      </div>
      <div className="flex-auto border-t-4 border-orange-400"></div>
      <div className="stepper-item w-12 h-12 text-center text-xl font-bold border-4 border-orange-400 rounded-full items-center justify-center flex ">
        3
      </div>
      <div className="flex-auto border-t-4 border-orange-400"></div>
      <div className="stepper-item w-12 h-12 text-center text-xl font-bold border-4 border-orange-400 rounded-full items-center justify-center flex ">
        4
      </div>
      <div className="flex-auto border-t-4 border-orange-400"></div>
      <div className="stepper-item w-12 h-12 text-center text-xl font-bold border-4 border-orange-400 rounded-full items-center justify-center flex ">
        5
      </div>
    </div>
  );
}

export default Stepper;
