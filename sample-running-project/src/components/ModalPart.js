// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import {Route} from 'react-router-dom';

// const ModalPart = (name) =>{
//     // const {title} = props;
//     // console.log(addInfo);
    
//     return(
//         <div className="App">
//         More Details for recipes
        
//             {/*<p>{title}</p>
//             <p>{calories}</p>
//             <p>{fat}</p>*/}
//         </div>
        
        
//     )
// }
// export default ModalPart;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getContact, updateContact } from "../../actions/ContactActions";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getRecipe } from '../actions/RecipeAction';

const ModalPart = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.recipe);
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");

  useEffect(() => {
    if (recipe != null) {
      setTitle(recipe.title);
      setCalories(recipe.calories);
      setFat(recipe.fat);
    }
    dispatch(getRecipe(id));
  }, [recipe]);

  
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Recipe Details</div>
      <div className="card-body">
        <p>Title: {title}</p>
        <p>Calories: {Calories}</p>
        <p>Fat: {fat}</p>
      </div>
    </div>
  );
};
export default ModalPart;