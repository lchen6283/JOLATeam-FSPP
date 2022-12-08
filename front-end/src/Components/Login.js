import React, { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/SmakLogos/Transparent_Logo_01.png";

const API_URL = process.env.REACT_APP_API_URL;
const LOGIN_URL = `${API_URL}/auth/login`;

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const userRef = useRef();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          //withCredentials: false,
        }
      );
      console.log(JSON.stringify(response?.data));

      //const jwtToken = JSON.stringify(response?.data.jwtToken);
      const jwtToken = response?.data.jwtToken;
      const user = response?.data;
      //
      const firstName = response?.data?.firstName;
      const lastName = response?.data?.lastName;
      const userName = response?.data?.userName;
      const userRole = response?.data?.userRole;

      // Setting the auth state
      setAuth( user );
      setInputs("");
      // Setting the success notification
      toast.success("Login Successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      // After validate credentials, proceed to redirect to Dashboard
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1050);
    } catch (err) {
      console.error(err);
      // Setting up the error notification
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      userRef.current.focus();
    }
  };

  return (
    <div className="w-full ">
      <ToastContainer />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="w-full flex flex-col items-center justify-center px-6 py-[20] mx-auto md:h-full lg:py-0">
          <div className="w-full md:w-3/4 bg-[#edf2f4] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
              <div className="w-full mx-auto absolute -top-[3rem] -right-40">
                <h2 className="py-2 px-4 mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-smakHighlight relative inline-block ">
                  <span className="text-3xl relative text-white font-extrabold font-[Open Sans] text-shadow-md">Sing <b className="text-4xl">In</b></span>
                </h2>
              </div>
              <form className="pt-4 space-y-4 md:space-y-4" >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 text-md text-gray-600"
                    placeholder=""
                    ref={userRef}
                    value={username}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 text-md text-gray-600 font-bold"
                    placeholder=""
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <a
                    href="#"
                    className="text-sm font-medium text-gray-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a> */}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-md px-5 py-2.5 text-center dark:bg-smaksalmon dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={onSubmitForm}
                >
                  Submit
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?
                  <Link
                    to="/register"
                    className="mx-2 text-smakHighlight font-semibold"
                  >
                    Sign up!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="p-0">
          <div className="h-screen p-0 bg-[url('https://images.unsplash.com/photo-1652862730784-bb2a6e862514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80')] bg-opacity-75 ">
            <div className="h-full p-[28px] bg-[#ffbe0b] bg-opacity-50 rounded-md text-center">
              <div className="flex-row hidden">
                <span className="p-0 mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-800 relative inline-block">
                  <span className="text-6xl relative text-white font-extrabold font-[Open Sans] italic">
                    Not sure what to eat <b className="text-8xl">today?</b>
                  </span>
                </span>
              </div>
              <div className="flex-row items-center text-center mt-[30%] ">
                <h2 className=" font-bold leading-tight tracking-tight text-white text-6xl dark:text-white">
                  <b className="block mt-8 text-8xl font-extrabold font-[Open Sans] ">
                    SMAK
                  </b>
                  Find a new flavor!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;