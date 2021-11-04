import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

class Categories extends Component{
    render(){
        return(
            <div>
                <div className="header" id="page_header">
                    <h1>Select By Catagory</h1> 
                </div>
                <div>
                    <Link to="/indoorEquipment"><h2>Indoor Equipment</h2></Link>
                    <Link to="/fitness"><button>Fitness</button></Link>
                    <Link to="/interiorDesign"><button>Interior Design</button></Link>

                    <Link to="/outdoorEquipment"><h2>Outdoor Equipment</h2></Link>
                    <Link to="/camping"><button>Camping</button></Link>
                    <Link to="/hiking"><button>hiking</button></Link>

                    <Link to="/tools"><h2>Tools</h2></Link>
                    <Link to="/automotive"><button>Automotive</button></Link>
                    <Link to="/general"><button>General</button></Link>
                </div>
            </div>
        );
    }
}
export default Categories;