import React from 'react';

const Display = (props) => {
    const {personsInfo} = props;
    const displayList = personsInfo.map(info => {
        return(
            <div>
                <b>{info.fname}</b>  {info.age}  {info.city}
            </div>
        )
    })
    return(
        <div>
        {displayList}
        </div>
    )
    
}
export default Display;