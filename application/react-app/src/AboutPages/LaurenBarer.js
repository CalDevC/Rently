import React from "react";
import classes from "./profiles.module.css";

function LaurenBarer(){
    return(
        <div>
            <h1 className={classes.h1}>Name : Lauren Barer</h1>
            <p className={classes.p}>Role: Scrum Master, Cloud</p>
                <img src="images/Lauren.jpg" width={200} alt="" />
            </div>
    );
}

export default LaurenBarer;
