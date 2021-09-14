import { Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import YuhangLee from "./AboutPages/YuhangLee";
import AboutMe from "./AboutPages/AboutMe";
import MainNavigation from "./AboutPages/MainNavigation";
import ChuChengSitu from "./AboutPages/ChuChengSitu";
import BenM from "./AboutPages/BenM";
import ChaseAlexander from "./AboutPages/ChaseAlexander";

function App() {
  return (
    <div className="App">
      <MainNavigation className="main" />
      <Switch>

        <Route path="/" exact={true}>
          <AboutMe className="about" />
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

      </Switch>
    </div>
  );
}

export default App;
