
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Page/Home";
import About from "./Page/About";
import Food from "./Page/Food";
import FoodKhmer from "./Page/FoodKhmer";
import Khmer from "./Page/Khmer";
import Contact from "./Page/Contact";
import Khmersweet from "./Page/Khmersweet";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Account from "./Page/Account";
import Orders from "./Page/Orders";
import Address from "./Page/Address";
import Settings from "./Page/Settings";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/food" element={<Food />} />
        <Route path="/foodkhmer" element={<FoodKhmer />} />
        <Route path="/khmer" element={<Khmer />} />
        <Route path="/khmersweet" element={<Khmersweet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/address" element={<Address />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
