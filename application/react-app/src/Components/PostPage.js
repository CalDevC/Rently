import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Dropdown from './Dropdown';
import styles from '../CSS/Post.module.css';

class PostPage extends Component {
  constructor() {
    super();

    this.equipmentInputRef = React.createRef();
    this.priceInputRef = React.createRef();
    this.depositFeeInputRef = React.createRef();
    this.locationInputRef = React.createRef();
    this.deliveryInputRef = React.createRef();
    this.descriptionInputRef = React.createRef();
    this.categoryInputRef = React.createRef();
    this.penaltyFeeInputRef = React.createRef();
    this.startInputRef = React.createRef();
    this.endInputRef = React.createRef();

    this.submitHandler = this.submitHandler.bind(this);
    this.routeChange = this.routeChange.bind(this);

    this.state = {
      data: {
        status: '',
        msg: '',
      },
    };
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.dateInputRef.props)
    fetch('/api/posts/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: localStorage.getItem('user'),
        category: this.categoryInputRef.state.value,
        equipment: this.equipmentInputRef.value,
        price: this.priceInputRef.value,
        depositFee: this.depositFeeInputRef.value,
        penalty: this.penaltyFeeInputRef.value,
        location: this.locationInputRef.value,
        delivery: this.deliveryInputRef.checked,
        description: this.descriptionInputRef.value,
        start: this.startInputRef.value,
        end: this.endInputRef.value
      }),
    })
      .then((response) => response.text())
      .then((res) => {
        console.log('Response Received: ', res);
        this.setState({ data: res });
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
    return (
      <div>
        <h1 className={styles.create}>Create Your Listing Here.</h1>
        <form onSubmit={this.submitHandler}>
    

          <div className={styles.username}>
            <label htmlFor="Equipment">Equipment Name:</label>
            <input type="text" id="equipment" required ref={(node) => (this.equipmentInputRef = node)}
            />
          </div>

          <div className={styles.username}>
            <Dropdown ref={(node) => (this.categoryInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Price">Rental Price $</label>
            <input type="text" id="price" required ref={(node) => (this.priceInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Deposit">Security Deposit $</label>
            <input type="text" id="deposit" required ref={(node) => (this.depositFeeInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Penalty">Penalty for damages $</label>
            <input type="text" id="penalty" ref={(node) => (this.penaltyFeeInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Location">Pick-up Location:</label>
            <input type="text" id="location" required ref={(node) => (this.locationInputRef = node)}
            />
          </div>

          <div className={styles.username}>
            <label htmlFor="Delivery">Offer Delivery?</label>
            <input type="checkbox" id="delivery" required ref={(node) => (this.deliveryInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Description">Description:</label>
            <input type="text" id="description" required ref={(node) => (this.descriptionInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Description">Description:</label>
            <input type="text" id="description" required ref={(node) => (this.descriptionInputRef = node)} />
          </div>

          <div className={styles.username}>
            <h4>Rental Times</h4>
            <label htmlFor="start">Start Date:</label>
            <input type="text" id="startEnd" required ref={(node) => (this.startInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="end">End Date:</label>
            <input type="text" id="endDate" required ref={(node) => (this.endInputRef = node)} />
          </div>

          <div>
            <button onClick={this.submitHandler}>Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PostPage);
