import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './contactUs-styles.css'

toast.configure()
const ContactNotification = (props) => {
    const notify =()=>{
        if(props.formValidate === true)
        {
            toast.success("Thanks for your conatct")
        }
        else{
            toast.warning("Please fill all the fields");
        }
    }
    return (
        <div>
            <button onClick={notify} className="submitButton btn btn-primary">Submit</button>
        </div>
    )
}
export default ContactNotification;
