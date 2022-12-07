import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = process.env.REACT_APP_API_URL;
console.log(API);

const Dashboard = () => {
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  let [pastOrders, setPastOrders] = useState([]);

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
      .get(`${API}/users/2/orders`)
      .then((res) => setPastOrders(...res.data.slice(-1)))
      .catch((e) => console.log(e));
  };

  console.log(pastOrders);
  const navigate = useNavigate();
  const location = useLocation();
  const from = "/";
  console.log(auth);
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
      <div className="container mx-auto my-10 p-5 bg-white rounded-xl">
        <div className="grid grid-cols-[400px_minmax(800px,_1fr)_100px]">
          <div className="w-full md:mx-2 ">
            <div className="bg-white p-3 rounded border-t-0 border-yellow-200">
              <div className="">
                <img
                  className="h-auto w-full mx-auto rounded-lg border-[1rem] border-gray-200"
                  src="https://fakeface.rest/face/view/55?gender=female&minimum_age=20&maximum_age=30"
                  alt=""
                />
              </div>
              <h1 className="my-4 text-3xl text-gray-600 font-extrabold font-[Open Sans]">
                {auth.firstName}
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
          <div className="w-full md:w-9/12 mx-2 px-4">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 border-b-4">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="py-2 tracking-wide text-2xl text-gray-600 font-extrabold font-[Open Sans]">
                  About
                </span>
              </div>
              <div className="my-2 text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 text-lg font-semibold font-[Open Sans]">
                      First Name: <br />
                      Piper
                    </div>
                    <div className="px-4 py-2 text-lg text-gray-400 font-semibold font-[Open Sans]">
                      {auth.firstName}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 text-lg font-semibold font-[Open Sans]">
                      Last Name: <br />
                      Williams
                    </div>
                    <div className="px-4 py-2 text-lg text-gray-400 font-semibold font-[Open Sans]">
                      {auth.lastName}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 text-lg font-semibold font-[Open Sans]">
                      Phone Number: <br />
                      718-987-654
                    </div>
                    <div className="px-4 py-2 text-lg text-gray-400 font-semibold font-[Open Sans]">
                      {" "}
                      {auth.phonenumber}
                    </div>
                  </div>
                  <div>
                    {/* <div className="grid grid-cols-2"> */}
                    <div className="px-4 py-2 text-lg font-semibold font-[Open Sans]">
                      Address: <br />
                      529 APT 2F Broadway New York, NY
                    </div>
                    <div className="px-4 py-2 text-lg text-gray-400 font-semibold font-[Open Sans]">
                      {auth.address} {auth.city}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 text-lg font-semibold font-[Open Sans]">
                      Zip: <br />
                      10012
                    </div>
                    <div className="px-4 py-2 text-lg text-gray-400 font-semibold font-[Open Sans]">
                      {auth.zip}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 text-lg font-semibold font-[Open Sans]">
                      Email: <br />
                      pWilliams0735@gmail.com
                    </div>
                    <div className="px-4 py-2 text-lg text-gray-400 font-semibold font-[Open Sans]">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {auth.userName}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button className="block px-4 text-white text-md font-semibold rounded-lg bg-smaksalmon hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Edit Profile Information
              </button>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex flex-row">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 border-b-4">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide text-2xl text-gray-600 font-extrabold font-[Open Sans]">
                      Recent Orders
                    </span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li className="p-2">
                      <div className="text-gray-800 text-lg font-extrabold font-[Open Sans]">
                        {pastOrders.restaurant_name}
                        <button
                          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                          data-modal-toggle="defaultModal"
                        >
                          Toggle modal
                        </button>
                        {/*<!-- Modal toggle -->*/}
                      </div>
                      <div className="text-gray-500 text-md font-bold font-[Open Sans]">
                        {/* Budget ${pastOrders && pastOrders[0].total_cost} */}
                      </div>
                      <div className="text-gray-500 text-md font-semibold font-[Open Sans]">
                        {/* {pastOrders && pastOrders[0].date} */}
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="text-gray-800 text-lg font-extrabold font-[Open Sans]">
                        Cabo Rockville Centre
                      </div>
                      <div className="text-gray-500 text-md font-bold font-[Open Sans]">
                        Budget $100
                      </div>
                      <div className="text-gray-500 text-md font-semibold font-[Open Sans]">
                        Nov 25, 2022
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="my-4"></div>
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex flex-row">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide text-2xl text-gray-600 font-extrabold font-[Open Sans]">
                      Recent Reviews
                    </span>
                  </div>
                  <ul className="w-full list-inside space-y-2">
                    <li className="p-4">
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
                      <div className="text-lg text-gray-600 font-sm font-[Open Sans]">
                        Dec 04, 2022
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="text-gray-800 text-xl font-bold font-[Open Sans]">
                        Definitely a life changing{" "}
                      </div>
                      <div className="text-lg text-gray-400 font-md font-[Open Sans]">
                        Where has BoCaphe been my whole life? I can't believe
                        I've never been to this place wow how amazing was this
                        food omg omg omg.
                      </div>
                      <div className="text-lg text-gray-600 font-sm font-[Open Sans]">
                        Dec 04, 2022
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="my-4"></div>
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide text-2xl text-gray-600 font-extrabold font-[Open Sans]">
                  Badges
                </span>
              </div>
              <div className="grid grid-cols-3">
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/T1PX3tc/bocaphe.png"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    BoCaphe
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/d22pD9z/Boqueria-Soho.png"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    Boqueria Soho
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/zb1fKHF/Jackswifefrieda.png"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
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
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div class="relative w-full h-full max-w-2xl md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
