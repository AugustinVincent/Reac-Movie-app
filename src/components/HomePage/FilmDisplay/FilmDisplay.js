import React from 'react'
import './FilmDisplay.css'
import FilmCard from './FilmCard/FilmCard'

function FilmDisplay(props) {
    return ( 
        <div className="film-container">
            {props.movieDatas.map((movieData, index) =>
                    (
                        <FilmCard  favoritesMovies={props.favoritesMovies} key={index} movieId={movieData.id} movieData={movieData}/>
                    ))}
        </div>
    )
}

export default FilmDisplay