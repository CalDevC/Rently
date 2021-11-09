import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

//A Link that has a list of subcomponents
class MultiLink extends Component {

    render(){
      return(
        <div>
          <Link to={this.props.link}>
            <h2>{this.props.title}</h2>
          </Link>
          {this.props.subLinks}
        </div>
      );
    }

}

export default MultiLink;