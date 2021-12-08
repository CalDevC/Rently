import { React, Component } from 'react';
import Card from './Card';
import styles from '../CSS/Categoeries.module.css';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getCategoryInfo();
  }

  getCategoryInfo() {
    //Get category from url
    var url = window.location.href;
    let category = /Categories\/(.+)/.exec(url)[1].replace(/%20/g, ' ');
    console.log('category: ' + category);

    fetch(`/api/categories/${category}`)
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({ posts: [jsonRes] });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  //Currently displays the description but will enentually display Card componenets that show post thumbnails
  generatePostCards() {
    if (this.state.posts[0]) {
      let postList = this.state.posts[0].results;
      let descList = [];
      console.log("POST LIST: ", postList);

      //For each post
      for (let i in postList) {
        let post = postList[i];
        console.log('POST BELOW: ');
        console.log(post);
        descList[i] = (
          <Card
            key={post.Rental_ID}
            title={post.description}
            id={post.Rental_ID}
          />
        );
      }

      console.log(descList);

      return descList;
    }

    return <h5>Loading posts...</h5>

  }

  render() {
    return (
      <div>
        <h1 className={styles.category}>Page Reached</h1>
        {this.generatePostCards()}
      </div>
    );
  }
}

export default Category;
