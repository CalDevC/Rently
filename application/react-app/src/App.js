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
      <HomePage />
      {/* ===== ABOUT PAGES ===== */
      /* <MainNavigation className="main" />
      <Switch>
        <Route path="/" exact={true}>
        </Route>

        <Route path="/YuHang-Lee">
          <YuhangLee className="yuhang" />
        </Route>

        <Route path="/ChuCheng-Situ">
          <ChuChengSitu />
        </Route>

        <Route path="/Benjamin-McCullough">
          <BenM />
        </Route>

        <Route path="/Chase-Alexander">
          <ChaseAlexander />
        </Route>

        <Route path="/Lauren-Barer">
          <LaurenBarer />
        </Route>
        <Route path="/HomePage">
          <HomePage />
        </Route>
      </Switch> */}
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
