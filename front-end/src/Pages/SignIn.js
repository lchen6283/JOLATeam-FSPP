
import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';



export default function SignIn() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/register",
    }).then((res) => console.log(res));
  };

  //
  const login = () => {
    console.log('login')

    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: false,
      url: "http://localhost:3345/login",
    }).then(
      (res) => navigate("/dashboard"),
      
    );
  };

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };


  return (
    <div className="flex-row">
      <div className="grid grid-cols-2 grid-flow-row auto-rows-max">
        <div className="py-40">
          <div className="text-center  ">
            <h1 className="font-bold text-xl my-4">Sign In</h1>
          </div>
          <div className="md:w-1/2 mx-auto">
            <form action="#">
            <div className="my-2 col-span-3 sm:col-span-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                placeholder=""
                onChange={(e) => setLoginUsername(e.target.value)}
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
                onChange={(e) => setLoginPassword(e.target.value)}
              />  
            </div> 
            <div className="my-2 col-span-3 sm:col-span-2">
              <button 
                type="button" 
                className="rounded-md border border-gray-300 bg-orange-500 py-2 px-4 text-md font-medium leading-4 text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={login}  
              >
                  Submit
              </button>
            </div> 
            </form>
            <p className="text-lg mt-4 max-w-md mx-auto text-gray-600">
              Don't have an account?
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
            <h1>Get User</h1>
            <button onClick={getUser}>Submit</button>
            {data ? <h1>Welcome Back {data.username}</h1> : null}
          </div>
        </div>
      </div>
    </div>
  );
}