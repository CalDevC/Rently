import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Dropdown from './Dropdown';

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
    console.log(this.categoryInputRef.state.value)
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
        location: this.locationInputRef.value,
        delivery: this.deliveryInputRef.value,
        description: this.descriptionInputRef.value
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
        <h1>Rently</h1>

        <div>
          <label htmlFor="Equipment">Equipment Name:</label>
          <input type="text" id="equipment" required ref={(node) => (this.equipmentInputRef = node)}
          />
        </div>

        <div>
          <Dropdown ref={(node) => (this.categoryInputRef = node)} />
        </div>

        <div>
          <label htmlFor="Price">Price:</label>
          <input type="text" id="price" required ref={(node) => (this.priceInputRef = node)} />
        </div>

        <div>
          <label htmlFor="Deposit">Deposit Fee:</label>
          <input type="text" id="deposit" required ref={(node) => (this.depositFeeInputRef = node)} />
        </div>

        <div>
          <label htmlFor="Location">Location:</label>
          <input type="text" id="location" required ref={(node) => (this.locationInputRef = node)}
          />
        </div>

        <div>
          <label htmlFor="Delivery">Offer Delivery:</label>
          <input type="text" id="delivery" required ref={(node) => (this.deliveryInputRef = node)} />
        </div>

        <div>
          <label htmlFor="Description">Description:</label>
          <input type="text" id="description" required ref={(node) => (this.descriptionInputRef = node)} />
        </div>

        <div>
          <button onClick={this.submitHandler}>Post</button>
        </div>
      </form>
    );
  }
}

export default withRouter(PostPage);
