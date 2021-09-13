import { Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import YuhangLee from "./AboutMePage/YuhangLee";
import AboutMe from "./AboutMePage/AboutMe";
import MainNavigation from "./AboutMePage/MainNavigation";
import ChuChengSitu from "./AboutMePage/ChuChengSitu";

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
        <Route path="/ChuChengSitu">
          <ChuChengSitu />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
