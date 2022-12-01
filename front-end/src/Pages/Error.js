import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Error() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home`);
  }

  return (
    <div className="h-full bg-white">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-5xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block text-gray-900 text-8xl mt-10 mb-10">
                  404
                </span>
                <span className="block text-gray-500">
                  Page requested not found 
                </span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                    <button 
                      onClick={() => handleClick()}
                      type="button" 
                      className="py-3 px-6 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-3xl "
                    >
                      Back to home
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}