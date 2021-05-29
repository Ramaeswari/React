import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import axios from "axios";
import * as actions from '../constant/types';

const RecipesData = ()=> {
    const [recipeData, setRecipeData] = React.useState([]);
    const dispatch = useDispatch();
useEffect(() =>{
        fetchData();
      }, []);

      const fetchData = () =>{
        axios.get("./Recipe.json").then((res) => {
          console.log(res.data);
          dispatch({
            type: actions.GET_RECIPEDATA,
            payload: res.data
          })
            setRecipeData(res.data)}).catch((error) => {
              console.log('found an error');
          })
        }
console.log(recipeData)
     return (
        <div className="App">
          
          <hr />
          <h3>function component</h3>
          
          {recipeData &&
              recipeData.map(({ title, id }) => (
              <div key={id} className="row">
                Title:<strong>{title}</strong>
              </div>
            ))}
          
        </div>
      );
    }
export default RecipesData;