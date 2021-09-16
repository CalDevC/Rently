import React, { Component } from "react";
import classes from "./profiles.module.css";

//In the future we will use this one component for all of th eabout pages

class AboutMe extends Component{
  state = {
    profile: {}
  }

  componentDidMount(){
    //Get name of the profile to retrieve
    var url = window.location.href;
    var urlParts = url.toString().split('/');
    var name = urlParts[urlParts.length - 1];
    
    //retrieve profile
    if(!name){
      name = "";
    }
    fetch('/api/' + name)
    .then(res => res.json())
    .then(res => this.setState({ profile: res }));
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

export default AboutMe;
