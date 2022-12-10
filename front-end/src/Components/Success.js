import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MapImage from "./MapImage";

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

  return (
    <div>
      <h2 className="my-20 text-center text-4xl font-extrabold text-smaksalmon dark:text-white">
        Your SMAK order has been submitted successfully!
      </h2>
      <h2 className="my-20 text-center text-4xl font-extrabold text-smaksalmon dark:text-white">
        Your order from{" "}
        {/* {pastOrders[0] ? pastOrders[0].restaurant_id.name : null} is on its way! */}
      </h2>
      <div className="w-3/4 grid grid-cols-2 gap-5 mx-auto ">
        <img
          src={pastOrders[0] ? pastOrders[0].restaurant_id.image_url : null}
        />
        {pastOrders[0] ? (
          <MapImage
            latitude={pastOrders[0].restaurant_id.coordinates.latitude}
            longitude={pastOrders[0].restaurant_id.coordinates.longitude}
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
