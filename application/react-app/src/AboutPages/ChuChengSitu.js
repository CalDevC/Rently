import React from "react";
import classes from "./profiles.module.css";

function ChuChengSitu() {
  return (
    <div>
      <h1 className={classes.h1}>Name : Chu Cheng Situ</h1>
      <p className={classes.p}>Role : Backend Lead</p>
      <img src="images/Chu.jpg" width={200} alt="" />
    </div>
  );
}

export default ChuChengSitu;
