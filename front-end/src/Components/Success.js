import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import MapImage from "./MapImage";
import { FormContext } from "../Pages/OrderConfirmation";
import axios from "axios";

function Success() {
  let [pastOrders, setPastOrders] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    await axios
      .get(`${API}/users/2/orders`)
      .then((res) => {
        setPastOrders(res.data.slice(-1));
      })
      .catch((e) => console.log(e));
  };
  console.log(pastOrders[0]);
  const { finalOrderData } = useContext(FormContext);

  return (
    <div>
      <h2 className="my-20 text-center text-4xl font-extrabold text-smaksalmon dark:text-white">
        Your SMAK order has been submitted successfully!
      </h2>
      <h2 className="my-20 text-center text-4xl font-extrabold text-smaksalmon dark:text-white">
        Your order from{" "}
        {finalOrderData ? finalOrderData.restaurant_id.name : null} is on its
        way!
      </h2>
      <div className="w-3/4 grid grid-cols-2 gap-5 mx-auto ">
        <img
          src={finalOrderData ? finalOrderData.restaurant_id.image_url : null}
        />
        {finalOrderData.restaurant_id ? (
          <MapImage
            latitude={finalOrderData.restaurant_id.coordinates.latitude}
            longitude={finalOrderData.restaurant_id.coordinates.longitude}
          />
        ) : null}
      </div>
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
  );
}

export default Success;