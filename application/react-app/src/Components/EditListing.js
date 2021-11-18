import { Component } from "react";
import React from "react";

class EditListing extends Component{
    constructor() {
        super();
        this.itemInputRef = React.createRef();
        this.priceInputRef = React.createRef();
        this.penaltyInputRef = React.createRef();
        this.dateInputRef = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
          data: {
            status: "",
            msg: "",
          },
        };
      }
      submitHandler(event) {
        event.preventDefault();
      }
    
        render() {
            return (
              <div>
                <div className="header" id="page_header">
                  <h1>Edit Listing</h1>
                </div>
                <div>
                  <form onSubmit={this.submitHandler}>
                    <div>
                    <label>Edit Item Name:</label>
                    <input
                      type="text"
                      id="input_editName"
                      name="editName"
                    />
                    </div>
                    <div>
                    <label>Edit Item Price:</label>
                    <input
                      type="text"
                      id="input_editPrice"
                      name="editPrice"
                    />
                    </div>
                    <div>
                    <label>Edit Item Description:</label>
                    <input
                      type="text"
                      id="input_editDescription"
                      name="editDescription"
                    />
                    </div>
                    <div>
                    <label>Edit Penalty Fees:</label>
                    <input
                      type="Text"
                      id="input_editPenalty"
                      required
                      name="editPenalty"
                    />
                    </div>
                    <div>
                    <label>Edit Rental Period:</label>
                    <input
                      type="text"
                      id="input_editRentalPeriod"
                      required
                      name="editRentalPeriod"
                    />
                    </div>
                    <button type="submit" id="submit">
                      Edit Listing
                    </button>
                  </form>
                </div>
              </div>
            );
          }
    }
export default EditListing;