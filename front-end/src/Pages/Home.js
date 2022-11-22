import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products`);
  }


  return (
    <div className="h-full bg-yellow-200">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className=" font-extrabold text-black sm:text-4xl">
                <span className="block  text-gray-500 text-4xl md:text-6xl italic my-20 py-0 leading-0">
                  <b className="px-4 py-2 mt-2 text-4xl md:text-6xl bg-orange-500 text-white no-italic rounded-md shadow">Hungry?</b>
                </span>
                <span className="block text-4xl md:text-6xl text-gray-600">
                  Let's <b className="text-orange-500">SMAAAK!</b>
                </span>
            </h2>
            <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
              Welcome to the world's most extensize and advanced E-commerce platform.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                    <button 
                      onClick={() => handleClick()}
                      type="button" 
                      className="py-3 px-6 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Go to Products
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}