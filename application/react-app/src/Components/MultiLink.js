import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styles from '../CSS/MultiLink.module.css';

//A Link that has a list of subcomponents

class MultiLink extends Component {

  render() {
    return (
      <div className={styles.bigLink}>
        <div className={styles.bigCat}>
          <Link to={this.props.link}>
            <h2 className={styles.smallLink}>{this.props.title}</h2>
          </Link>
        </div>
        <div className={styles.smallCat}>
          {this.props.subLinks}
        </div>
      </div>
    );
  }
}

export default MultiLink;