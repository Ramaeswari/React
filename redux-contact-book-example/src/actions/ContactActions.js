import {CREATE_CONTACT, GET_CONTACT} from '../constant/types';

//actions
export const addContact = (contact) =>{
    return{
      type: CREATE_CONTACT,
      payload: contact,
    }
}

//get a contact
export const getContact = (id) =>{
    return{
        type: GET_CONTACT,
        payload: id,
    }
}

//update a contact