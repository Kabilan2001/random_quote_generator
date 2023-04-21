import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./home.js";
import About from "./about.js";


export default function Message() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          
        </Routes>
        <div>
        <h1>SELECT THE PAGES</h1>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          
          </ul>
        </div>
      </Router>
    </div>
  );
}

