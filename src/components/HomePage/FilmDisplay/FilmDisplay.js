import React from 'react'
import './FilmDisplay.css'
import FilmCard from './FilmCard/FilmCard'

function FilmDisplay(props) {
    console.log(props.favoritesMovies)
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