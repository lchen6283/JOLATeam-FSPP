import React from "react";

export default function SignIn() {
  return (
    <div className="md:container md:mx-auto">
      <div className="grid grid-cols-2 grid-flow-row auto-rows-max">
        
        <div className="">
          <div class="text-center  ">
            <h1 class="font-bold text-xl my-4">Sign In</h1>
          </div>
          <div class="md:w-1/2 mx-auto">
            <form action="#">
            <div class="col-span-3 sm:col-span-2">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                placeholder=""
              />
            </div> 
            <div class="col-span-3 sm:col-span-2">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="text" 
                name="password" 
                id="password" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                placeholder=""
              />  
            </div> 
            <div class="my-2 col-span-3 sm:col-span-2">
              <button 
                type="button" 
                class="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Submit
              </button>
            </div> 
            </form>
          </div>
        </div>
        <div className="">
          

        </div>
      </div>
    </div>
  );
}
