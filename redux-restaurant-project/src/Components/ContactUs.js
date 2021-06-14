import React, { Component } from 'react';
import './contactUs-styles.css';
import Footer from './Footer';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import ContactNotification from './ContactNotification'
import RecipesData from './RecipesData';
import DisplayData from './DisplayData';

class  ContactUs extends Component {
    state ={
        name:"",
        email: "",
        rating: "",
        comments: "",
        errors: {
            nameError: null,
            emailError: null,
            ratingError: null,
            commentsError: null,
        },
        formValidate: false
    }
    handleChange = e =>{
        
        this.validateForm(e.target);
        
    };
    
    handleSubmit = e =>{
        e.preventDefault();
        // if(this.state.formValidate === true){
        //     // alert("Thanks for your feedback");
        //     // <Alert color="promary">This is a success alert — check it out!</Alert>
        //     // this.callingAlert;
        // }
        // else{
        //     // alert("Enter all fields, if you give feedback");
        // }
    }
    
    validateForm = (val) =>{
        let nameError = this.state.errors.nameError;
        let emailError = this.state.errors.emailError;
        let ratingError = this.state.errors.ratingError;
        let commentsError = this.state.errors.commentsError;
        let formValidate = this.state.formValidate;
        if(val.id === 'name'){
            console.log(val.id)    
            if(val.value.length === 0 )
            {
                nameError = "Name is required";
                formValidate = false;
            }
            else{
                nameError = "";
                formValidate = false;
            }
        }
        if(val.id === 'email'){
            if(val.value.length === 0 )
            {
                emailError = "Email is required";
                formValidate = false;
            }
            else{
                emailError = "";
                formValidate = false;
            }
        }
        if(val.id === 'comments'){
            if(val.value.length === 0 )
            {
                commentsError = "comments is required";
                formValidate = false;
            }
            else{
                commentsError = "";
                formValidate = true;
            }
        }
        this.setState({
            [val.id]: val.value,
            errors: {
                nameError: nameError,
                emailError: emailError,
                ratingError: ratingError,
                commentsError: commentsError,
            },
            formValidate: formValidate,
        })
    }
    
    render(){
    return(
        <section className="contact">
            <div className="content">
                <h2>Get in touch</h2>
                <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
            </div>
            <div className="container contact-container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                        <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Ground Floor, ANR Center<br />Road no 1, Plot No.6-3,249 <br />
                            Banjara Hills, Hyderabad<br /> Telagana 500034</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                        <i class="far fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>hellorecipesZone@gmail.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                        <i class="fas fa-phone-alt"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>9874563210</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <h2>Send Message</h2>
                    <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-6 inputLine">
                        <input type="text" name="name" class="form-control " id="name" onChange={this.handleChange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-6 inputLine">
                        <input type="email" name="email" class="form-control" id="inputEmail"   onChange={this.handleChange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2"><label className="col-form-label textAreaLabel">Message</label></div>
                    <div class="col-sm-6 textBox">
                    <div class="form-check">
                        <textarea class="form-check-input" name="comments" id="comments" onChange={this.handleChange} />
                        
                    </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                    <ContactNotification formValidate={this.state.formValidate} />
                    </div>
                </div>
            </div>
            </div>
            {/*<RecipesData />*/}
            {/*<DisplayData />*/}
            <Footer />
        </section>
    )
    }

}
export default ContactUs;


/*

<div className="  contactData">
            <h2>Get in touch</h2>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
            <div className="container cards">
            <div className="row">
                <div className="col s4">
                    <Card className="cardStyles">
                        <CardContent>
                            <Typography className="cardTitle">
                                <p><b>Location</b></p>
                            </Typography>
                            <Typography>
                                <p>RecipesZone</p>
                                <p>Hyderabad</p>
                                <p>Telagana state</p>
                                <p>India</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className="col s4">
                <Card className="cardStyles">
                <CardContent>
                    <Typography className="cardTitle">
                        <p><b>Contact Number</b></p>
                    </Typography>
                    <Typography><p><b>9874563210</b></p>
                    <p>Contact to this number for any queries</p></Typography>
                    <button className="btn-primary">Call Now</button>
                </CardContent>
            </Card>
                </div>
                <div className="col s4">
                    <Card className="cardStyles">
                        <CardContent>
                            <Typography className="cardTitle">
                                <p><b>Email</b></p>
                            </Typography>
                            <Typography><p><b>abc@xyz.com</b></p>
                            <p>Contact to this mail for any queries</p></Typography>
                            <button className="btn-primary">Send Email</button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        
        </div>
        <Footer />
        </div>
        
    )



*/


/*

<div className="col-lg-4">                        
                        <div className="card email-container ">
                            <h4 id="title">Email</h4>
                            <p className="data">hello@recipeszone.com</p>
                       </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card contact-container ">                                                            
                            <h4 className="title">Call Us</h4>
                            <p className="data">+91 7896541230</p>                            
                        </div>  
                    </div>

*/