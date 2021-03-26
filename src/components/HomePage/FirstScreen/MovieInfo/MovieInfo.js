import React from 'react'
import TextInfo from './TextInfo/TextInfo'
import Buttons from './Buttons/Buttons'
import './MovieInfo.css'



function MovieInfo(props) {
    return (
        <div className="movie-info-container">
            <TextInfo firstMovie={props.firstMovie}/>
            <Buttons firstMovie={props.firstMovie} favoritesMovies={props.favoritesMovies}/>
        </div>
    )
}

export default MovieInfo