import React, { Component } from 'react';
import AddInfo from './AddInfo'
import Display from './Display';
import CardTemplate from './CardTemplate';

class App extends Component
{
  state = {
    displayData: []
  };

  addInfo = (props) => {
    let displayData = [...this.state.displayData, props];
    this.setState({
      displayData: displayData
    })
  }

  render(){
    return(
      <div>
      <AddInfo addInfo = {this.addInfo} />
      <Display displayData = {this.state.displayData} />
      
      </div>
    )
  }
}

export default App;
