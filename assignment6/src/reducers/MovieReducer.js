import { ADD_MOVIE } from "../actions";
// import {addMovie} from '../actions'

const initialState = {
    movieData: [
        {
            id:1,
            movieName: 'Harry Potter',
            releaseDate: 2002,
            movieHero: "Daniel Radcliffe"
        },
        {  
            id:2,
            movieName: 'Mr.bean',
            releaseDate: 1997,
            movieHero: "Rown Atkinson"
        },
        {
            id:3,
            movieName: 'Fantastic Beasts: The Crimes of Grindelwald',
            releaseDate: 2018,
            movieHero: "Eddie Redmanye"
        }
    ]
}

const MovieReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_MOVIE":
            return{
                ...state,
                movieData: [...state.movieData, action.payload,
                ]

            }
        default:
            return state;
    }
    
}
export default MovieReducer;