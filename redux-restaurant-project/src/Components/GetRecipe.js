import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getRecipe } from '../actions/RecipeAction';
import { Link } from 'react-router-dom';


const GetRecipe = () => {
    let {id} = useParams();
    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [fat, setFat] = useState("")
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe.recipe);
    console.log(recipe);
    useEffect(() =>{
        if(recipe != null)
        {
            setTitle(recipe.title);
            setCalories(recipe.calories);
            setImage(recipe.image);
            setFat(recipe.fat);
        }
        dispatch(getRecipe(id));
    }, [recipe])
    // alert(id);
    return (
    
        <div className="container">
        
        <div className="card">

            <div className="card-image">
                <img src={image}></img>
            </div>
             <div className="card-content">
                <span className="card-details"><b>{title}</b></span>
                <p><b>Calories:</b> {calories}</p>
                <p><b>Fat:</b> {fat}</p>
                <Link to="/"><button className="btn btn-secondary">Back</button></Link>
             </div>
             
        </div>
        </div>
    )
}

export default GetRecipe;



// import React from 'react'

// const GetRecipe = () => {
//     return (
//         <div>
//             sghfhjdgfhj
//         </div>
//     )
// }

// export default GetRecipe;
