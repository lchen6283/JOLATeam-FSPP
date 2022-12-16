import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import Search from "../Components/Search";
import Reviews from "../Components/Reviews";
import AboutHome from "../Components/AboutHome";
import HowitWorks from "../Components/HowitWorks";
import { Gallery } from "../Components/Gallery";
import useAuth from "../hooks/useAuth";

import banner01 from "../assets/Food_Images/Banner_01.png";
import banner02 from "../assets/Food_Images/Banner_02.png";
import banner03 from "../assets/Food_Images/Banner_03.png";

import axios from "axios";
import { array } from "yup";

const API = process.env.REACT_APP_API_URL;

export default function Home() {
  //const { auth } = useAuth();
  const ref = useRef(null);
  let navigate = useNavigate();
  let [city, setCity] = useState("");
  let [restaurants, setRestaurants] = useState([]);
  let [searchResults, setSearchResults] = useState([]);
  const [reviews, setReviews] = useState([]);
  let search = [];

  useEffect(() => {
    getAllReviews();

    const importFlowbiteFunc = function (flowbitePathStr) {
      const flowbiteScriptEl = document.createElement("script");
      flowbiteScriptEl.setAttribute("src", flowbitePathStr);
      document.body.appendChild(flowbiteScriptEl);
    };
    importFlowbiteFunc("https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"); // here goes your path to a local flowbite.js you want to import
  }, []);

  const getAllReviews = () => {
    axios
      .get(`${API}/users/all/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // H A N D L E R S
  const handleClick = async (e) => {
    //

    const id = toast.loading("Searching...", {
      position: toast.POSITION.TOP_CENTER,
    });
    setRestaurants([]);
    let param = city.label.split(",").splice(0, 2).join("");
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    await axios
      .get(`${API}/yelp/${param}`)
      .then((res) => {
        toast.update(id, {
          render: "Search successful",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        setRestaurants(res.data);
      })
      .catch((err) => {
        toast.update(id, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
        console.log(err);
      });

    if (restaurants) {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStart = async () => {
    // Refreshing data to local storage
    localStorage.removeItem("searchResults");
    localStorage.setItem("searchResults", JSON.stringify(restaurants));
    navigate("/order");
  };

  return (
    <div className="h-full">
      <ToastContainer />
      {/* M A I N - C A R O U S E L  */}
      <section className="text-center w-full">
        <div
          id="default-carousel"
          className="relative flowbite"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-96 overflow-hidden rounded-0 ">
            {/* <!-- Item 1 --> */}
            <div
              className="hidden duration-1000 ease-in-out"
              data-carousel-item
            >
              <div className="flex h-full items-center bg-gray-200 justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-0">
                <img
                  src={banner01}
                  alt="..."
                  className="relative opacity-100"
                />
                <div className="w-full mx-auto absolute">
                  <h2 className="p-6 mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-smaksalmon relative inline-block ">
                    <span className="text-6xl relative text-white font-extrabold font-[Open Sans] text-shadow-md">
                      Welcome To <b className="text-8xl">SMAK!</b>
                    </span>
                    <span className="block text-4xl md:text-1xl italic">
                      <b className="text-smaksalmon"></b>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div
              className="hidden duration-1000 ease-in-out"
              data-carousel-item
            >
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-0">
                <img
                  src={banner02}
                  alt="..."
                  className="relative opacity-100"
                />
                <div className="w-full mx-auto absolute">
                  <h2 className=" font-extrabold text-black sm:text-4xl">
                    <span className="block  text-gray-500 text-2xl md:text-6xl mb-6 py-0 leading-0">
                      <b className="px-4 py-2 text-6xl md:text-6xl bg-smaksalmon text-white no-italic rounded-md shadow-2xl">
                        Got a case of dinner time indecision?
                      </b>
                    </span>
                    <span className="block md:text-8xl sm:text-6xl">
                      <b className="text-smakorange">SMAK is here to help</b>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Item 3 --> */}
            <div
              className="hidden duration-1000 ease-in-out"
              data-carousel-item
            >
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-0">
                <img
                  src={banner03}
                  alt="..."
                  className="relative opacity-100"
                />
                <div className="w-full mx-auto absolute">
                  <h2 className=" font-extrabold text-black sm:text-4xl">
                    <span className="block  text-gray-500 text-4xl md:text-6xl mb-4 py-0 leading-0">
                      <b className="px-4 py-2 text-4xl md:text-6xl bg-smakorange text-white no-italic rounded-md shadow">
                        Ready for something new?
                      </b>
                    </span>
                    <span className="block text-4xl md:text-8xl">
                      <b className="text-smaksalmon">Just SMAK!</b>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-6 h-1 p-2 rounded-0"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-6 h-1 p-2 rounded-0"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-6 h-1 p-2 rounded-0"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-0">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-0">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
      {/* S E A R C H */}
      <section className="flex flex-row bg-smakHighlight p-10">
        <div className="sm:w-full md:w-full lg:w-1/2  px-10 sm:px-10 mx-auto py-0 items-center text-center">
          <Search setCity={setCity} city={city} handleClick={handleClick} />
        </div>
      </section>
      {/* {console.log(restaurants[0])} */}
      {/* S E A R C H  - R E S U L T S */}
      {restaurants[0] ? (
        <section className="py-10 bg-[#d3d3d3]">
          <div className="w-full mt-0 rounded-md items-center text-center">
            <div className="mb-4 items-baseline text-gray-600 text-4xl md:text-5xl text-center font-extrabold font-[Open Sans]">
              <b className="text-smakorange text-4xl leading-4"></b>
              Your possible matches!
            </div>
            <button
              onClick={handleStart}
              type="button"
              className="py-3 px-[8rem] my-6 bg-[#b7324b] hover:bg-orange-400 focus:ring-smakorange focus:ring-offset-gray-200 text-white text-xl transition ease-in duration-200 text-center font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl font-extrabold font-[Open Sans] border-smakorange border-4"
            >
              Start Order
            </button>
          </div>
          <div className="w-full h-96 px-0 py-2 mx-auto lg:pt-12 lg:px-32 relative overflow-hidden">
            <div className="hidden">
              {restaurants.map((restaurant) =>
                search.push({
                  image_url: restaurant.image_url,
                  category: restaurant.matchedcategory,
                })
              )}
            </div>
            <Gallery restaurants={search} speed={40000} />
          </div>
        </section>
      ) : (
        <section></section>
      )}
      {/*  H O W - I T - W O R K S  */}
      <HowitWorks ref={ref} />
      {/*  A B O U T  */}
      <AboutHome />
      {/*  R E V I E W S  */}
      {reviews.length && <Reviews reviews={reviews} />}
    </div>
  );
}