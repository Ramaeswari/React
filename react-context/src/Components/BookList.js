import {React, useContext} from 'react';
import Book from './Book';
import { BookContext } from './BookContext';

export const BookList = () =>{
    const [books, setBooks] = useContext(BookContext);
   
    return(
        <div>
        <h3>Books List</h3>
        {books.map(book =>{
            return(
                <Book name={book.name} price={book.price} YOB={book.YOB} key={book.id} />
            )
        })}
        </div>
    )
}

/*
{books.map(book =>{
                return(
                    <Book name={book.name} price={book.price} YOB={book.YOB} key={book.id} />
                )
            })}

*/ 