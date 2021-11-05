import { Route, Switch, Link } from "react-router-dom";
import "../CSS/App.css";
import React from "react";
import AboutMe from "./AboutMe";
import MainNav from "./MainNav";
import AboutNav from "./AboutNav";

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Registration from "./Registration";
import ProfilePage from "./ProfilePage";
import Categories from "./Categories";

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
          <AboutMe key={window.location.pathname} />
        </Route>

        <Route path="/ChuCheng-Situ">
          <AboutNav />
          <AboutMe key={window.location.pathname} />
        </Route>

        <Route path="/Benjamin-McCullough">
          <AboutNav />
          <AboutMe key={window.location.pathname} />
        </Route>

        <Route path="/Chase-Alexander">
          <AboutNav />
          <AboutMe key={window.location.pathname} />
        </Route>

        <Route path="/Lauren-Barer">
          <AboutNav />
          <AboutMe key={window.location.pathname} />
        </Route>

        <Route path="/HomePage">
          <HomePage />
        </Route>

        <Route path="/LoginPage" exact={true}>
          <LoginPage className="LoginPage" />
        </Route>

        <Route path="/Registration" exact={true}>
          <Registration className="Registration" />
        </Route>
        <Route path="/Profile" exact={true}>
          <ProfilePage className="ProfilePage" />
        </Route>
        <Route path="/Categories" exact={true}>
          <Categories className="Categories" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
