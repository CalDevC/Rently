import React, { Component } from "react";
import classes from "./profiles.module.css";

class BenM extends Component {
  state = {
    profile: {}
  }

  componentDidMount(){
    fetch('/api/benjamin-mccullough')
    .then(res => res.json())
    .then(res => this.setState({ profile: res}));
  }

  render(){
    return(
      <div>
          <h1>{this.state.profile.name}</h1>
          <p className={classes.p}>Role: {this.state.profile.role}</p>
          <div className={classes.circleImgContainer}>
            
            <img src={this.state.profile.img} width={200} alt="" />
          </div>
      </div>
    );
  }
}
export default BenM;
