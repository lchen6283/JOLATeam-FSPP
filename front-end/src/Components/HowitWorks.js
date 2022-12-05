import React from "react";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaConciergeBell } from "@react-icons/all-files/fa/FaConciergeBell";
import { FaFileInvoiceDollar } from "@react-icons/all-files/fa/FaFileInvoiceDollar";
import { GiFullPizza } from "@react-icons/all-files/gi/GiFullPizza";

export default function HowitWorks() {
  return (
    <div className="w-full py-10 px-0 md:mt-0 bg-white">
    <div className="container mx-auto">
      <h2 className="py-8 text-smaksalmon text-4xl md:text-5xl font-extrabold font-[Open Sans] text-center ">
        How Does It Work?
      </h2>
      <div className="flex flex-row p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className=" py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(251,176,45)] hover:bg-[#FBB02D]">
            <GoLocation className="w-full h-32 my-4 fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-3xl text-white text-center font-extrabold font-[Open Sans]">
                Find Nearby<br/>Restaurants
              </h4>
              <p className=" text-xl text-white text-center font-medium">
                Set your location</p>
            </div>
          </div>
          <div className=" py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(251,176,45)] hover:bg-[#FBB02D]">
            <FaConciergeBell className="w-full h-32 my-4 fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-3xl text-white text-center font-extrabold font-[Open Sans]">
                Get <br/>Matched
              </h4>
              <p className=" text-xl text-white text-center font-medium">
                Take our quiz, skip the menu and find your new favorite restaurant.
              </p>
            </div>
          </div>
          <div className=" py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(251,176,45)] hover:bg-[#FBB02D]">
            <FaFileInvoiceDollar className="w-full h-32 my-4 fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-3xl text-white text-center font-extrabold font-[Open Sans]">
                Checkout <br/> Made Easy
              </h4>
              <p className=" text-xl text-white text-center font-medium">
                It's quick. safe, and simple
              </p>
            </div>
          </div>
          <div className=" py-6 px-4 border-gray-400 bg-smaksalmon border-0 py-4 px-4 rounded-3xl items-center text-center shadow-[0_8px_1px_1px_rgb(251,176,45)] hover:bg-[#FBB02D]">
            <GiFullPizza className="w-full h-32 my-4 fill-white " />
            <div className="flex-row">
              <h4 className="my-4 text-3xl text-white text-center font-extrabold font-[Open Sans]">
                Enjoy Your<br/> Meal!
              </h4>
              <p className=" text-xl text-white text-center font-medium">
                Food is made and delivered to your home.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}
