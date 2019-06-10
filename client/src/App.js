import React from "react";
import "./App.css";
import "bootswatch/dist/superhero/bootstrap.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Hero />

        <p>jjj</p>
      </div>
    </div>
  );
}

export default App;
