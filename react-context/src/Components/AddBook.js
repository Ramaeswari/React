import {React, useContext, useState} from 'react';
import { BookContext } from './BookContext';
import './form-styles.css';

const AddBook = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [YOB, setYOB] = useState('');
    const [books, setBooks] = useContext(BookContext);

    const updateBookName = (e) =>{
        setName(e.target.value)
    };
    const updateBookPrice = (e) =>{
        setPrice(e.target.value)
    };
    const updateBookYOB = (e) =>{
        setYOB(e.target.value)
    };
    const AddBook = (e) =>{
        e.preventDefault();
        setBooks((prevBooks) =>[
            ...prevBooks,
            {name: name, price: `$${price}`, YOB: YOB},
        ])
        setName('');
        setPrice('');
        setYOB('');
    }
    return(
        <form onSubmit={AddBook}>
            <input type="text" name="name" value={name} placeholder="Enter book name" onChange={updateBookName}/>
            <input type="text" name="price" value={price} placeholder="Enter book price" onChange={updateBookPrice} />
            <input type="text" name="YOB" value={YOB} placeholder="Enter year of book publication" onChange={updateBookYOB} />
            <button>Submit</button>
        </form>
    )
}
export default AddBook;