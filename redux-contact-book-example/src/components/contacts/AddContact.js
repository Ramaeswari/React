import React, { useState } from 'react';
import './styles.css'
import {useDispatch} from 'react-redux';
import { addContact } from '../../actions/ContactActions';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';

const AddContact = () =>{
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] =useState("");
    const [email, setEmail] = useState("");

    const createContact = (e) =>{
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
            
        }
        dispatch(addContact(new_contact));
        history.push("/");
    }

    return(
        <div className=" container card border-0 shadow">
            <div className="card-header">Add a Contact</div>
                <div className="card-body">
                    <form onSubmit={(e) => createContact(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder="Enter your name" value={name} onChange={(e) =>setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder="Enter your phone number" value={phone} onChange={(e) =>setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder="Enter your email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                        </div>
                        <button className="btn btn-primary" type="submit">Create Contact</button>
                    </form>
                </div>
            
        </div>
    )
}
export default AddContact;