import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import '../App.css';


class SignUp extends Component
{
    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        errors: {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: ''
        },
        formValidate: false
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.formValidate === true)
        {
            // this.props.signUp(this.state);
            alert("Successfully created your account")
        }
        else
        {
            window.alert("Please enter all fields");
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.validateForm(e.target);
        this.setState({
            [e.target.id]: e.target.value,
            
        })
    }
    validateForm = (val) => {
        let firstNameError = this.state.errors.firstNameError;
        let lastNameError = this.state.errors.lastNameError;
        let emailError = this.state.errors.emailError;
        let passwordError = this.state.errors.passwordError;
        let confirmPasswordError = this.state.errors.confirmPasswordError;
        let formValidate = this.state.formValidate;
        if(val.id === 'firstName')
        {
            if((val.value).trim() === "")
            {
                firstNameError = "FirstName is required";
                formValidate = false;
            }
            else
            {
                firstNameError = "";
                // formValidate = true;
            }
        }
        if(val.id === 'lastName')
        {
            
            if(val.value.length === 0)
            {
                lastNameError = "LastName is required";
                formValidate = false;
            }
            else{
                lastNameError = "";
                // formValidate = true;
            }
        }
        if(val.id === 'email')
        {
            if(val.value.length === 0)
            {
                emailError = "Email is required";
                formValidate = false;
            }
            else{
                emailError ="";
                // formValidate = true;
            }
        }
        if(val.id === 'password')
        {
            
            if(val.value.length === 0)
            {
                passwordError = "Password is required";
                formValidate = false;
            }
            else if(val.value.length < 6)
            {
                passwordError = "Password contains atleast 6 characters";
                formValidate = false;
            }
            else{
                passwordError ="";
                // formValidate = true;
            }
        }
        if(val.id === 'confirmPassword')
        {   
            console.log(val.value.password);
            console.log(val.value);
            if(val.value.length === 0)
            {
                confirmPasswordError = "Confirm password is required"
                formValidate = false;
            }
            else if(val.value !== this.state.password)
            {
                console.log(val.value);
                console.log(this.state.password)
                confirmPasswordError = "Password doesn't match";
                formValidate = false;
                // formValidate = true;
            }
            else if(val.value === this.state.password){
                confirmPasswordError = "Password Matched";
                formValidate = true;
            }

        }

        this.setState({
            [val.id]: val.value,
            errors: {
                firstNameError : firstNameError,
                lastNameError: lastNameError,
                emailError: emailError,
                passwordError: passwordError,
                confirmPasswordError: confirmPasswordError
            },
            formValidate: formValidate
        })
    }
 
    render(){
        // const {errors} = this.state.errors;
        return(
            <div className="row signUpPage">
            <div className="container align-center">
                <h4 className="heading">Sign Up Form</h4>
                <form className="col s12 form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s5">
                            <input id="firstName" type="text" name="firstName" className="validate" onChange={this.handleChange}  />
                            <label htmlFor="firstName">First Name</label>
                        </div>                        
                    </div>
                    <p className="errMsg">{this.state.errors.firstNameError}</p>
                    <div className="row">
                        <div className="input-field col s5">

                            <input id="lastName" type="text" name="lastName" className="validate" onChange={this.handleChange}  />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <p className="errMsg">{this.state.errors.lastNameError}</p>
                    <div className="row">
                        <div className="input-field col s5">
                            <input id="email" type="email" name="email" className="validate" onChange={this.handleChange}  />
                            <label htmlFor="email">Email</label>
                        </div>                     
                    </div>
                    <p className="errMsg">{this.state.errors.emailError}</p>
                    <div className="row">
                        <div className="input-field col s5">
                            <input id="password" type="password" name="password" className="validate" onChange={this.handleChange}  />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <p className="errMsg">{this.state.errors.passwordError}</p>
                    <div className="row">
                        <div className="input-field col s5">
                            <input id="confirmPassword" type="password" name="confirmPassword" className="validate" onChange={this.handleChange}  />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    </div>  
                    <p className="errMsg">{this.state.errors.confirmPasswordError}</p>
                    <div className="row">
                        <Button type="submit" color="primary" variant="contained" className="submitBtn">Submit</Button>
                        <Button variant="contained" type="submit" className="cancelBtn">Cancel</Button>                            
                    </div>
                 
            </form>
        </div>
        </div> 
        )
    }
}
export default SignUp;

/*
<div className="row signUpPaage">
                <div className="container align-center">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="firstName" type="text" name="firstName" className="validate" onChange={this.handleChange}></input>
                                <label htmlFor="firstName">First Name</label>
                            </div>                        
                        </div>
                        <p className="errMsg">{this.state.errors.firstNameError}</p>
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="lastName" type="text" name="lastName" className="validate" onChange={this.handleChange}></input>
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                        </div>
                        <p className="errMsg">{this.state.errors.lastNameError}</p>
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="email" type="email" name="email" className="validate" onChange={this.handleChange}></input>
                                <label htmlFor="email">Email</label>
                            </div>                     
                        </div>
                        <p className="errMsg">{this.state.errors.emailError}</p>
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="password" type="password" name="password" className="validate" onChange={this.handleChange}></input>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <p className="errMsg">{this.state.errors.passwordError}</p>
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="confirmPassword" type="password" name="confirmPassword" className="validate" onChange={this.handleChange}></input>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>
                        </div>  
                        <p className="errMsg">{this.state.errors.confirmPasswordError}</p>
                        <div className="row">
                            <Button color="primary" variant="contained" mr={5}>Submit</Button>
                            <Button variant="contained">Cancel</Button>
                        </div>                 
                </form>
            </div>
            </div>
*/

/*
<div>
                <form onSubmit={this.handleSumbmit}>
                    <label htmlFor="firstName">FirstName</label>
                    <input className="col s4" type="text" id="firstName" name="firstName" onChange={this.handleChange} required/><br />
                    <p className="errMsg">{this.state.errors.firstNameError}</p>
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" id="lastName" name="lastName" onChange={this.handleChange} required /><br />
                    <p className="errMsg">{this.state.errors.lastNameError}</p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={this.handleChange} required /><br />
                    <p className="errMsg">{this.state.errors.emailError}</p>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} requird /><br />
                    <p className="errMsg">{this.state.errors.passwordError}</p>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} requird /><br />
                    <p className="errMsg">{this.state.errors.confirmPasswordError}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
*/