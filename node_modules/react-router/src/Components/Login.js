import React, { Component } from 'react';
import '../App.css'

class Login extends Component
{
    state = {

    }
    render(){
        return(
            <div className="loginPage">
                <h4>Login page</h4>
                <div className="loginContent">
                    <form className="formData">
                        <div className="row">
                            <div className="input-field col offset-s4 s4">
                            <input  id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col offset-s4 s4">
                        <input id="password" type="password" className="validate" />
                        <label for="password">Password</label>
                        </div>
                    </div>
                    
                    </form>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </div>
        )
    }
}

export default Login;