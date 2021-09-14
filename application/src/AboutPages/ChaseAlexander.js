import React from "react";
import classes from "./profiles.module.css";

function ChaseAlexander(){
    return(
        <div>
            <h1>Chase Alexander</h1>
            <p className={classes.p}>Role: Team lead, full stack support</p>
            <div className={classes.circleImgContainer}>
                <img src={require("../images/Chase.jpg").default} width={200} alt="" />
            </div>
        </div> 
    );
}

export default ChaseAlexander;