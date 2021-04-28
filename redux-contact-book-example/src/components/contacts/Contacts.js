import React from 'react';
// import {table} from 'react-boostrap';
import {useSelector} from 'react-redux';
import Contact from './Contact';
import './styles.css';

const Contacts = () =>{
    const contacts = useSelector(state => state.contact.contacts);
    console.log(contacts);
    return(
        <div className="container">
        <table className="table shadow">
            <thead className="tableHeading">
                <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                contacts.map(contact =>(
                    <Contact contact={contact} key={contact.id}/>
                ))
            }
                
            </tbody>
        </table>
    </div>
    )
}
export default Contacts;