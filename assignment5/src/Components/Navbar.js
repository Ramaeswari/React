import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper green darken-4">
            <div className="container">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to ='/contactus'>Contact Us</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;