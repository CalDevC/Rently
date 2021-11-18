import { Component } from "react";
import React from "react";

import MultiLink from "./MultiLink";
import { Link } from "react-router-dom";

class Categories extends Component {

  constructor(){
    super();
    this.state = {
      categoryInfo: {}
    }
  }

  componentDidMount(){
    this.fetchCategories();
  }

  //Fetch list of categories from db
  fetchCategories(){

    fetch('/api/categories/all')
    .then((res) => res.json() )
    .then((jsonRes) => {
      this.setState({categoryInfo: jsonRes});
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  }

  //Using cateogry list, generates JSX of links and sublinks
  createButtonList(){
    let categoryList = this.state.categoryInfo.categoryList;
    let categoryLinks = [];

    //For every category in the list
    for(let i in categoryList){
      let category = categoryList[i];
      let desc = category.description;
      let pieces = category.description.split('/');

      //If not a subcategory, make a new multiLink
      if(pieces.length === 1){
        categoryLinks[i] = <MultiLink title={desc} link={'Categories/' + desc} subLinks={[]}/>
      }
      else {  //If it is a subcategory
        //Find the category that the suubcategory belongs to
        for(let j in categoryLinks){
          let div = categoryLinks[j];

          //If parent category is found
          if(div.props.title === pieces[0]){

            //Add subLink to subLink list
            let subLinkList = div.props.subLinks;
            subLinkList[subLinkList.length] = (
              <div key={subLinkList.length - 1}>
                <Link to={'Categories/' + desc}> 
                  {pieces[1]} 
                </Link>
                <br />
              </div>
            );
            
            //Replace multiLink with new multiLink tath contains the subcategory
            categoryLinks[j] = <MultiLink key={div.props.link} title={div.props.title} link={div.props.link} subLinks={subLinkList}/>;
          }
        }
      }
    }

    return categoryLinks;
  }

  render() {
    return (
      <div>
        <div className="header" id="page_header">
          <h1>Select By Category</h1>
        </div>
        <div>
          {this.createButtonList()}
        </div>
      </div>
    );
  }
}

export default Categories;