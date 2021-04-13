import React, { Component } from 'react';
import './App.css'
// import {withStyles} from '@material-ui/core/styles';

// const styles = {
//         errMsg: {
//             color: 'red'
//         }
//     };
class AddInfo extends Component
{
    state ={
        name: null,
        dob: null,
        email: null,
        contact: null,
        message: null,
        formErrors: {
            nameError: '',
            dobError: '',
            emailError: '',
            contactError: null,
            messageError: ''
        },
        formValidate: false
    };
    handleOnSumbmit = (e) => {
        e.preventDefault();
        if(this.state.formValidate === true)
        {
            this.props.addInfo(this.state);
        }
        else{
            window.alert('Please Enter All Fields');
        }
    }
    handleOnChange = (e) => {
        e.preventDefault();
        // console.log(e);
        this.validateForm(e.target);
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
    }

    validateForm = (val) => {
        let nameError = this.state.formErrors.nameError;
        let dobError = this.state.formErrors.dobError;
        let emailError = this.state.formErrors.emailError;
        let contactError = this.state.formErrors.contactError;
        let messageError = this.state.formErrors.messageError;
        let formValidate = this.state.formValidate;
        if(val.id === 'name')
        {
            // if(val.value.length < 10 && val.value.length > 0)
            // {
            //     nameError = "Please Enter Name";
            //     formValidate = false;
            // }
            // else{
            //     nameError = '';
            //     formValidate = true;
            // }
            nameError = 
                    val.value.length < 10 && val.value.length > 0 ? "minimum 10 characters required" : ""; 
        }
        if(val.id === 'dob')
        {
            // if(val.value.length < 0)
            // {
            //     dobError = "Please Enter Date of birth";
            //     formValidate = false;
            // }
            // else{
            //     dobError = '';
            //     formValidate = true;
            // }
            dobError = 
                    val.value.length < 0 ? "Date of birth is required" : ""; 
        }
        if(val.id === 'email')
        {
            // if(val.value.length === null)
            // {
            //     emailError = "Please Enter email";
            //     formValidate = false;
            // }
            // else{
            //     emailError = '';
            //     formValidate = true;
            // }
            emailError = 
                    val.value.length === null ? "Email is required" : ""; 
        }
        if(val.id === 'contact')
        {
            // if(val.value.length < 10)
            // {
            //     contactError = "Please Enter correct contact number";
            //     formValidate = false;
            // }
            // else{
            //     contactError = '';
            //     formValidate = true;
            // }
            contactError = 
                    val.value.length < 10  ? "Enter correct contact number" : ""; 
        }
        if(val.id === 'message')
        {
            if(val.value.length < 20)
            {
                messageError = "Please Enter something about yourself";
                formValidate = false;
            }
            else{
                messageError = '';
                formValidate = true;
            }
            // messageError = 
            //         value.length < 20 ? "Something about yourself is required" : ""; 
        }

        
    

        this.setState({
            [val.id]: val.value,
            formErrors: {
                nameError: nameError,
                dobError: dobError,
                emailError: emailError,
                contactError: contactError,
                messageError: messageError
            },
            formValidate: formValidate
        })
        // this.setState({formErrors, [name]: value }, () => console.log(this.state));
    };

    render(){
        const { formErrors } = this.state;
        return(
            <div>
                <form onSubmit={this.handleOnSumbmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={this.handleOnChange} /><br />
                    <p className="errMsg">{this.state.formErrors.nameError}</p>
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" id="dob" name="dob" onChange={this.handleOnChange} /><br />
                    <p className="errMsg">{this.state.formErrors.dobError}</p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={this.handleOnChange} /><br />
                    <p className="errMsg">{this.state.formErrors.emailError}</p>
                    <label htmlFor="contact">Contact Number</label>
                    <input type="tel" id="contact" name="contact" onChange={this.handleOnChange} /><br />
                    <p className="errMsg">{this.state.formErrors.contactError}</p>
                    <label htmlFor="name">Tell me about urself</label>
                    <textarea id="message" name="message" onChange={this.handleOnChange} /><br />
                    <p className="errMsg">{this.state.formErrors.messageError}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddInfo;