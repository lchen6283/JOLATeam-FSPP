import React, { useState } from "react";
import Search from "../Components/Search";
import Reviews from "../Components/Reviews";
import About from "../Components/About";
import HowitWorks from "../Components/HowitWorks";

import banner01 from "../assets/Food_Images/Banner_01.png";
import banner02 from "../assets/Food_Images/Banner_02.png";
import banner03 from "../assets/Food_Images/Banner_03.png";
import banner04 from "../assets/Food_Images/Banner_04.png";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Home() {
  let [city, setCity] = useState("");
  let [restaurants, setRestaurants] = useState([]);
  // let navigate = useNavigate();
  


  const handleClick = async () => {
    //
    
    setRestaurants([]);
    let param = city.label.split(",").splice(0, 2).join("");
    console.log(param);
    await axios
      .get(`${API}/yelp/${param}`)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //console.log(restaurants);
  return (
    <div className="h-full">
      {/* B A N N E R -- S L I D E R  */}
      <div className="text-center w-full">
        <div
          id="default-carousel"
          class="relative flowbite"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div class="relative h-[600px] overflow-hidden rounded-0 ">
            {/* <!-- Item 1 --> */}
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
              <div className="flex h-full items-center bg-gray-200 justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-0">
                <img
                  src={banner01}
                  alt="..."
                  className="relative opacity-100"
                />
                <div className="w-full mx-auto absolute">
                  <h2 className="p-6 mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-smakHighlight relative inline-block ">
                    <span class="text-6xl relative text-white font-extrabold font-[Open Sans] text-shadow-md">Welcome To SMAK!</span>
                    <span className="block text-4xl md:text-1xl italic">
                      <b className="text-smaksalmon"></b>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
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
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
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
          <div
            class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
          >
            <button
              type="button"
              class="w-3 h-3 p-2 rounded-0"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 p-2 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 p-2 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-0"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-0"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>  
      </div>
      {/* S E A R C H */}
      <div className="flex flex-row bg-smakHighlight p-10">
        <div className="py-8 mx-auto items-center text-center">
          <Search 
            setCity={setCity} 
            city={city}
            handleClick={handleClick}
          />
        </div>
      </div>
      {restaurants[0] ? (
        <section className="overflow-hidden text-gray-700 ">
          <div className="w-full h-96 px-0 py-2 mx-auto lg:pt-12 lg:px-32 relative">
            <div className="grid grid-cols-9 grid-flow-row auto-rows-max animate absolute left-0">
              {restaurants.map((restaurant, i) => {
                return (
                  <div className="image" key={i}>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-60 rounded-lg"
                      src={restaurant.image_url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
      {/*  H O W - I T - W O R K S  */}
      <HowitWorks />
      {/*  A B O U T  */}
      <About />
      {/*  R E V I E W S  */}
      {/* <Reviews /> */}
      
    </div>
  );
}