import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";

export default function Home() {
  const [city, setCity] = useState("Rego Park");

  return (
    <div>
      <h1>Home</h1>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up </button>
      </Link>
      <Search setCity={setCity} />
    </div>
  );
}
