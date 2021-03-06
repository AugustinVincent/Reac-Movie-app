import React from 'react'
import './FirstScreen.css'
import MovieInfo from './MovieInfo/MovieInfo'
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function FirstScreen(props) {

    return (
        <div className="landing-screen">
            <img src={IMG_API + props.firstMovie?.backdrop_path} className="background-landing-screen-img"alt=""/>
            <div className="landing-screen-gradient"></div>
            <div className="page-content">
                <MovieInfo favoritesMovies={props.favoritesMovies} firstMovie={props.firstMovie}/>
            </div>
        </div>
    )
}

export default FirstScreen