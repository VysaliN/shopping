import React from "react";
import Fruits from "./Fruits";
import Shirts from "./Shirts";
import Vegetables from "./Vegetables";
import Home from "./Home";
import './shopping.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/fruits" element={<Fruits/>} />
          <Route path="/shirts" element={<Shirts/>} />
          <Route path="/vegetables" element={<Vegetables/>} />
          </Routes>
      </Router>
    </div>
  );
};

export default App;
