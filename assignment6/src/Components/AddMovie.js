import React from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
// import * as actions from '../actions'
import {addMovie} from '../actions';
import '../App.css';

const AddMovie = () =>{
    const dispatch = useDispatch();
    const [movieName, setMovieName] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [movieHero, setMovieHero] = useState("");

    const handleAddMovie = (e) =>{
        // e.preventDefault();
        e.preventDefault();
        const add_movie = {
            movieName: movieName,
            releaseDate: releaseDate,
            movieHero: movieHero
        }
        console.log(movieName, releaseDate, movieHero);
        dispatch(addMovie(add_movie));
        setMovieName("");
        setReleaseDate("");
        setMovieHero("");
    }

    return(
        <form onSubmit={(e) => handleAddMovie(e)}>
            <input type="text" placeholder="Enter movie name" value={movieName} className="movieName" onChange={(e) =>setMovieName(e.target.value)}></input>
            <input type="text" placeholder="Enter movie release date" value={releaseDate} className="releaseDate" onChange={(e) =>setReleaseDate(e.target.value)}></input>
            <input type="text" placeholder="Enter movie hero name" value={movieHero} className="movieHero" onChange={(e) =>setMovieHero(e.target.value)}></input>
            <button type="submit">Add Movie</button>
        </form>
    )
}
// const mapDispatchToProps = dispatch =>{
//     return{
//         addMovie: value => dispatch({ type: actions.ADD_MOVIE, payload: value })
//     }
// }

// export default connect(mapDispatchToProps)(AddMovie);
export default AddMovie;