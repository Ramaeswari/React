import {React, useContext} from 'react';
import './nav-styles.css';
import { BookContext } from './BookContext';

export const Navbar = () =>{
    const [books, setBooks] = useContext(BookContext);
    return(
        <nav className="nav-container">
            <h3>Book Store</h3>
            <p>List of Books: {books.length}</p>
        </nav>
    )
}
