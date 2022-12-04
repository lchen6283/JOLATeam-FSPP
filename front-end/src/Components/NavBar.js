import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SmakLogos/Transparent_Logo_01.png";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { auth } = useAuth();
  console.log("auth:", auth);
  return (
    <header>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          aria-current="page"
          className="flex items-center"
        >
          <img src={logo} class=" h-[4rem] mr-3 " alt="SMAK Logo" />
          <span class="self-center text-xl font-bold font-[Open Sans] whitespace-nowrap text-white dark:text-white">SMAK</span>
        </Link>
        <div class="flex items-center md:order-2">
          <Link
            to="/login" 
            class="mr-8 text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold font-[Open Sans]"
            >
            Login
          </Link>
          <Link
            to="/register" 
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold font-[Open Sans]"
            >
            Register
          </Link>
            {/* <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" src="" alt="user photo"/>
            </button> */}
            {/* <!-- DROPDOWN MENU --> */}
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">first + last name</span>
                <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">username</span>
              </div>
              <ul class="py-1" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul class="flex flex-col p-4 mt-4 border text-lg border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            </li>
            <Link
              to="/"
              aria-current="page"
              className="block py-2 pl-3 pr-4 text-xl text-white bg-blue-700 font-extrabold font-['Open Sans'] rounded md:bg-transparent md:text-smaksalmon md:p-0 dark:text-white"
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
