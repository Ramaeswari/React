import {createContext, React, useState} from 'react';

export const RecipesContext = createContext();

export const RecipesProvider = (props) =>{
    const [recipes, setRecipes] =useState([
        {
            id: 1,
            name: "React",
            price: "$60",
            YOB: 2016
        },
        {
            id: 2,
            name: "Javascript",
            price: "$40",
            YOB: 2018
        },
        {
            id: 3,
            name: "Angular",
            price: "$80",
            YOB: 2019
        }
    ]);
    return(
        <BookContext.Provider value={[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}
