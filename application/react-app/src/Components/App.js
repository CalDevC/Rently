import { Route, Switch, Link } from "react-router-dom";
import "../CSS/App.css";
import React from "react";
import AboutMe from "./AboutMe";
import MainNav from "./MainNav";
import AboutNav from "./AboutNav"

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div className="App">
      <MainNav className="main" />

      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>

        <Route path="/about" exact={true}>
          <AboutNav />
        </Route>

        <Route path="/YuHang-Lee">
          <AboutNav />
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/ChuCheng-Situ">
          <AboutNav />
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/Benjamin-McCullough">
          <AboutNav />
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/Chase-Alexander">
          <AboutNav />
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/Lauren-Barer">
          <AboutNav />
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/HomePage">
          <HomePage />
        </Route>

        <Route path="/LoginPage" exact={true}>
          <LoginPage className="LoginPage" />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
