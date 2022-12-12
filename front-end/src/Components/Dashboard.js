import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaRegCopy } from "@react-icons/all-files/fa/FaRegCopy";
import { FaFileSignature } from "@react-icons/all-files/fa/FaFileSignature";
import { RiShieldStarLine } from "@react-icons/all-files/ri/RiShieldStarLine";
import OrderSelect from "./OrderSelect";

import "react-toastify/dist/ReactToastify.css";

const API = process.env.REACT_APP_API_URL;

const Dashboard = () => {
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();

  //
  let [pastOrders, setPastOrders] = useState([]);
  let id = auth.data ? auth.data.id : "2";
  useEffect(() => {
    getOrders();

    const importFlowbiteFunc = function (flowbitePathStr) {
      const flowbiteScriptEl = document.createElement("script");
      flowbiteScriptEl.setAttribute("src", flowbitePathStr);
      document.body.appendChild(flowbiteScriptEl);
    };
    importFlowbiteFunc("https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"); // here goes your path to a local flowbite.js you want to import
  }, []);
  const getOrders = async () => {
    await axios
      .get(`${API}/users/${id}/orders`)
      .then((res) => {
        let newestFirst = res.data.reverse();
        setPastOrders(newestFirst);
      })
      .catch((e) => console.log(e));
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = "/";
  const logout = async (e) => {
    e.preventDefault();
    try {
      setAuth({});

      toast.success("Logout successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      // After validate credentials, proceed to redirect to /
      setTimeout(() => {
        navigate("/");
      }, 1100);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col flex-auto bg-smakorange">
      <div className="container mx-auto my-10 p-8 bg-white rounded-xl">
        <div className="grid grid-cols-[400px_minmax(800px,_1fr)_100px]">
          <div className="col-span-1">
            <div className="bg-white p-0 lg:mr-4">
              <div className="">
                <img
                  className="h-auto w-full mx-auto rounded-lg border-[12px] border-gray-200"
                  src="https://fakeface.rest/face/view/55?gender=female&minimum_age=20&maximum_age=30"
                  alt=""
                />
              </div>
              <h1 className="my-4 text-3xl text-gray-600 font-extrabold font-[Open Sans]">
                {auth.data ? auth.data.firstname : "Piper"}
              </h1>
              <div className="py-4 ml-2 ">
                <h3 className="text-gray-600 font-2xl leading-6 font-bold font-[Open Sans]">
                  Newbie
                </h3>
              </div>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3 font-bold font-[Open Sans]">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-md font-bold font-[Open Sans]">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3 font-bold font-[Open Sans]">
                  <span>Most Recent SMAK:</span>
                  <span className="ml-auto">Nov 07, 2022</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-white p-4 shadow-lg rounded-md border-gray-200 border-2">
              {/* H E A D E R */}
              <div className="flex flex-row p-2 font-semibold text-gray-900 border-b-2 bg-smakHighlight rounded-lg">
                <FaUser className="w-6 h-6 py-0 px-0 my-1 mx-2 fill-white border-0 rounded-sm" />
                <span className="py-0 tracking-wide text-xl text-white font-bold leading-8 font-[Open Sans]">
                  About
                </span>
              </div>
              <div className="my-2 text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="flex flex-row my-2">
                    <div className="px-4 py-2 text-lg font-bold text-gray-800 font-[Open Sans]">
                      First Name:
                    </div>
                    <div className="grow px-4 py-2 text-lg text-right text-gray-400 font-semibold font-[Open Sans]">
                      {auth.data ? auth.data.firstname : "Piper"}
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="px-4 py-2 text-lg font-bold text-gray-800 font-[Open Sans]">
                      Last Name:
                    </div>
                    <div className="grow px-4 py-2 text-lg text-right text-gray-400 font-semibold font-[Open Sans]">
                      {auth.data ? auth.data.lastname : "Williams"}
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="px-4 py-2 text-lg font-bold text-gray-800 font-[Open Sans]">
                      Phone Number:
                    </div>
                    <div className="grow px-4 py-2 text-lg text-right text-gray-400 font-semibold font-[Open Sans]">
                      {auth.data ? auth.data.phonenumber : "(718)-987-654"}
                    </div>
                  </div>
                  <div className="flex flex-row  my-2">
                    {/* <div className="grid grid-cols-2"> */}
                    <div className="px-4 py-2 text-lg font-bold text-gray-800 font-[Open Sans]">
                      Address:
                    </div>
                    <div className="grow px-4 py-2 text-lg text-right text-gray-400 font-semibold font-[Open Sans]">
                      {auth.data
                        ? `${auth.data.address} ${auth.data.city}`
                        : "529 Broadway Apt 2F, New York, New York"}
                    </div>
                  </div>
                  <div className="flex flex-row  my-2">
                    <div className="px-4 py-2 text-lg font-bold text-gray-800 font-[Open Sans]">
                      Zip:
                    </div>
                    <div className="grow px-4 py-2 text-lg text-right text-gray-400 font-semibold font-[Open Sans]">
                      {auth.data ? auth.data.zip : "10012"}
                    </div>
                  </div>
                  <div className="flex flex-row  my-2">
                    <div className="px-4 py-2 text-lg font-bold text-gray-800  font-[Open Sans]">
                      Email:
                    </div>
                    <div className="grow px-4 py-2 text-lg text-right text-gray-400 font-semibold font-[Open Sans]">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {auth.data
                          ? auth.data.username
                          : "pWilliams0735@gmail.com"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button className="block px-4 text-white text-md font-semibold rounded-lg bg-gray-600 hover:bg-[#ce4257] focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Edit Profile Information
              </button>
            </div>
            <div className="my-8"></div>
            <div className="bg-white p-4 shadow-lg rounded-md border-gray-200 border-2">
              {/* H E A D E R */}
              <div className="flex flex-row p-2 font-semibold text-gray-900 border-b-2 bg-smakHighlight rounded-lg">
                <FaRegCopy className="w-6 h-6 py-0 px-0 my-1 mx-2 fill-white border-0 rounded-sm" />
                <span className="py-0 tracking-wide text-xl text-white font-bold leading-8 font-[Open Sans]">
                  Orders History
                </span>
              </div>
              <OrderSelect pastOrders={pastOrders} />
              {/*
            <div className="w-full flex-row">
              <ul className="list-inside space-y-2">
                <li className="p-6">
                  <div className="text-gray-800 text-lg font-extrabold font-[Open Sans]">
                    Jack's Wife Frieda
                  </div>
                  <div className="text-gray-500 text-md font-bold font-[Open Sans]">
                    Budget $150
                  </div>
                  <div className="text-gray-500 text-md font-semibold font-[Open Sans]">
                    Dec 07, 2022
                  </div>
                  <button
                    className="block py-2 px-6 text-white text-md font-semibold rounded-lg bg-smaksalmon hover:bg-[#ce4257] focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs my-4"
                    type="button"
                    data-modal-toggle="defaultModal"
                  >
                    View Details
                  </button>
                 
                </li>
              </ul>
            </div>*/}
            </div>
            <div className="my-8"></div>
            <div className="bg-white p-4 shadow-lg rounded-md border-gray-200 border-2">
              {/* H E A D E R */}
              <div className="flex flex-row p-2 font-semibold text-gray-900 border-b-2 bg-smakHighlight rounded-lg">
                <FaFileSignature className="w-6 h-6 py-0 px-0 my-1 mx-2 fill-white border-0 rounded-sm" />
                <span className="py-0 tracking-wide text-xl text-white font-bold leading-8 font-[Open Sans]">
                  Reviews History
                </span>
              </div>
              <div className="flex flex-row">
                <ul className="w-full list-inside space-y-2">
                  <li className="p-6">
                    <div className="text-gray-800 text-xl font-bold font-[Open Sans]">
                      Great experience!
                    </div>
                    <div className="text-lg text-gray-400 font-md font-[Open Sans]">
                      I can't believe how great Boqueria Soho was, wow I am
                      absolutely amazed by the food quality. SMAK sent me
                      amazing patatas bravas, and probably one of the best
                      paellas I've ever had. To think I was gonna get the same
                      ol' stuff again. Thank god I found SMAK.
                    </div>
                    <div className="text-lg text-gray-600 font-bold font-[Open Sans]">
                      Dec 04, 2022
                    </div>
                  </li>
                  <li className="p-6">
                    <div className="text-gray-800 text-xl font-bold font-[Open Sans]">
                      Definitely a life changing{" "}
                    </div>
                    <div className="text-lg text-gray-400 font-md font-[Open Sans]">
                      Where has BoCaphe been my whole life? I can't believe I've
                      never been to this place wow how amazing was this food omg
                      omg omg.
                    </div>
                    <div className="text-lg text-gray-600 font-bold font-[Open Sans]">
                      Dec 04, 2022
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-8"></div>
            <div className="g-white p-4 shadow-lg rounded-md border-gray-200 border-2">
              {/* H E A D E R */}
              <div className="flex flex-row p-2 font-semibold text-gray-900 border-b-2 bg-smakHighlight rounded-lg">
                <RiShieldStarLine className="w-6 h-6 py-0 px-0 my-1 mx-2 fill-white border-0 rounded-sm" />
                <span className="py-0 tracking-wide text-xl text-white font-bold leading-8 font-[Open Sans]">
                  User Badges (Beta)
                </span>
              </div>

              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"></div>
              <div className="grid grid-cols-3">
                <div className="p-4 text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/T1PX3tc/bocaphe.png"
                    alt=""
                  />
                  <a href="#" className="block my-4 text-main-color font-bold">
                    BoCaphe
                  </a>
                </div>
                <div className="p-4 text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/d22pD9z/Boqueria-Soho.png"
                    alt=""
                  />
                  <a href="#" className="block my-4 text-main-color font-bold">
                    Boqueria Soho
                  </a>
                </div>
                <div className="p-4 text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/zb1fKHF/Jackswifefrieda.png"
                    alt=""
                  />
                  <a href="#" className="block my-4 text-main-color font-bold">
                    Jack's Wife Frieda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  M O D A L */}
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Jack's Wife Frieda Order
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <div className="flex flex-wrap justify-center">
                  <h2 className=" py-4 text-2xl text-smaksalmon font-bold font-[Open Sans]">
                    Restaurant Name :{" "}
                    <b className=" text-gray-400 font-md font-[Open Sans]">
                      Jacks Wife Frieda
                    </b>
                  </h2>
                  <img
                    src="https://s3-media4.fl.yelpcdn.com/bphoto/I_OqttO9HwtbYaPZ_azAsw/o.jpg"
                    className="h-96 rounded-lg border-[1rem] border-gray-200"
                    alt="..."
                  />
                </div>
              </div>
              <p className="text-xl text-gray-600 font-bold font-[Open Sans]">
                Delivery Address :{" "}
                <b className=" text-gray-400 font-medium font-[Open Sans]">
                  529 Broadway Apt 2F, New York, New York
                </b>
              </p>
              <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <li className="my-1 text-xl text-gray-600 font-bold font-[Open Sans]">
                  Appetizer :{" "}
                  <b className=" text-gray-400 font-medium font-[Open Sans]">
                    Vegetarian Mezze Platter
                  </b>
                </li>
                <li className="my-1 text-xl text-gray-600 font-bold font-[Open Sans]">
                  Appetizer :{" "}
                  <b className=" text-gray-400 font-medium font-[Open Sans]">
                    Mediterranean Tomato Bites
                  </b>
                </li>
                <li className="my-1 text-xl text-gray-600 font-bold font-[Open Sans]">
                  Entree :{" "}
                  <b className=" text-gray-400 font-medium font-[Open Sans]">
                    Roast Lamb Rack
                  </b>
                </li>
                <li className="my-1 text-xl text-gray-600 font-bold font-[Open Sans]">
                  Entree :{" "}
                  <b className=" text-gray-400 font-medium font-[Open Sans]">
                    Baked Chicken Thighs
                  </b>
                </li>
                <li className="my-1 text-xl text-gray-600 font-bold font-[Open Sans]">
                  Dessert :{" "}
                  <b className=" text-gray-400 font-medium font-[Open Sans]">
                    Kremna Rezina
                  </b>
                </li>
              </ul>
              <p className="py-2 text-2xl text-smaksalmon font-bold font-[Open Sans]">
                Total Cost : $ 150
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              {/* <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
