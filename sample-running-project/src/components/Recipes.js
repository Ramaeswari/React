// import React from "react";
// import RecipeItem from "./RecipeItem";

// const Recipes = props => {
//   const { recipes } = props;
//   return (
//     <div class="card-columns">
//       {recipes.map(recipe => (
//         <RecipeItem
//           key={Math.random() * 100}
//           name={recipe.recipe.label}
//           image={recipe.recipe.image}
//           ingredientLines={recipe.recipe.ingredientLines}
//         />
//       ))}
//     </div>
//   );
// };

// export default Recipes;



import React from 'react';
// import {table} from 'react-boostrap';
import {useSelector} from 'react-redux';
import Recipe from './RecipeItem';
// import './styles.css';

const Recipes = () =>{
    const recipes = useSelector(state => state.recipe.recipesData);
    console.log(recipes);
    searchTxt = (e) =>{
      this.setState({ filter: e.target.value})
  }
  addInfo = (props) =>{
      let recipesData = [...this.state.recipesData, props];
      this.setState({recipesData : recipesData})
  }

  
      let {filter, recipesData} = this.state;
      let dataSearch = recipesData.filter(item =>{
          return Object.keys(item).some(key =>
              item[key].includes(filter))
      })
      console.log("working")
      return(
          <div>
          <form className="container">
          <div className="row form-input">
              <div className="col s3">
                  <input type="text" name="recipeName" 
                      placeholder="search for your recipes.."
                      className="input" value={filter}
                      onChange={this.searchTxt}/>
              </div>
          </div>
      </form>
              {dataSearch.map(recipe =>(
                  
                  <RecipeItem 
                  title={recipe.title} 
                  image={recipe.image}
                  calories={recipe.calories}
                  fat={recipe.fat}
                  id={recipe.id}/>
                  
                  
              ))}
              {/*<ModalPart addInfo={this.addInfo} />*/}
              {/*<ModalPart title={this.state.displayData.title} />*/}
              <Footer />
          </div>
          
      )
  }

export default Recipes;