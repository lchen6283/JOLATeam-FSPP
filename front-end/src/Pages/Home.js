import React from "react";
// import About from "./About";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up </button>
      </Link>
      {/* <About /> */}
    </div>
  );
}
