import React from "react";
import classes from "./BenM.module.css";
// import BensPic from "./images/BensPic.jpeg";

const BenM = () => {
  return (
    <div>
      <h1 className={classes.h1}>Name : Benjamin McCullough</h1>
      <p className={classes.p}>Role In Team 1: GitHub Master</p>
      {/* <img src={BensPic} width="300" height="300" /> */}
    </div>
  );
};

export default BenM;
