import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import '../App.css'

const ContactUs = () =>{
    return(
        <div className="container cards">
            <div className="row">
                <div className="col s4">
                    <Card className="cardStyles">
                        <CardContent>
                            <Typography className="cardTitle">
                                <p><b>Location</b></p>
                            </Typography>
                            <Typography>
                                <p>Hyderabad</p>
                                Telagana state
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
                            <Typography><b>987456321</b></Typography>
                            <Typography><p>Contact to this number for any queries</p></Typography>
                            <Button variant="contained" color="secondary">Call Now</Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="col s4">
                    <Card className="cardStyles">
                        <CardContent>
                            <Typography className="cardTitle">
                                <p><b>Email</b></p>
                            </Typography>
                            <Typography><b>abc@xyz.com</b></Typography>
                            <Typography><p>Contact to this mail for any queries</p></Typography>
                            <Button variant="contained" color="secondary">Send Email</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        
        </div>
    )
}
export default ContactUs;