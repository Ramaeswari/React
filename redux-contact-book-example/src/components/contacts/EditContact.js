import React, { useEffect, useState } from 'react';
import './styles.css'
import {useDispatch} from 'react-redux';
import { getContact } from '../../actions/ContactActions';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';
import { useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

const EditContact = () =>{
    let {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector(state =>state.contact.contact)
    const [name, setName] = useState("");
    const [phone, setPhone] =useState("");
    const [email, setEmail] = useState("");

    
    useEffect(() =>{
        if(contact != null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id));
    }, [contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();
        const update_Contact = Object.assign(contact, {name: name, phone: phone, email: email});
        console.log(update_Contact);
    }

    return(
        <div className=" container card border-0 shadow">
            <div className="card-header">Add a Contact</div>
                <div className="card-body">
                    <form onSubmit={(e)=>onUpdateContact(e)}>
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
                        <button className="btn btn-warning" type="submit">Update Contact</button>
                    </form>
                </div>
            
        </div>
    )
}
export default EditContact;