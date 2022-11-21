import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/NavBar";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Order from "./Pages/Order";
import History from "./Pages/OrderHistory";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/error404" element={<Error />} />
            <Route path="/index" element={<Index />} />
            <Route path="/order" element={<Order />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
