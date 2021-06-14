import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getRecipe } from '../actions/RecipeAction';
import { Link } from 'react-router-dom';
import './GetRecipe.css'


const GetRecipe = () => {
    let {id} = useParams();
     
    const [recipeDetails, updateRecipeDetails] = useState({});
    
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe.recipe);
    console.log("Recipe Details: ", recipe);
    useEffect(() =>{
        // if(recipe != null)
        // {
            
        //     updateRecipeDetails(recipe);
        // }
        dispatch(getRecipe(id));
    }, [])
    
    return (
        
        <div className="container">
        
        <div className="card getRecipeCard">

            <div className="card-image getRecipeImg">
                <img src={recipe ? recipe.image : ""}></img>
            </div>
             <div className="card-content">
                <b className="card-details">{recipe ? recipe.title : ""}</b>
                <p><b>Calories:</b> {recipe ? recipe.calories : ""}</p>
                
                <p><b>Fat:</b> {recipe ? recipe.fat : ""}</p>
                <p><b>Instructions to prepare: </b>{recipe ? recipe.instructions : ""}</p>
                
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
