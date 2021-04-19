import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    <li> <Link to="/students">Students</Link></li>
                    <li><Link to="/login">Login</Link></li>
                  
                </ul>
          
               
                
            </div>
        </nav>
    )
}
export default Navbar;


// <li>Home</li>                  
//                     <li>Instructors</li>                  
//                     <li>Students</li>                  
//                     <li>Login</li>