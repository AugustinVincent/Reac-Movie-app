import React from 'react'
import './FilmCard.css'

const MOVIE_API = "https://api.themoviedb.org/3/movie/791373?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&query=";
const LINK_API = "https://api.themoviedb.org/3/discover/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&sort_by=popularity.desc&page=1";

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