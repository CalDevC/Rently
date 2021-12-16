import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../CSS/DisplayPage.module.css';

//The page where the user views post details

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

  //Get post info on initial page load
  componentDidMount() {
    this.getPostInfo();
  }

  //Get the information relating to the post
  getPostInfo() {
    //Get post id from url
    var url = window.location.href;
    this.postID = /posts\/(.+)/.exec(url)[1];

    //Fetch post details
    fetch(`/api/posts/${this.postID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postID: this.postID, //Send post ID to use for db search
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

  //Executed when 'Rental' button is clicked
  submitHandler(event) {
    event.preventDefault();
    //Get user ID
    var userID = this.state.postInfo.RegisteredUser_ID;

    //Fetch the users details for messaging
    fetch(`/api/account/getInfo`, {
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

        //Open an email to the poster and fill in subject, recipient, and template message
        window.open(`mailto:${email}?subject=Rently | Inquiry about ${title} &body=Hi, is this currently available to be rented?`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  //Reroute to home page
  routeChange() {
    let path = `/`;
    this.props.history.push(path);
  }

  //Convert date from DB format to mm/dd/yyyy
  convertDate(date) {
    if (date) {
      date = date.toString().split("T")[0].split("-");
      return date[1] + "/" + date[2] + "/" + date[0];
    }

  }

  render() {
    let post = this.state.postInfo;
    return (
      <div>
        <h1>{post.title}</h1>

        <form onSubmit={this.submitHandler}>
          {post.imgURL && post.imgURL !== '' ? <img src={post.imgURL} alt={post.title} /> : ''}

          <div className={styles.price}>
            <p>{post.description}</p>
          </div>

          <div className={styles.price}>
            <label htmlFor="Price">Price:</label>
            <p>${post.Price}/day</p>
          </div>

          <div className={styles.days}>
            <label htmlFor="Day">Available from:</label>
            <p>{this.convertDate(post.startDay) + ' to ' + this.convertDate(post.endDay)}</p>
          </div>

          <div className={styles.deposit}>
            <label htmlFor="Deposit">Security Deposit:</label>
            <p>${post.Price}</p>
          </div>

          <div className={styles.damage}>
            <label htmlFor="Damage">Penalty for damages:</label>
            <p>${post.Price}</p>
          </div>

          <div className={styles.location}>
            <label htmlFor="Location">Location: </label>
            <p>{post.location}</p>
          </div>

          <div className={styles.button}>
            <button onClick={this.submitHandler}>Message the Owner!</button>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(DisplayPage);
