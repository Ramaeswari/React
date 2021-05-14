import React from 'react';
import './about-styles.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Footer from './Footer';


 const About = () => {
  

  return (
    <div className="aboutMatter ">
        <h3 className="">About Us</h3>
        <img src="https://i.pinimg.com/originals/ea/aa/f2/eaaaf2bbdce3d0dc7126d308949b7d7c.jpg" alt="recipe" width="900px" height="600px" />
        <h5>Food in the south is intrinsically connected to life in the south. It is through eating, sharing, and creating
            food that pleasure is evoked,connectionsare forged, context is offerd, and history is created. Across southern
            states, individual interpretations of food are as varied and compelling as the people who live in our unique cities and towns. Yet 
            <span> We celebrate people, reveal processes, share receipes, and most of all, we have fun.</span></h5>
        <Footer />
    </div>
    
  );
}
export default About;

/* 
    <div className={classes.root}>
    <Avatar className={classes.large}>RZ</Avatar>
  </div>

*/