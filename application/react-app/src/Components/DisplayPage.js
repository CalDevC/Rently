import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../CSS/DisplayPage.module.css';

class DisplayPage extends Component {
  constructor() {
    super();
    this.equipmentInputRef = React.createRef();
    this.priceInputRef = React.createRef();
    this.depositFeeInputRef = React.createRef();
    this.locationInputRef = React.createRef();
    this.dayInputRef = React.createRef();
    this.damageInputRef = React.createRef();
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

    fetch('/api/account/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equipment: this.equipmentInputRef.value,
        price: this.priceInputRef.value,
        depositFee: this.depositFeeInputRef.value,
        location: this.locationInputRef.value,
        day: this.dayInputRef.value,
        damage: this.damageInputRef.value,
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
      <form onSubmit={this.submitHandler}>
        <h1 className={styles.rently}>Rently</h1>
        <div className={styles.name}>
          <label htmlFor="Equipment">Equipment Name:</label>
          <input
            type="text"
            id="equipment"
            required
            id="title"
            ref={(node) => (this.equipmentInputRef = node)}
          />
        </div>
        <div className={styles.price}>
          <label htmlFor="Price">Price:</label>
          <input
            type="text"
            id="price"
            required
            id="title"
            ref={(node) => (this.priceInputRef = node)}
          />
        </div>
        <div className={styles.days}>
          <label htmlFor="Day">Days:</label>
          <input
            type="text"
            id="day"
            required
            id="title"
            ref={(node) => (this.dayInputRef = node)}
          />
        </div>
        <div className={styles.deposit}>
          <label htmlFor="Deposit">Security Deposit:</label>
          <input
            type="text"
            id="deposit"
            required
            id="title"
            ref={(node) => (this.depositFeeInputRef = node)}
          />
        </div>
        <div className={styles.damage}>
          <label htmlFor="Damage">Price for damage:</label>
          <input
            type="text"
            id="damage"
            required
            id="title"
            ref={(node) => (this.damageInputRef = node)}
          />
        </div>
        <div className={styles.location}>
          <label htmlFor="Location">Location:</label>
          <input
            type="text"
            id="location"
            required
            id="title"
            ref={(node) => (this.locationInputRef = node)}
          />
        </div>
        <div className={styles.button}>
          <button onClick={this.routeChange}>Message</button>
        </div>
      </form>
    );
  }
}

export default withRouter(DisplayPage);
