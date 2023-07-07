import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fruits from "./Fruits";
import Shirts from "./Shirts";
import Vegetables from "./Vegetables";
import "./Home.css"


const Home = () => {
  useEffect(() => {
    console.log("hello");
  }, 100);

  return (
    <div>
    <h1>Home Page</h1>
		  <div  className="home">
      
        <Link  style={{textDecoration: 'none'}} to="/fruits">Fruits</Link>

        <Link style={{textDecoration: 'none'}} to="/shirts">Shirts</Link>

        <Link style={{textDecoration: 'none'}} to="/vegetables">Vegetables</Link>
      </div>
    </div>
  );
};

export default Home;
