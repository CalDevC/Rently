import React from "react";
import classes from "./profiles.module.css";

function LaurenBarer(){
    return(
        <div>
            <h1>Lauren Barer</h1>
            <p className={classes.p}>Role: Scrum Master, Cloud</p>
            <div className={classes.circleImgContainer}>
                <img src={require("../images/Lauren.jpg").default} width={200} alt="" />
            </div>
        </div> 
    );
}

export default LaurenBarer;
