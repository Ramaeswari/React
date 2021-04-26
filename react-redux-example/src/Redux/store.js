import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../Reducers';
import thunk from 'redux-thunk';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk))

);
export default store;