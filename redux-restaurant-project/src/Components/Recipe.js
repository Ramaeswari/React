import { CardHeader } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import './cards-styles.css';

const Recipe = (props) => {
    const {title, image, calories, fat,id,type} = props;
    const typeChecking = () => {
        if({type} === "Veg")
        {
            <span style="color: green">{type}</span>
        }
        else{
            <span style="color: red">{type}</span>
        }
    }
    return (
        <div className="card">
            <p className="typeName">{type}</p>
             <div className="card-image">
                <img src={image}></img>
             </div>
             <div className="card-content">
                <p><b className="card-details">{title}</b></p>
                {/*<p>Calories: {calories}</p>*/}
                <Link to={`/recipe/${id}`}><button className="btn btn-primary detailsBtn">More Details</button></Link>
             </div>
             
        </div>
    )
}

export default Recipe;
