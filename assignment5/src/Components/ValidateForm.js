import React, { Component } from 'react';
import SignUp from './SignUp';

class ValidateForm extends Component
{
    state ={
        displayData:[]
    }
    signUp = (props) => {
        let displayData = [...this.state.displayData, props];
        console.log(displayData);
        this.setState({
          displayData: displayData
        })
      }
      render(){
          return(
              <div>
                <SignUp signUp={this.signUp} />
              </div>
          )
      }
}
export default ValidateForm;