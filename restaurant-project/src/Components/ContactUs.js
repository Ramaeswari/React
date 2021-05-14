import React, { Component } from 'react';
import './contactUs-styles.css';
import Footer from './Footer';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

class  ContactUs extends Component {

    
    render(){
    return(
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
                    <button className="btn-primary">Send Email</button>
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
    }

}
export default ContactUs;

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