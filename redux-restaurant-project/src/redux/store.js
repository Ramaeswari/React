import {applyMiddleware, createStore, CreateStore} from 'redux';
import {composeWithDevtools} from 'redux-devtools-extension';
// import { recipeReducer } from '../reducers/RecipeReducer'
import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevtools);
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;