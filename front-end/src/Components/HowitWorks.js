import React from "react";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaConciergeBell } from "@react-icons/all-files/fa/FaConciergeBell";
import { FaFileInvoiceDollar } from "@react-icons/all-files/fa/FaFileInvoiceDollar";
import { GiFullPizza } from "@react-icons/all-files/gi/GiFullPizza";

export default function HowitWorks() {
  return (
    <div className="w-full py-10 px-0 md:mt-0 bg-white">
      <h2 className="py-8 text-smaksalmon text-4xl md:text-6xl font-extrabold font-[Open Sans] text-center ">
        How Does It Work?
      </h2>
      <div className="flex flex-row p-8">
        <div className="grid grid-cols-4 grid-flow-row auto-rows-max gap-10">
          <div className="py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(244,162,89)] hover:bg-[#F4A259]">
            <GoLocation className="w-full h-32 my-4 fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-4xl text-white text-center font-extrabold font-[Open Sans]">
                Find Nearby<br/>Restaurants
              </h4>
              <p className=" text-xl text-white text-center font-semibold">
                Set your location</p>
            </div>
          </div>
          <div className="py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(244,162,89)] hover:bg-[#F4A259]">
            <FaConciergeBell className="w-full h-32 my-4 fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-4xl text-white text-center font-extrabold font-[Open Sans]">
                Get <br/>Matched
              </h4>
              <p className=" text-xl text-white text-center font-semibold">
                Take our quiz, skip the menu and find your new favorite restaurant.
              </p>
            </div>
          </div>
          <div className="py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(244,162,89)] hover:bg-[#F4A259]">
            <FaFileInvoiceDollar className="w-full h-32 my-4 fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-4xl text-white text-center font-extrabold font-[Open Sans]">
                Checkout <br/> Made Easy
              </h4>
              <p className=" text-xl text-white text-center font-semibold">
                It's quick. safe, and simple
              </p>
            </div>
          </div>
          <div className="py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(244,162,89)] hover:bg-[#F4A259]">
            <GiFullPizza className="w-full h-32 my-4 fill-white " />
            <div className="flex-row">
              <h4 className="my-4 text-4xl text-white text-center font-extrabold font-[Open Sans]">
                Enjoy Your<br/> Meal!
              </h4>
              <p className=" text-xl text-white text-center font-semibold">
                Food is made and delivered to your home.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
