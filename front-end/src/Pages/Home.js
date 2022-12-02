import React, { useState } from "react";
import Search from "../Components/Search";
import Reviews from "../Components/Reviews";
import About from "../Components/About";
import banner from "../assets/Food_Images/Banner_01.png";
import HowitWorks from "../Components/HowitWorks";
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
          <div class="w-100  bg-smakHighlight  -translate-y-1/4 -ml-10 -mr-8">
            <Search setCity={setCity} city={city} handleClick={handleClick}/>
          </div>
        </div>
      </div>
      {restaurants[0] ? (
        <section class="overflow-hidden text-gray-700 ">
          <div class="container px-6 py-2 mx-auto lg:pt-12 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
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
         
        </section>
        
      ) : (

        <div>
        </div>

      )}
      <HowitWorks/>
       < Reviews/>
       <About/>
    </div>
  );
}