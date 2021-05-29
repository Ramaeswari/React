import * as actions from '../constant/types';

const initState = {
  recipeDetails: []
}

const recipeReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.GET_RECIPEDATA:
      return {
        ...state,
        recipeDetails: action.payload
      }
    default:
      return state;
  }
};

export default recipeReducer;