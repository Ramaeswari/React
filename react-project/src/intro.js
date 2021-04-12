import React, { Component } from 'react';
class Intro extends Component
{
    state = {
        firstName: "eswari",
        age: 22,
        address:{
            city: "Rajahmundry",
            state: "AP"   
        }
    }
    
    handClick = () => {
        this.setState({
            firstName: "Rama Eswari",
            age: 23,
            address:{
                city: "Rangampeta",
                state: "Andhra Pradesh"
            }
        })
    }

    render()
    {
        return(
            <div>
                <h3>Name is <b>{this.state.firstName}</b></h3>
                <p><span>Age is {this.state.age} and from {this.state.address.city}, {this.state.address.state}</span></p>
                <button onClick={this.handClick}>Click Me!</button>
            </div>
        )
    }
}
export default Intro;