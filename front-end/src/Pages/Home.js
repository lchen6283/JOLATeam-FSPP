import React, { useState } from "react";
import Search from "../Components/Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Home() {
  const [city, setCity] = useState("Rego Park");
  const [restaurants, setRestaurants] = useState([]);
  let navigate = useNavigate();
  const handleClick = async () => {
    await axios
      .get(`${API}/yelp`)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(restaurants);
  return (
    <div className="h-full bg-yellow-200">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className=" font-extrabold text-black sm:text-4xl">
          <span className="block  text-gray-500 text-4xl md:text-6xl italic my-20 py-0 leading-0">
            <b className="px-4 py-2 mt-2 text-4xl md:text-6xl bg-orange-500 text-white no-italic rounded-md shadow">
              Hungry?
            </b>
          </span>
          <span className="block text-4xl md:text-6xl text-gray-600">
            Let's <b className="text-orange-500">SMAAAK!</b>
          </span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          Choose a location to get started.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow"></div>
          <Search setCity={setCity} city={city} />
        </div>
        <div className="mt-12 inline-flex rounded-md shadow">
          <button
            onClick={handleClick}
            type="button"
            className="py-3 px-6 bg-orange-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
}
