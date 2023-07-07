import React from "react";
import Fruits from "./Fruits";
import Shirts from "./Shirts";
import Vegetables from "./Vegetables";
import Home from "./Home";
import './shopping.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fruits" component={Fruits} />
          <Route path="/shirts" component={Shirts} />
          <Route path="/vegetables" component={Vegetables} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
