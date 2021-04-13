/*import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
    const { firstName, age, place, state, array } = props;
    return(
        <div>
        <h3>{firstName}</h3>
        <p>{age}  {place} {state}</p>
        <div>
        {array.map(info =>{
            return(
                <div key={info}>
                {info}</div>
            )
        })}</div>
        </div>
    )
}
Display.propTypes = {
    firstName: PropTypes.string,
    age: PropTypes.number,
    place: PropTypes.string,
    state: PropTypes.string,
    array: PropTypes.arrayOf(PropTypes.number)
}
*/

/*
import React, { useState } from 'react';

const Display = (props) => {
    const {empId, empName, age, city, designation } = props;
    const [isShown, setIsShown] = useState(false);
    return(
        <div>
            <h2 onMouseEnter={() =>{setIsShown(true)}}
                onMouseLeave={()=> {setIsShown(false)}}>{empId} 
                {empName} {age} {city} {designation}</h2>
            {isShown && (alert(empName))}
        </div>
    )
}
export default Display;
*/

import React, { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Display = (props) => {
    const {EmployeeData} = props;
    const [isShown, setIsShown] = useState(false);
    // const [minVal, setMinVal] = useState(0);
    // const [maxVal, setMaxVal] = useState(100);
    const minVal = 0, maxVal=100;
    const [randomNum, setRandomNum] = useState(5);
    const displayList = EmployeeData.map(info => {
        return(
            <div>
                <b onMouseEnter={() => {alert("Employee Name: " +info.empName +" "+"Employee Age: "+info.age)}}>{info.empId}</b>
                <p>{info.empName} {info.age}  {info.city} {info.designation}</p>  
            </div>
        )
    })
    const genarateRandomNum = () =>{
        setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1)));
    }
    return(
        <div className="display">
            <div className="container">
            <div key="info">{displayList}</div>
            <h3>Random Number <span>{randomNum}</span></h3>
            <button onClick={genarateRandomNum}>Generate Random Number</button>
            </div>
        </div>
        
    )
    
}
Display.propTypes = {
    empId: PropTypes.number,
    empName: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    designation: PropTypes.string 
}
export default Display;

