import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

import { toast } from "react-toastify";

const Dashboard = () => {
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const logout = async e => {
    e.preventDefault();
    try {
      setAuth({});
      navigate('/home');
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (
    <div className="h-full bg-yellow-200">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className=" font-extrabold text-black sm:text-4xl">
          <span className="block  text-gray-500 text-4xl md:text-6xl my-20 py-0 leading-0">
            <b className="px-4 py-2 mt-2 text-4xl md:text-6xl bg-orange-500 text-white no-italic rounded-md shadow">
              Dashboard
            </b>
          </span>
          <span className="block text-4xl md:text-6xl text-gray-600">
            Welcome back <b className="text-orange-600 uppercase">{auth?.firstName} </b>
          </span>
        </h2>
        <div className="mt-12 inline-flex rounded-md shadow">
        <button
          onClick={e => logout(e)}
          type="button"
          className="py-3 px-6 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-3xl "
        >
          Logout
        </button>
        </div>
    </div>
    </div>
  );
};

export default Dashboard;
