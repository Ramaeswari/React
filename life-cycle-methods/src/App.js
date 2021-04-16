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
import axios from 'axios';

class App extends Component
{
  state = {
    post: {}
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/22').then(response =>{
      console.log(response.data.body);
      this.setState({
        post: response.data
      })
    })
  }

  render(){
    const {post} = this.state;
    return(
      <div>
      <h1>{post.title}</h1>
      {post.body}
      </div>
    )
  }
}
export default App;