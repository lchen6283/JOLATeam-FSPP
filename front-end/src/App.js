import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Components/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/NavBar";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import History from "./Pages/OrderHistory";
import PaymentFinalized from "./Pages/PaymentFinalized";
import Budget from "./Pages/Budget";
import PaymentInfo from "./Pages/PaymentInfo";
import Survey from "./Pages/Survey";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function App() {
  let [restaurants, setRestaurants] = useState([]);
  let [city, setCity] = useState("");
  const handleClick = async () => {
    if (!city) {
      alert("You must enter a city");
      return;
    }
    setRestaurants([]);
    let param = city.label.split(",").splice(0, 2).join("");
    console.log(param);
    await axios
      .get(`${API}/yelp/${param}`)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  restaurants={restaurants}
                  city={city}
                  setCity={setCity}
                  handleClick={handleClick}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
            <Route path="/index" element={<Index />} />
            <Route path="/order" element={<Order />} />
            <Route path="/history" element={<History />} />
            <Route path="/pickabudget" element={<Budget />} />
            <Route path="/paymentdone" element={<PaymentFinalized />} />
            <Route path="/paymentInfo" element={<PaymentInfo />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
