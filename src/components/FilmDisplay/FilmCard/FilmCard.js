import React from 'react'
import './FilmCard.css'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

function FilmCard(props) {
    return (
        <div className="film-cards">
            <img src={IMG_API + props.movieData.poster_path} alt="" className="movie-poster-img"/>
            <div className="film-infos">
                <h4 className="film-title">{props.movieData.title}</h4>
                <span className="film-popularity">{props.movieData.vote_average}</span>
            </div>
        </div>
    )
}

export default FilmCard