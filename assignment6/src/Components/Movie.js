import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import AddMovie from './AddMovie';

class Movie extends Component
{
    render(){
        return(
            <div>
                <h2>Movies List</h2>
                {this.props.movie}
                Movies: {this.props.movie.length}
                <AddMovie />
            </div>
        )

    }
}

const mapStateToProps = state =>{
    return{
        movie: state.movieData.map(eachMovie =>{
            return(
                <p key={eachMovie.id} className="movieList">
                    <b>Name: </b><span>{eachMovie.movieName}</span>
                    <b>ReleaseDate: </b><span>{eachMovie.releaseDate}</span>  
                    <b>HeroName: </b><span>{eachMovie.movieHero}</span>
                </p>
                
            )
        })
    }
}

const mapDispatchToProps = dispatch =>{
    
}

export default connect(mapStateToProps)(Movie);