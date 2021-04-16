import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const HookUseEffect = () =>{
    const [firstName, setName] = useState('Rama');
    const [lastName, setLastName] = useState('');

    useEffect( () =>{
        document.title = lastName;
    })

    const [state, setState] = useState({});
    useEffect( () =>{
        fetchData();
        }, []);
    const fetchData = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/22').then(response =>{
            setState(response.data);
        })
    }
    
    return(
        <div>
            <h2>{firstName}</h2>
            <button onClick={() => setName("Eswari")}>Click Me!</button>
            <button onClick={() => setLastName("HookUseEffect")}>Click Here!</button>
            {state.body}
        </div>
    )
}
export default HookUseEffect;