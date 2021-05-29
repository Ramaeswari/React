import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class DisplayData extends Component
{
    render(){
        return(
            <div>
                <h2>Recipes</h2>
                {this.props.recipe}
                
                
            </div>
        )

    }
}

const mapStateToProps = state =>{
    return{
        recipe: state.recipeData.map(eachRecipe =>{
            return(
                <p key={eachRecipe.id} className="movieList">
                    <b>Title: </b><span>{eachRecipe.title}</span>
                    <b>Calories: </b><span>{eachRecipe.calories}</span>  
                    <b>Fat: </b><span>{eachRecipe.fat}</span>
                </p>
                
            )
        })
    }
}



export default connect(mapStateToProps)(DisplayData);