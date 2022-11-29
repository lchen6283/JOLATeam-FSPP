import React, { useState, useEffect, Navigate, redirect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import Reviews from "./Components/Reviews";

// PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Order from "./Pages/Order";
import History from "./Pages/OrderHistory";
import PaymentFinalized from "./Pages/PaymentFinalized";
import Budget from "./Pages/Budget";
import PaymentInfo from "./Pages/PaymentInfo";
import axios from "axios";

// TOASTIFY
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
//toast.configure();

function App() {
  //
  const API_URL = process.env.REACT_APP_API_URL;


  const checkAuthenticated = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/verify`, {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();
      console.log(parseRes)
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  console.log('isAuthenticated:', isAuthenticated)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route
              path="/login"
              element={!isAuthenticated ? (
                  //<Navigate to="/dashboard" />
                  <Login setAuth={setAuth} replace />
                ) : (
                  <Navigate to="/dashboard" />
                  
                )
              }
            />
            <Route
              path="/register"
              element={!isAuthenticated ? (
                  <Register setAuth={setAuth} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? (
                  <Dashboard setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/error404" element={<Error />} />
            <Route path="/order" element={<Order />} />
            <Route path="/history" element={<History />} />
            <Route path="/pickabudget" element={<Budget />} />
            <Route path="/paymentdone" element={<PaymentFinalized />} />
            <Route path="/testimonials" element={<Reviews />} />
            <Route path="/paymentInfo" element={<PaymentInfo />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;