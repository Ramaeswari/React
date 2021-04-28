import {CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT} from '../constant/types';

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
export const updateContact = (contact) =>{
    return{
        type: UPDATE_CONTACT,
        payload: contact,
    }
}