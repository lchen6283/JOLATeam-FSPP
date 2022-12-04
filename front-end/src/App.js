import React, { useState, useEffect, Navigate, redirect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import 'flowbite'
//import "flowbite/dist/flowbite.css"
//import "flowbite-react"

// here goes your path to a local flowbite.js you want to import

// COMPONENTS
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Unauthorized from "./Components/Unauthorized";
import RequireAuth from "./Components/RequireAuth";

// PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Order from "./Pages/Order";
import PaymentFinalized from "./Pages/PaymentFinalized";

import PaymentInfo from "./Pages/PaymentInfo";
import Survey from "./Pages/Survey";
import OrderConfirmation from "./Pages/OrderConfirmation";

const importFlowbiteFunc = function(flowbitePathStr)
{
    const flowbiteScriptEl = document.createElement('script')
    flowbiteScriptEl.setAttribute(
        'src', flowbitePathStr
    )
    document.body.appendChild(flowbiteScriptEl)
}
importFlowbiteFunc('flowbite.js');

const ROLES = {
  User: 2,
  Admin: 1,
};

function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="error404" element={<Error />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="survey" element={<Survey />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="survey/orderconfirmation"
          element={<OrderConfirmation />}
        />

        {/* PROTECTED ROUTES */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="orders" element={<Order />} />
          <Route path="paymentdone" element={<PaymentFinalized />} />
          <Route path="paymentInfo" element={<PaymentInfo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
