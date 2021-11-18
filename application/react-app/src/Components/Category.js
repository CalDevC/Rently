import { React, Component } from 'react';

class Category extends Component {

   constructor() {
      super();
      this.state = {
         posts: []
      }
   }

   componentDidMount() {
      this.getCategoryInfo();
   }

   getCategoryInfo() {
      //Get category from url
      var url = window.location.href;
      let category = /Categories\/(.+)/.exec(url)[1].replace('%20', ' ');

      fetch(`/api/categories/${category}`)
         .then((res) => res.json())
         .then((jsonRes) => {
            this.setState({ posts: [jsonRes] });
         })
         .catch((error) => {
            console.error("Error:", error);
         });
   }

   //Currently displays the description but will enentually display Card componenets that show post thumbnails
   generatePostCards() {
      let postList = this.state.posts
      let descList = [];

      //For each post
      for (let i in postList) {
         let post = postList[i];
         descList[i] = <p key={post.results.Equipment_ID}>{post.results.description}</p>;
      }

      console.log(descList);

      return descList;
   }

   render() {
      return (
         <div>
            <h1>Page Reached</h1>
            {this.generatePostCards()}
         </div>
      );
   }

}

export default Category;