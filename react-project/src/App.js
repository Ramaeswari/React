// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import Display from './Display';
class App extends Component
{
  state = {
    personsInfo: [
    {
      fname: "eswari",
      age: 23,
      city: "Rajahmundry"
    },
    {
      fname: "chandini",
      age: 20,
      city: "cherala"
    },
    {
      fname: "sasi",
      age: 22,
      city: "goa"
    },
    {
      fname: "satya",
      age: 22,
      city: "hyd"
    },
    {
      fname: "raziya",
      age: 21,
      city: "vizag"
    }
  ]
  }
  
  render(){
    return(
      <div>
          <Display personsInfo = {this.state.personsInfo}>
          </Display>  
      </div>
    )
  }
}
export default App;


