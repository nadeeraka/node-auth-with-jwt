import React, { Fragment } from "react";
import "./App.css";
import "bootswatch/dist/superhero/bootstrap.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
