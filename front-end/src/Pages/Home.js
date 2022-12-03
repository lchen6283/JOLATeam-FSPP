import React, { useState } from "react";
import Search from "../Components/Search";
import Reviews from "../Components/Reviews";
import About from "../Components/About";
import banner from "../assets/Food_Images/Banner_01.png";
import { Carousel, Modal } from "flowbite-react";
import HowitWorks from "../Components/HowitWorks";
import slide01 from "../assets/Carousel/carousel-slide-01.jpg";
import slide02 from "../assets/Carousel/carousel-slide-02.jpg";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Home() {
  let [city, setCity] = useState("");
  let [restaurants, setRestaurants] = useState([]);
  // let navigate = useNavigate();
  const handleClick = async () => {
    setRestaurants([]);
    let param = city.label.split(",").splice(0, 2).join("");
    await axios
      .get(`${API}/yelp/${param}`)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(restaurants);
  return (
    <div>
      <div className="h-full relative">
        <img src={banner} className="bg-top relative" alt="" />
        <div className="text-center w-full mx-auto  px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="font-extrabold text-black sm:text-4xl">
            <span className="text-gray-500 text-6xl md:text-6xl italic my-20 py-0 leading-0">
              <b className=" absolute text-5xl text-white top-1/3 left-50 -translate-x-1/2 -translate-y-1/2 px-4 py-2 mt-2 md:text-8xl bg-smakorange no-italic rounded-md shadow font-['Darker Grotesque']">
                Welcome To SMAK
              </b>
            </span>
          </h2>
          <div className="w-100  bg-smakHighlight  -translate-y-1/4 -ml-10 -mr-8">
            <Search setCity={setCity} city={city} handleClick={handleClick} />
          </div>
        </div>
      </div>
      {restaurants[0] ? (
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-6 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {restaurants.map((restaurant, i) => {
                return (
                  <div className="flex flex-wrap w-1/3" key={i}>
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={restaurant.image_url}
                      />
                    </div>
                    ``
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
      <HowitWorks />
      <Reviews />
      <About />

      {/* <div className="flex flex-row carousel">
          <div className="text-center w-full mx-auto py-0 px-0 ">
            <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel 
                indicators={false}
                slide={true}
                // leftControl="left"
                // rightControl="right"
              >
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-0">
                  <img
                    src={slide01}
                    alt="..."
                    className="relative"
                  />
                  <div className="w-1/2 mx-auto absolute">
                    <h2 className=" font-extrabold text-black sm:text-4xl">
                      <span className="block  text-gray-500 text-4xl md:text-6xl mb-4 py-0 leading-0">
                        <b className="px-4 py-2 text-4xl md:text-6xl bg-smakorange text-white no-italic rounded-md shadow">
                          No more food fights
                        </b>
                      </span>
                      <span className="block text-4xl md:text-8xl">
                        <b className="text-smaksalmon">Just SMAK!</b>
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-0">
                  <img
                    src={slide02}
                    alt="..."
                    className="relative"
                  />
                  <div className="w-1/2 mx-auto absolute">
                    <h2 className=" font-extrabold text-black sm:text-4xl">
                      <span className="block  text-gray-500 text-2xl md:text-6xl mb-6 py-0 leading-0">
                        <b className="px-4 py-2 text-6xl md:text-6xl bg-smaksalmon text-white no-italic rounded-md shadow-2xl">
                          Not sure waht to eat?
                        </b>
                      </span>
                      <span className="block md:text-8xl sm:text-6xl">
                        <b className="text-smakorange">SMAK! is here to HELP</b>
                      </span>
                    </h2>
                  </div>
                  </div>
              </Carousel>
            </div>
          </div>
        </div> */}

      {/* { <div className="flex flex-row bg-yellow-100 p-10">
          <div className="w-1/2 mx-auto items-center text-center">
            <h4 className="w-full text-4xl mt-4 font-bold text-smaksalmon">
              Choose a location to get started.
            </h4>
            <div className="w-full mx-auto">
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow"></div>
                <Search 
                  setCity={setCity} 
                  city={city} 
                  className="rounded-xl"
                />
              </div>
              <div className="mt-4 inline-flex rounded-md shadow">
                <button
                  onClick={handleClick}
                  type="button"
                  className="py-2 px-24 bg-smaksalmon hover:bg-smakHighlight focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-3xl "
                >
                  START
                </button>
              </div>
            </div>
          </div>
        </div>
      {restaurants[0] ? (
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {restaurants.map((restaurant, i) => {
                return (
                  <div className="flex flex-wrap w-1/3" key={i}>
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={restaurant.image_url}
                      />
                    </div>``
                  </div>
                );
              })}
            </div>
          </div>
        </section>} */}

      {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel 
        slide={false}
        leftControl=""
        rightControl=""
        >
          <div className="flex h-full items-center justify-center bg-gray-200 dark:bg-gray-700 dark:text-white">
          <div className="carousel-item active relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Anna Morian</p>
          </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-200 dark:bg-gray-700 dark:text-white">
          <div className="carousel-item active relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Anna Morian</p>
          </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-200 dark:bg-gray-700 dark:text-white">
          <div className="carousel-item active relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Anna Morian</p>
          </div>
          </div>
        </Carousel>
      </div> */}
    </div>
  );
}
