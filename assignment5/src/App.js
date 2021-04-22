import React, { Component } from 'react';
import {Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';

class App extends Component
{
  state = {
    displayData: []
  };

  signUp = (props) => {
    let displayData = [...this.state.displayData, props];
    console.log(displayData);
    this.setState({
      displayData: displayData
    })
  }
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navbar />
          {/*<SignUp signUp={this.signUp} />*/}
          <Route exact path="/" component={Home} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/signup" component={SignUp} />
          {/*<SignUp signUp={this.signUp} />*/}
        </div>
      </BrowserRouter>
      
    )
  }
}
export default App;