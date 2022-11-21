import React from "react";
import { Link } from "react-router-dom";

import Transparent_Logo_05 from "../assets/SmakLogos/Transparent_Logo_05.png";

export default function NavBar() {
  return (
    <nav>
      <img src={Transparent_Logo_05} alt="" width="200" />
      <h1>NavBar</h1>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/orders">Orders</Link>
      </h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
      <h1>
        <Link to="/contact">Contact</Link>
      </h1>
      <h1>
        <Link to="/order">Order</Link>
      </h1>
      <h1>
        <Link to="/history">OrderHistory</Link>
      </h1>
    </nav>
  );
}
