import React from "react";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaConciergeBell } from "@react-icons/all-files/fa/FaConciergeBell";
import { FaFileInvoiceDollar } from "@react-icons/all-files/fa/FaFileInvoiceDollar";
import { GiFullPizza } from "@react-icons/all-files/gi/GiFullPizza";

export default function HowitWorks() {
  return (
    <div className="w-full p-2 px-10 md:mt-0 lg:flex-shrink-0">
      <div className="p-7 text-smakorange text-4xl md:text-6xl -translate-y-40 text-center ">
        How Does It Work?
      </div>
      <div className="container flex px-6 py-2 lg:pt-12 lg:px-32">
        <div className="p-2 rounded-md shadow">
          <GoLocation className="scale-[6] fill-smakorange mx-auto -translate-y-20" />
          <h4 className="text-xl text-smakHighlight text-center font-bold">
            Search Location
          </h4>

          <p>Type in your location where your food will be delivered.</p>
        </div>
        <div className="p-2 rounded-md shadow">
          <FaConciergeBell className="scale-[6] fill-smakorange mx-auto -translate-y-20" />
          <h4 className="text-xl text-smakHighlight text-center font-bold">
            Get Match
          </h4>
          <p>Take our quiz or Let us make that choice for you!</p>
        </div>
        <div className="p-2 rounded-md shadow">
          <FaFileInvoiceDollar className="scale-[6] fill-smakorange mx-auto -translate-y-20" />
          <h4 className="text-xl text-smakHighlight text-center font-bold">
            Pay advanced
          </h4>
          <p>It's quick. safe, and simple</p>
        </div>
        <div className="p-2 rounded-md shadow">
          <GiFullPizza className="scale-[6] fill-smakorange mx-auto -translate-y-20 " />
          <h4 className="text-xl text-smakHighlight text-center font-bold">
            Enjoy Meals
          </h4>
          <p>Food is made and delivered to your home</p>
        </div>
      </div>
    </div>
  );
}
