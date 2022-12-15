//PROOF OF CONCEPT PAGE TO DRAW CHOSEN RESTAURANT , CONFIGURE RANDOMIZATION OF FOOD ITEMS ACCORDING TO BUDGET
import { createContext, useState } from "react";
import Stepper from "../Components/Stepper";
import Step from "../Components/Step";
export const FormContext = createContext();

export default function OrderConfirmation() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [finalOrderData, setFinalOrderData] = useState({});
  const [apiData, setApiData] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  return (
    <FormContext.Provider
      value={{
        activeStepIndex,
        setActiveStepIndex,
        formData,
        setFormData,
        finalOrderData,
        setFinalOrderData,
        apiData,
        setApiData,
        restaurant,
        setRestaurant,
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-start pt-0 pb-10 px-0 bg-[#edf2f4]">
        <h2 className="py-4 text-gray-600 text-3xl md:text-3xl font-extrabold font-[Open Sans] text-center ">
          Processing your SMAK order
        </h2>
        <Stepper />
        <Step />
      </div>
    </FormContext.Provider>
  );
}
