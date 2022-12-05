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
        <div className="py-40">
          <div className="text-center  ">
            <h1 className="font-bold text-xl my-4">Sign up</h1>
          </div>
          <div className="md:w-1/2 mx-auto">
            <form>
              <div className="grid grid-cols-2 grid-flow-row gap-2">
                <div className="my-2 ">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder=""
                    ref={userRef}
                    value={firstname}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="my-2 ">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder=""
                    value={lastname}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
              <div className="my-2 col-span-3 sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  value={username}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="my-2 col-span-3 sm:col-span-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="my-2 col-span-3 sm:col-span-2">
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Verify Password
                </label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  value={password2}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="my-2 col-span-3 sm:col-span-2">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-orange-500 py-2 px-4 text-md font-medium leading-4 text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  onClick={onSubmitForm}
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="text-lg mt-4 max-w-md mx-auto text-gray-600">
              Already have an account?
              <Link to="/login" className="mx-2 text-gray font-semibold">
                Sign in!
              </Link>
            </p>
          </div>
        </div>
        <div className="p-0">
          <div className="h-screen p-0 bg-[url('https://images.unsplash.com/photo-1652862730784-bb2a6e862514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80')] bg-opacity-75 ">
            <div className="h-full p-[28px] bg-[#ffbe0b] bg-opacity-50 rounded-md text-center">
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
