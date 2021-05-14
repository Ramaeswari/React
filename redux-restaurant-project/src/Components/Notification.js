import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Notification = (props) => {
    const notify =()=>{
        if(props.formValidate === true)
        {
            toast.success("Thanks for your feedback")
        }
        else{
            toast.warning("Please fill all the fields");
        }
    }
    return (
        <div>
            <button onClick={notify} className="submitBtn btn btn-primary">Submit</button>
        </div>
    )
}
export default Notification;
