import React, { useState, useEffect, Navigate, redirect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Layout from './Components/Layout';
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Unauthorized from './Components/Unauthorized';
import RequireAuth from './Components/RequireAuth';

// PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Order from "./Pages/Order";
import PaymentFinalized from "./Pages/PaymentFinalized";
import PaymentInfo from "./Pages/PaymentInfo";
import Survey from "./Pages/Survey";

const ROLES = {
  'User': 2,
  'Admin': 1
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/error404" element={<Error />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* PROTECTED ROUTES */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]}  />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/paymentdone" element={<PaymentFinalized />} />
          <Route path="/paymentInfo" element={<PaymentInfo />} />
          <Route path="/survey" element={<Survey />} />
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;