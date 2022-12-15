import React, { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/SmakLogos/Transparent_Logo2_04.png";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.REACT_APP_API_URL;

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //const [user, setUser] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, username, password, password2 } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_URL}/auth/register`,

        JSON.stringify({ firstname, lastname, username, password, password2 }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      //console.log(response.data)
      //const parseResponse = await response.data.json();
      console.log(JSON.stringify(response?.data));

      if (response?.data.jwtToken) {
        //localStorage.setItem("token", parseRes.jwtToken);
        //setAuth(true);
        //toast.success("Register Successfully");
        setInputs("");
        // Setting the success notification
        toast.success("Register Successfully!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // After validate credentials, proceed to redirect to Dashboard
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2500);
      } else {
        //setAuth(false);
        //toast.error(parseRes);
        toast.error("error", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      }
    } catch (err) {
      console.error(err);
      //console.error(err.message);
      // if (!err?.response) {
      //   setErrMsg('No Server Response');
      // } else if (err.response?.status === 409) {
      //     setErrMsg('Username Taken');
      // } else {
      //     setErrMsg('Registration Failed')
      // }

      errRef.current.focus();
    }
  };

  return (
    <div className="flex-row">
      <ToastContainer />
      <div className="grid grid-cols-2 grid-flow-row auto-rows-max">
      <div className="w-full flex flex-col items-center justify-center px-6 py-[20] mx-auto md:h-full lg:py-0">
          <div className="w-full md:w-3/4 bg-[#edf2f4] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
              <div className="w-full mx-auto absolute -top-[3rem] -right-40">
                <h2 className="py-2 px-4 mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-smakHighlight relative inline-block ">
                  <span className="text-3xl relative text-white font-extrabold font-[Open Sans] text-shadow-md">Sing <b className="text-4xl">Up</b></span>
                </h2>
              </div>
              <form className="space-y-4 md:space-y-4" >
                <div className="grid grid-cols-2 grid-flow-row gap-2">
                  <div className="my-2 ">
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="mt-1 p-3 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-600"
                      placeholder=""
                      ref={userRef}
                      value={firstname}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="my-2 ">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="mt-1 p-3 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-600"
                      placeholder=""
                      value={lastname}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
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
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-600"
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
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-600"
                    placeholder=""
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password2"
                    className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                  >
                    Verify Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-600"
                    placeholder=""
                    value={password2}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-smaksalmon dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={onSubmitForm}
                >
                  Submit
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="/login"
                    className="mx-2 text-smakHighlight font-semibold"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="p-0">
          <div className="h-screen p-0  ">
            <div className="h-full p-[28px] bg-[#ffbe0b] rounded-md text-center">
              <div className="flex-row hidden">
                <span class="p-0 mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-800 relative inline-block">
                  <span class="text-6xl relative text-white font-extrabold font-[Open Sans] italic">
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

export default Register;
