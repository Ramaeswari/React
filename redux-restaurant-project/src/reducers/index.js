import {recipeReducer} from './RecipeReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    recipe: recipeReducer,
})