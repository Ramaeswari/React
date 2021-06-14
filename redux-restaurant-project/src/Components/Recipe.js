import { CardHeader } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import './cards-styles.css';

const Recipe = (props) => {
    const {title, image,id,type} = props;
    
    return (
        <div className="card">
            <p className={type==="Veg" ? "type-veg" : "type-non-veg"}>{type}</p>
             <div className="card-image">
                <img src={image}></img>
             </div>
             <div className="card-content">
                <b className="card-details">{title}</b>
                <Link to={`/recipe/${id}`}><button className="btn btn-primary detailsBtn">More Details</button></Link>
             </div>
             
        </div>
    )
}

export default Recipe;
