import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {

  const API_URL = process.env.REACT_APP_API_URL;

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const { username, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
<div className="flex-row">
      <div className="grid grid-cols-2 grid-flow-row auto-rows-max">
        <div className="py-40">
          <div className="text-center  ">
            <h1 className="font-bold text-xl my-4">Sign In</h1>
          </div>
          <div className="md:w-1/2 mx-auto">
            <form>
            <div className="my-2 col-span-3 sm:col-span-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                placeholder=""
                value={username}
                onChange={e => onChange(e)}
              />
            </div> 
            <div className="my-2 col-span-3 sm:col-span-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                placeholder=""
                value={password}
                onChange={e => onChange(e)}
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
              Doesn't have an account?
              <Link
                to="/signup"
                className="mx-2 text-gray font-semibold"
              >
                Sign up!
            </Link>
            </p>
            
          </div>
        </div>
        <div className="">
          <div>
            
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Login;
