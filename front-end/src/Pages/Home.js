
import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';
import Index from './Index';


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button type="button" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
      <Link to='/signin'>
        <button>Sign In</button>
      </Link>
      <Link to='/signup'>
        <button>Sign Up </button>
      </Link>
      <About />
      <Index />

    </div>
  );
}
