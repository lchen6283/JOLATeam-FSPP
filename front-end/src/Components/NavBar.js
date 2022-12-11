import React, { useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import logo from "../assets/SmakLogos/Transparent_Logo_01.png";
import { MdPerson } from "@react-icons/all-files/md/MdPerson";

export default function NavBar() {
  const { auth } = useContext(AuthContext);
  //const { auth } = useAuth();
  const { setAuth } = useContext(AuthContext);
  const userAuthenticated = sessionStorage.getItem("jwt");

  const navigate = useNavigate();
  const location = useLocation();
  const from = "/";

  // Updating the V-DOM with fb
  const flowbite = () => {
    const importFlowbiteFunc = function (flowbitePathStr) {
      const flowbiteScriptEl = document.createElement("script");
      flowbiteScriptEl.setAttribute("src", flowbitePathStr);
      document.body.appendChild(flowbiteScriptEl);
    };
    importFlowbiteFunc("https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"); // here goes your path to a local flowbite.js you want to import
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      setAuth({});
      sessionStorage.removeItem("jwt");

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
    <header>
      <ToastContainer />
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" aria-current="page" className="flex items-center">
            <img src={logo} className=" h-[4rem] mr-3 " alt="SMAK Logo" />
            <span className="self-center text-xl font-bold font-[Open Sans] whitespace-nowrap text-white dark:text-white">
              SMAK
            </span>
          </Link>

          <div className="flex items-center md:order-2">
            {auth.jwtToken
            ?
            <>
            <button 
              type="button" 
              className="flex mr-3 text-sm bg-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
              id="user-menu-button" 
              aria-expanded="false" 
              data-dropdown-toggle="user-dropdown" 
              data-dropdown-placement="bottom"
              onClick={flowbite}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-400"
                src="https://fakeface.rest/face/view/55?gender=female&minimum_age=20&maximum_age=30"
                alt="User profile"
              />
              <span className="mx-4 text-gray-800 font-bold leading-10">Hello, {auth.data.firstname}!</span>
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block font-semibold text-sm text-gray-900 dark:text-white">
                {auth.data.firstname} {auth.data.lastname}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                {auth.data.username}
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-[Open Sans]"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-[Open Sans]"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="w-full block px-4 py-2 text-left text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-[Open Sans]"
                    onClick={logout}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            </>
            :
            <>
            <Link
              to="/login"
              className="mr-2 text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold font-[Open Sans]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold font-[Open Sans]"
            >
              Register
            </Link>
            </>
            }
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4 border text-lg border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li></li>
              <Link
                to="/"
                aria-current="page"
                className="block py-2 pl-3 pr-4 text-xl text-smaksalmon bg-blue-700 font-extrabold font-['Open Sans'] rounded md:bg-transparent md:text-smaksalmon md:p-0 dark:text-white"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="block py-2 pl-3 pr-4 text-xl text-gray-700 font-bold font-['Open Sans'] rounded hover:bg-smakHighlight md:hover:bg-transparent md:hover:text-smaksalmon md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-xl text-gray-700 font-bold font-['Open Sans'] rounded hover:bg-smakHighlight md:hover:bg-transparent md:hover:text-smaksalmon md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
