import React, {Component} from 'react';

class UnControlledComponent extends Component
{
    constructor()
    {
        super();
        this.email = React.createRef();
        this.password = React.createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.email.current.value);
        alert("Mail is : "+this.email.current.value + "  " +"Password is : " +this.password.current.value);

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={this.email}/><br /><br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={this.password}/><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UnControlledComponent;