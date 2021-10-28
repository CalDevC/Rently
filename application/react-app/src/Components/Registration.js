import { Component } from "react";
import React from "react";

class Registration extends Component{
    constructor() {
        super();
        this.usernameInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(event) {
        event.preventDefault();
        fetch("/api/homepage")
          .then((res) => res.json())
          .then((res) => this.setState({ data: res }));
    }
    render(){
        return(
            <div>
                <div class="header" id="page_header">
                    <h1>Create An Account</h1> 
                </div>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label>Enter a Username</label>
                        <input type="text" id="input_username" required name="username"/>
                        <br />
                        <label>Email</label>
                        <input type="email" id="input_email" required name="email"/>
                        <br />
                        <label>Enter Password</label>
                        <input type="password" id="input_password" required name="password"/>
                        <br />
                        <label>Confirm Password</label>
                        <input type="password" id="input_passwordConfirm" required name="cpassword"/>
                        <br />
                        <label>By clicking here you certify that you are at least 13 years of age.</label>
                        <input type ="checkbox" id="age"required/>
                        <br />
                        <label>By clicking here you agree to the <a href="www.google.com">TOS</a> and the <a href="www.google.com">Privacy Policy</a>.</label>
                        <input type ="checkbox" id="agree" required/>
                        <br />
                        <button type="submit" id="submit">Create Account</button>
                        <button type="cancel" id="cancel">Cancel</button> 
                        <div id ="error"></div>
                        <div id = "success"></div> 
                    </form>
                </div>
            </div>
        
        );
    }

}

export default Registration;