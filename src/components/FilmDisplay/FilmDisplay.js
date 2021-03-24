import React from 'react'
import './FilmDisplay.css'
import FilmCard from './FilmCard/FilmCard'
const MOVIE_API = "https://api.themoviedb.org/3/movie/791373?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&query=";
const LINK_API = "https://api.themoviedb.org/3/discover/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&sort_by=popularity.desc&page=1";

function FilmDisplay(props) {
    return (
        <div className="film-container">
            {props.movieDatas.map((movieData, index) =>
                    (
                        <FilmCard key={index} movieId={movieData.id} movieData={movieData}/>
                    ))}
        </div>
    )
}

export default FilmDisplay