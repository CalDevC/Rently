import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Dropdown from './Dropdown';
import styles from '../CSS/Post.module.css';

class PostPage extends Component {
  constructor() {
    super();
    this.categoryInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.routeChange = this.routeChange.bind(this);
    this.fileSelected = this.fileSelected.bind(this);

    this.state = {
      status: '',
      msg: '',
      equipment: null,
      image: null,
      price: null,
      deposit: null,
      penalty: null,
      location: null,
      delivery: 0,
      description: null,
      startDate: null,
      endDate: null
    };
  }

  async submitHandler(event) {
    event.preventDefault();
    const formData = new FormData();
    let data = this.state;

    for (let key in data) {
      formData.append(key, data[key]);
    }

    formData.append('category', this.categoryInputRef.state.value);
    formData.append('user', localStorage.getItem('user'));

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    await fetch('/api/posts/addPost', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.text())
      .then((res) => {
        console.log('Response Received: ', res);
        this.setState({ status: res.status, msg: res.msg });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  inputChangeHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  fileSelected(event) {
    const file = event.target.files[0];
    this.setState({ image: file })
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
            <input type="text" id="equipment" onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.dropdown}>
            <Dropdown className={styles.dropdown} ref={(node) => (this.categoryInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Photo">Upload Photo:</label>
            <input type="file" accept="image/*" id="image" onChange={this.fileSelected} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Price">Rental Price $</label>
            <input type="text" id="price" onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Deposit">Security Deposit $</label>
            <input type="text" id="deposit" onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Penalty">Penalty for damages $</label>
            <input type="text" id="penalty" onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Location">Pick-up Location:</label>
            <input type="text" id="location" onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Delivery">Offer Delivery?</label>
            <input type="checkbox" id="delivery" onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Description">Description:</label>
            <input type="text" id="description" onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.username}>
            <h4>Rental Availability</h4>
            <label htmlFor="start">Start Date:</label>
            <input type="text" id="startDate" placeholder='mm/dd/yyyy' onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.username}>
            <label htmlFor="end">End Date:</label>
            <input type="text" id="endDate" placeholder='mm/dd/yyyy' onChange={this.inputChangeHandler} />
          </div>

          <div className={styles.buttons}>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PostPage);
