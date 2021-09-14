import React from "react";
import classes from "./YuhangLee.module.css";

function YuhangLee() {
  return (
    <div>
      <h1 className={classes.h1}>Name : Yu Hang Lee</h1>
      <p className={classes.p}>Role : Front End Lead</p>
      <img src={require("../images/Member1.jpg").default} width={200} alt="" />
    </div>
  );
}

export default YuhangLee;
