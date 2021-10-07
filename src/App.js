import React from "react";
import { Switch, Route } from "react-router-dom";

import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";
import NavBar from "./components/nav-bar";
import Home from "./components/Home";
import "h8k-components";
import "./App.css";

const title = "Navigation Bar";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
      </Switch>
    </div>
  );
}

export default App;
