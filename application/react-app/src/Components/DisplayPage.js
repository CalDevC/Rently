import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../CSS/DisplayPage.module.css';

class DisplayPage extends Component {
  constructor() {
    super();
    this.postID = '';
    this.submitHandler = this.submitHandler.bind(this);
    this.routeChange = this.routeChange.bind(this);
    this.state = {
      postInfo: {},
    };
  }

  componentDidMount() {
    this.getPostInfo();
  }

  getPostInfo() {
    var url = window.location.href;
    this.postID = /posts\/(.+)/.exec(url)[1];

    fetch(`/api/posts/${this.postID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postID: this.postID,
      }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({ postInfo: jsonRes });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  submitHandler(event) {
    event.preventDefault();
    var userID = this.state.postInfo.RegisteredUser_ID;

    fetch(`/api/account/getEmailInfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: userID,
      }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        let email = jsonRes.email;
        let title = this.state.postInfo.title;
        window.open(`mailto:${email}?subject=Rently | Inquiry about ${title} &body=Hi, is this currently available to be rented?`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  routeChange() {
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    let post = this.state.postInfo;
    return (
      <div>
        <h1>List An Equipment</h1>

        <form onSubmit={this.submitHandler}>
          <div className={styles.name}>
            <label htmlFor="Equipment">Equipment Name:</label>
            <p>{post.title}</p>
          </div>
          <div className={styles.price}>
            <label htmlFor="Price">Price:</label>
            <p>{post.Price}</p>
          </div>
          <div className={styles.days}>
            <label htmlFor="Day">Days:</label>
            <p>{post.startDay + ' to ' + post.endDay}</p>
          </div>
          <div className={styles.deposit}>
            <label htmlFor="Deposit">Security Deposit:</label>
            <p>{post.Price}</p>
          </div>
          <div className={styles.damage}>
            <label htmlFor="Damage">Price for damage:</label>
            <p>{post.Price}</p>
          </div>
          <div className={styles.location}>
            <label htmlFor="Location">Location:</label>
            <p></p>
          </div>
          <div className={styles.button}>
            <button onClick={this.submitHandler}>Message</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(DisplayPage);
