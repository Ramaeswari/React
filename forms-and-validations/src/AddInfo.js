import React, { Component } from 'react';
import './App.css'

const emailRegx = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[@.])");
const nameRegx = RegExp("^[A-Z]*$");

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
         
            if(nameRegx.test(val.value))
            {
                nameError = "";
            }
            else{
                nameError = "Please enter correct format, contains only uppercase letters";
            }
        }
        if(val.id === 'dob')
        {
            
            dobError = 
                    val.value.length === null ? "Date of birth is required" : ""; 
        }
        // if(val.id === 'email')
        // {   
        //     emailError = 
        //             emailRegx.test(val.value) ? "" : "Please enter correct format"; 
        // }
        if(val.id === 'contact')
        {
            contactError = 
                    val.value.length < 10  ? "Enter correct contact number" : ""; 
        }
        if(val.id === 'message')
        {
            if(val.value.length < 20)
            {
                messageError = "Please Enter something about yourself, contians atleast 20 characters";
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
                    <input type="text" id="name" name="name" onChange={this.handleOnChange} required/><br />
                    <p className="errMsg">{this.state.formErrors.nameError}</p>
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" id="dob" name="dob" onChange={this.handleOnChange} required /><br />
                    <p className="errMsg">{this.state.formErrors.dobError}</p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={this.handleOnChange} required /><br />
                    <p className="errMsg">{this.state.formErrors.emailError}</p>
                    <label htmlFor="contact">Contact Number</label>
                    <input type="number" id="contact" name="contact" onChange={this.handleOnChange} requird /><br />
                    <p className="errMsg">{this.state.formErrors.contactError}</p>
                    <label htmlFor="name">Tell me about urself</label>
                    <textarea id="message" name="message" onChange={this.handleOnChange} requird /><br />
                    <p className="errMsg">{this.state.formErrors.messageError}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddInfo;