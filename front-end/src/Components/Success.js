import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MapImage from "./MapImage";
import { FormContext } from "../Pages/OrderConfirmation";
import { MdCheckCircle } from "@react-icons/all-files/md/MdCheckCircle";

function Success() {
  const { finalOrderData } = useContext(FormContext);
  console.log(finalOrderData);
  return (
    <div className="container mx-auto p-10 rounded-lg shadow-lg bg-orange-200 mb-5 border-[0.5rem] border-orange-400">
      <h2 className="p-4 text-center text-3xl font-extrabold text-smakHighlight rounded-xl">
        Your SMAK order has been processed successfully!
      </h2>
      <div className="w-full grid rid-cols-1 md:grid-cols-2 gap-5 mx-auto ">
        <div className="flex flex-col p-10">
          <h2 className="my-4 text-center text-3xl font-bold text-smakHighlight dark:text-white">
            Order Details
          </h2>
          <div className="flex flex-col p-10">
            <div className="">
              <img
                className="w-full border-8 border-gray-400 rounded-xl"
                src={
                  finalOrderData ? finalOrderData.restaurant_id.image_url : null
                }
              />
            </div>
          </div>
          <h2 className="my-4 text-2xl font-bold text-smakHighlight ">
            Order Provider
          </h2>
          <ul className="text-left">
            <li className="my-0 text-xl font-semibold text-gray-600 dark:text-white">
              Restaurant:{" "}
              <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">
                {finalOrderData.restaurant_id.name}
              </span>
            </li>
            <li className="my-0 text-xl font-semibold text-gray-600 dark:text-white">
              Cuisine:{" "}
              <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">
                {finalOrderData.restaurant_id.matchedcategory["label"]}
              </span>
            </li>
            {/* <li className="my-0 text-xl font-semibold text-gray-600 dark:text-white">
              Delivery Address: <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">{finalOrderData.delivery_address}</span> 
            </li>
            <li className="my-0 text-xl font-semibold text-gray-600 dark:text-white">
              Total Cost: <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">$ {finalOrderData.total_cost}</span> 
            </li> */}
          </ul>
          <h2 className="my-4 text-2xl font-bold text-smakHighlight ">
            Order Items
          </h2>
          <ul className="text-left">
            {finalOrderData.order_contents.map((item, i) => {
              return (
                <li
                  className="flex flex-row my-1 text-xl text-gray-600 font-[Open Sans]"
                  key={i}
                >
                  <MdCheckCircle className="w-6 h-6 py-0 px-0 my-1 mx-2 fill-gray-600 border-0 rounded-sm" />
                  {item.type}
                  <b className="ml-4 text-gray-600 font-bold font-[Open Sans]">
                    {item.name}
                  </b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col p-10 ">
          <h2 className="my-4 text-center text-3xl font-bold text-smakHighlight dark:text-white">
            Delivery Details
          </h2>
          <div className="w-full h-[700px] p-10 ">
            <MapImage
              latitude={finalOrderData.restaurant_id.coordinates.latitude}
              longitude={finalOrderData.restaurant_id.coordinates.longitude}
            />
          </div>
          <ul className="p-10 text-left">
            <li className="my-4 text-xl font-semibold text-gray-600 dark:text-white">
              Restaurant Address:{" "}
              <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">
                {finalOrderData.restaurant_id.location}
              </span>
            </li>
            <li className="my-4 text-xl font-semibold text-gray-600 dark:text-white">
              Delivery Address:
              <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">
                {finalOrderData.delivery_address}
              </span>
            </li>
            <li className="my-4 text-xl font-semibold text-gray-600 dark:text-white">
              Total Cost:
              <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">
                $ {finalOrderData.total_cost}
              </span>
            </li>
            <li className="my-4 text-xl font-semibold text-gray-600 dark:text-white">
              Estimate Time Arrival:
              <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">
                20 Minutes
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col hidden">
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
