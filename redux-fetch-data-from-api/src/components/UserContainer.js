import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { fetchUsersSuccess } from "../actions/UserAction";
import {UserAddress} from './UserAddress';

export const UserContainer = () =>{
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.users);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
            console.log(response);
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        })
    }, []);
    return(
        <div>
        {userData.map((user) =>{
            console.log(user.name)
            return(
                <div>
                    <p key={user.id}><b>Name: </b>{user.name}</p>
                    <UserAddress user={user} name="eswari" education="btech"/>
                
                </div>
            )
            
        })}
        
       
        </div>
    )
}

