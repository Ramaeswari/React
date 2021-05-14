// import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useState, useEffect, Component } from 'react';
// import { Component } from 'react';
import axios from 'axios';
import RecipesData from './Components/Home';
import Modal from './Components/ModalPart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ModalPart from './Components/ModalPart';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Feedback from './Components/Feedback';
import Home from './Components/Home';
import Footer from './Components/Footer';

class App extends Component{
  state ={
    name: "eswari",
    
  }
  render(){
  return(
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
      
      {/*<RecipesData />*/}
      <Route exact path="/" component={Home} />
      
      <Route path="/about" component={About} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/feedback" component={Feedback} />
      <Route exact path = "/recipes/:id" component={ModalPart } ></Route>
      {/*<Footer />*/}
      {/*<ModalPart />*/}
      {/*<BrowserRouter>
            <Switch>
                <Route exact path="/" component={Modal} />
            </Switch>
      </BrowserRouter>*/}
    </div>
    </BrowserRouter>
  )
}
}

export default App;
/*
https://api.edamam.com/search?
        q=${search}&app_id=${APP_ID}&app_key=${APP_KEY} 
        */