import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import './styles.css';
import {useDispatch} from 'react-redux';
import { deleteContact } from '../../actions/ContactActions';

const Contact = ({contact}) =>{
    const dispatch = useDispatch();
    const {name, phone, email,id} = contact;
    return(
        <tr>
            <td >
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar name={contact.name} size='45' round={true} className="mr-2"/>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`} ><span className="material-icons mr-2">edit</span></Link>
                <a><span className="material-icons removeIcon" onClick={() =>dispatch(deleteContact(id))}>remove_circle</span></a>
            </td>
        </tr>
        
    )
}
export default Contact;