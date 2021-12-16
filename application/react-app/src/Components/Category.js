import { React, Component } from 'react';
import Card from './Card';
import styles from '../CSS/Category.module.css';

//Creates and displays cards on a category page

class Category extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      category: ''
    };
  }

  //Get category info on initial load
  componentDidMount() {
    this.getCategoryInfo();
  }

  getCategoryInfo() {
    //Get category name from url
    var url = window.location.href;
    let category = /Categories\/(.+)/.exec(url)[1].replace(/%20/g, ' ');
    this.setState({ category: category });

    //Fetch category posts
    fetch(`/api/categories/${category}`)
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({ posts: [jsonRes] });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  generatePostCards() {
    //If there are posts
    if (this.state.posts[0]) {
      let postList = this.state.posts[0].results;
      let descList = [];

      //For each post
      for (let i in postList) {
        let post = postList[i];
        //Create a card component and add it to the list
        descList[i] = (
          <Card
            key={post.Rental_ID}
            title={post.description}
            imageUrl={post.imgURL}
            id={post.Rental_ID}
          />
        );
      }

      console.log(descList);

      return descList;  //Return list of cards
    }

    return <h5>Loading posts...</h5>  //Display if state hasn't been filled with post list yet

  }

  render() {
    return (
      <div>
        <h1 className={styles.category}>{this.state.category}</h1>
        <div className={styles.grid}>{this.generatePostCards()}</div>
      </div>
    );
  }
}

export default Category;
