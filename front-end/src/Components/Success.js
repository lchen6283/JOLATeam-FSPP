import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MapImage from "./MapImage";
import { FormContext } from "../Pages/OrderConfirmation";

function Success() {
  const { finalOrderData } = useContext(FormContext);

  console.log(finalOrderData)
  return (
    <div className="container mx-auto p-10 rounded-lg shadow-lg bg-orange-200 mb-5 border-[0.5rem] border-orange-400">
      <h2 className="my-20 text-center text-4xl font-extrabold text-smakHighlight dark:text-white">
        Your SMAK order has been submitted successfully!
      </h2>
      
      <div className="w-full grid md:grid-cols-2 gap-5 mx-auto ">
        <div className="flex flex-col ">
          <h2 className="my-10 text-center text-2xl font-bold text-gray-600 dark:text-white">
            Order details
          </h2>
          
          <ul>
          <li className="my-0 text-center text-xl font-semibold text-gray-600 dark:text-white">
            Restaurant: {finalOrderData.restaurant_id.name}
          </li>
          <li className="my-0 text-center text-xl font-semibold text-gray-600 dark:text-white">
            Restaurant: {finalOrderData.restaurant_id.name}
          </li>
          <li className="my-0 text-center text-xl font-semibold text-gray-600 dark:text-white">
            Restaurant: {finalOrderData.restaurant_id.name}
          </li>
          </ul>
            <img
              className="w-1/2"
              src={finalOrderData ? finalOrderData.restaurant_id.image_url : null}
            />
            
        </div>
        <div className="flex flex-col ">
        <div className="w-full h-96 p-10 ">
       
          
          <MapImage
            latitude={finalOrderData.restaurant_id.coordinates.latitude}
            longitude={finalOrderData.restaurant_id.coordinates.longitude}
          />
        </div>
        </div>
      </div>
      <div className="flex flex-col ">
      <h2 className="my-20 text-center text-4xl font-extrabold text-smaksalmon dark:text-white">
        Click{" "}
        <Link
          to="/dashboard"
          className="underline text-red-600 hover:text-blue-800"
        >
          here
        </Link>{" "}
        if you want to see what's coming!
      </h2>
    </div>
    </div>
  );
}

export default Success;