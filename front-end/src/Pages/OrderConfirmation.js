//PROOF OF CONCEPT PAGE TO DRAW CHOSEN RESTAURANT , CONFIGURE RANDOMIZATION OF FOOD ITEMS ACCORDING TO BUDGET
import { createContext, useState } from "react";
import Stepper from "../Components/Stepper";
import Step from "../Components/Step";
export const FormContext = createContext();

export default function OrderConfirmation() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  console.log(formData);
  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
      <div className="w-screen h-full flex flex-col items-center justify-start">
        <Stepper />
        <Step />
      </div>
    </FormContext.Provider>
  );
}
