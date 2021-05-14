import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Footer from './Footer';
import Recipe from './Recipe';
import './cards-styles.css'

const Recipes = () => {
    const recipes = useSelector(state => state.recipe.recipes);
    
    const [search, setSearch] = useState("");
    console.log(recipes);
 
    const filterRecipes = recipes.filter(recipe =>recipe.title.toLowerCase().includes(search.toLowerCase()));
    
    return (

        <div>
            <form >
                <div className="row form-input">
                    <div className="col-m-12">
                        <input type="text" name="recipeName" 
                            placeholder="search for your recipes.."
                            className="input" value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
            </form>
            {
                filterRecipes.map(recipe =>(
                    <Recipe 
                    title={recipe.title} 
                    image={recipe.image}
                    calories={recipe.calories}
                    fat={recipe.fat}
                    id={recipe.id} key={recipe.id}
                    type={recipe.type}/>
                    
                    
                ))
            }
            <Footer />
        </div>
    )
}

export default Recipes;

// <input type="text" name="recipeName" 
//                             placeholder="search for your recipes.."
//                             className="input" value={filter}
//                             onChange={searchTxt}/>
