import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setAuth }) => {

  const API_URL = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, username, password, password2 } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { firstname, lastname, username, password, password2 };
      const response = await fetch(`${API_URL}/auth/register`, {
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
        toast.success("Register Successfully");
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
            <h1 className="font-bold text-xl my-4">Sign up</h1>
          </div>
          <div className="md:w-1/2 mx-auto">
            <form >
            <div className="grid grid-cols-2 grid-flow-row gap-2">
              <div className="my-2 ">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First name</label>
                <input 
                  type="text" 
                  name="firstname" 
                  id="firstname" 
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                  placeholder=""
                  value={firstname}
                  onChange={e => onChange(e)}
                />
              </div> 
              <div className="my-2 ">
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last name</label>
                <input 
                  type="text" 
                  name="lastname" 
                  id="lastname" 
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                  placeholder=""
                  value={lastname}
                  onChange={e => onChange(e)}
                />
              </div> 
            </div>
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
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Verify Password</label>
              <input 
                type="password" 
                name="password2" 
                id="password2" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                placeholder=""
                value={password2}
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
              Already have an account?
              <Link
                to="/login"
                className="mx-2 text-gray font-semibold"
              >
                Sign in!
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

    // <Fragment>
    //   <h1 className="mt-5 text-center">Register</h1>
    //   <form onSubmit={onSubmitForm}>
    //     <input
    //       type="text"
    //       name="email"
    //       value={email}
    //       placeholder="email"
    //       onChange={e => onChange(e)}
    //       className="form-control my-3"
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       placeholder="password"
    //       onChange={e => onChange(e)}
    //       className="form-control my-3"
    //     />
    //     <input
    //       type="text"
    //       name="name"
    //       value={name}
    //       placeholder="name"
    //       onChange={e => onChange(e)}
    //       className="form-control my-3"
    //     />
    //     <button className="btn btn-success btn-block">Submit</button>
    //   </form>
    //   <Link to="/login">login</Link>
    // </Fragment>
  );
};

export default Register;
