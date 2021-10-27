import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import YuhangLee from "./AboutPages/YuhangLee";
import AboutMe from "./AboutPages/AboutMe";
import MainNavigation from "./AboutPages/MainNavigation";
import ChuChengSitu from "./AboutPages/ChuChengSitu";
import BenM from "./AboutPages/BenM";
import ChaseAlexander from "./AboutPages/ChaseAlexander";
import LaurenBarer from "./AboutPages/LaurenBarer";
import HomePage from "./TestHomePage/HomePage";
import LoginPage from "./Milestone3/LoginPage";

function App() {
  return (
    <div className="App">
      {/* ===== ABOUT PAGES ===== */}
      <MainNavigation className="main" />
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>

        <Route path="/YuHang-Lee">
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/ChuCheng-Situ">
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/Benjamin-McCullough">
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/Chase-Alexander">
          <AboutMe key={window.location.pathname}/>
        </Route>

        <Route path="/Lauren-Barer">
          <AboutMe key={window.location.pathname}/>
        </Route>
        <Route path="/HomePage">
          <HomePage />
        </Route>
      </Switch>
      <nav>
        <ul>
          <li>
            <Link to="/LoginPage">LoginPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/LoginPage" exact={true}>
          <LoginPage className="LoginPage" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
