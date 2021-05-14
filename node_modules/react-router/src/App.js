import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home';
import Instructors from './Components/Instructors';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Students from './Components/Students';

class App extends Component
{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/instructors" component={Instructors} />
          <Route path="/students" component={Students} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;