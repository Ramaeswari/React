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
    name: "eswari",
    age: 23,
    place: "rajahmundry",
    state: "AP",
    arr: [1, 2, 3]
  };
  render(){
    return(
        <div>
            <Display firstName = {this.state.name} age = {this.state.age} place = {this.state.place} state = {this.state.state} array = {this.state.array} />
        </div>
    )
  }
}
export default App;