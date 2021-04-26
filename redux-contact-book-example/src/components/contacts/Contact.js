import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import './styles.css';

const Contact = ({contact}) =>{
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
                <Link to="#" ><span className="material-icons removeIcon">remove_circle</span></Link>
            </td>
        </tr>
        
    )
}
export default Contact;