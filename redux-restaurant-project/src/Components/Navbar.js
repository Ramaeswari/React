import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home'
import '../App.css'

const Navbar = () =>{
    return(
        <nav class="nav-wrapper blue">
            <div className="container">
                <a href="/" className="left brand ">RecipesZone</a>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contactUs"><li>Contact Us</li></Link>
                    <Link to="/feedback"><li>Feedback</li></Link>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;