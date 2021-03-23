import React, {useState, useEffect} from 'react'
import './FirstScreen.css'
import MovieInfo from './MovieInfo/MovieInfo'
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function FirstScreen(props) {

    if(props.firstMovie != 'empty')
    { 
        return (
            <div className="landing-screen">
                <img src={IMG_API + props.firstMovie.backdrop_path} className="background-landing-screen-img"alt=""/>
                <div className="landing-screen-gradient"></div>
                <div className="page-content">
                    <MovieInfo firstMovie={props.firstMovie}/>
                </div>
            </div>
        )
    }

    return (
        <div className="landing-screen">
        </div>
    )
}

export default FirstScreen