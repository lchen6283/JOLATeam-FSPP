import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MapImage from "./MapImage";
import { FormContext } from "../Pages/OrderConfirmation";
import { MdCheckCircle } from "@react-icons/all-files/md/MdCheckCircle";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import axios from 'axios'

const API = process.env.REACT_APP_API_URL;

function Success() {
  const { finalOrderData } = useContext(FormContext);
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  let id = auth.data ? auth.data.id : "2";
  const [orderNum, setOrderNum] = useState()
  
  const setReview = async () => {
    // Get the order ID
    await axios
      .get(`${API}/users/${id}/orders`)
      .then((res) => {
        let userOrders = res.data
        // Getting the current order  
        const [{id: currentOrder}] = userOrders.sort((a, b) => b.id - a.id)
        setOrderNum(currentOrder)
      })
      .catch((e) => console.log(e));
  };
  
  
  
  console.log(finalOrderData);
  return (
    <div className="container mx-auto p-0 ">
      <h2 className="w-1/2 mx-auto my-10 py-4 px-10 text-center text-2xl font-extrabold text-white bg-smakorange rounded-xl">
        Your SMAK order has been processed successfully!
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 mx-auto ">
        <div className="flex flex-col py-10 px-0 md:px-20 bg-[#dee2e6] border-0 border-[#adb5bd] rounded-lg shadow-lg">
          <h2 className="my-4 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Order Details
          </h2>
          <div className="flex flex-col p-0">
            <div className="my-4">
              <img
                className="w-full h-96 object-cover border-8 border-gray-200 rounded-lg shadow-lg"
                src={
                  finalOrderData ? finalOrderData.restaurant_id.image_url : null
                }
              />
            </div>
          </div>
          <div className="pt-0 pb-0 px-0 my-4 bg-[#e9ecef] border-8 border-[#adb5bd] rounded-lg shadow-lg">
            <h2 className="py-4 px-4 mb-4 text-2xl font-bold text-white bg-smakHighlight ">
              Order Provider
            </h2>
            <ul className="p-4 text-left">
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
          </div>
          <div className="pt-0 pb-0 px-0 my-4 bg-[#e9ecef] border-8 border-[#adb5bd] rounded-lg shadow-lg">
            <h2 className="py-4 px-4 mb-4 text-2xl font-bold text-white bg-smakHighlight  ">
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
        </div>
        <div className="py-10 px-20 bg-gray-600 border-0 border-[#adb5bd] rounded-lg shadow-lg">
          <div className="pt-0 pb-0 px-0 ">
            <h2 className="my-4 text-center text-3xl font-bold text-white dark:text-white">
              Delivery Details
            </h2>
            <div className="w-full h-[600px] my-8 object-cover border-8 border-gray-200 rounded-lg shadow-lg ">
              <MapImage
                latitude={finalOrderData.restaurant_id.coordinates.latitude}
                longitude={finalOrderData.restaurant_id.coordinates.longitude}
              />
            </div>
            <div className="my-4 bg-[#e9ecef] border-8 border-[#adb5bd] rounded-lg shadow-lg">
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
          <div className="flex flex-grow my-4 hidden">
            
            {/* CALL MODAL */}
            <button
              type="button"
              className=" px-8 py-4 text-left text-lg font-bold rounded-xl text-white bg-gray-600 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-[Open Sans]"
              onClick={setReview}
            >
              Review Order
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Success;
