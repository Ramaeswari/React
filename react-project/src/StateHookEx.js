import React, {useState} from 'react';

const StateHookEx = () =>{
    const [fname, setName] = useState('eswari');
    const [city, setCity] = useState('');
    return(
        <div>
        <p>{fname}</p>
        <p>{city}</p>
        <button onClick={() => setName('Rama eswari')}>Click Me!</button>
        <button onClick={()=> setCity('Rangampeta')}>Click Here!</button>
        Happy coding!
        </div>
    )
}
export default StateHookEx;