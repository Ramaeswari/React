import React, { Component } from 'react';
import './App.css';
class MouseOver extends Component
{
    state = {
        empId: 501,
        name: "eswari",
        age: 23,
        city: "hyd",
        designation: "Developer"
    };

    render(){
        return(
            <div>
                <h3 onMouseOver={ () =>{
                    this.setState({empId: "eswari"}) 
                }}>{this.state.empId}</h3>                
            </div>
        )
    }
}
export default MouseOver;


