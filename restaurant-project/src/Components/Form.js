import React,{useState} from 'react';
import RecipeItem from './RecipeItem';
import RecipesData from './Home';

const Form = (props) =>{
    const {searchTxt, filter, dataSearch,searchTerm} = props;
    const [search, setSearch] = useState("");
    const onInputChange = (e) =>{
        // e.preventDefault();
        setSearch(e.target.value);
        console.log(e.target.value);
      }
      const onSubmitChange = e =>{
          e.preventDefault();
            // <RecipesData />
      }
    return(
        <form className="container">
            <div className="row form-input">
                <div className="col s4">
                    <input type="text" name="recipeName" 
                        placeholder="search for your recipes.."
                        className="input" value={filter}
                        onChange={searchTxt}/>
                </div>
                <div className="col s2">
                <button className="searchBtn">Search</button> 
                   
                </div>
            </div>
        </form>
    )
}
export default Form;

/*

<form className="container onSubmit={props.getRecipes}">
            <div className="row">
                <div className="col s3">
                    <input type="text" name="recipeName" className="input"/>
                    
                </div>
                <button >Search</button>
                <div className="col s2">
                    
                </div>
            </div>
        </form>

        */