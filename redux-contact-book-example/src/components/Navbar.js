import React from 'react';
import { Link } from 'react-router-dom';
import './nav-styles.css';
// import 'bootstrap'
const Navbar = () => {
    return(
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">Contact Book</Link>
                <div>
                    <Link to="/contacts/add"><button className="btn btn-light ml-auto">Create Contact</button></Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;