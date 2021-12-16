import React, { Component } from 'react';
import classes from '../CSS/profiles.module.css';
import styles from '../CSS/profiles.module.css';

//Component for all about pages
class AboutMe extends Component {
  state = {
    profile: {},
  };

  getMemberInfo() {
    //Get name of the profile to retrieve
    var url = window.location.href;
    var urlParts = url.toString().split('/');
    var name = urlParts[urlParts.length - 1];

    //Set default name
    if (!name) {
      name = '';
    }

    //retrieve profile
    fetch('/api/about/' + name)
      .then((res) => res.json())
      .then((res) => this.setState({ profile: res }));
  }

  //Get info on initial load
  componentDidMount() {
    this.getMemberInfo();
  }

  //Update component when switching people
  componentDidUpdate() {
    this.getMemberInfo();
  }

  render() {
    return (
      <div>
        <h1 className={styles.about}>{this.state.profile.name}</h1>
        <p className={classes.p}>Role: {this.state.profile.role}</p>

        <div>
          <img src={this.state.profile.img} width={200} alt="" />
        </div>
      </div>
    );
  }
}

export default AboutMe;
