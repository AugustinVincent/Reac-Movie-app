import React from 'react'
import './FirstScreen.css'
import MovieInfo from './MovieInfo/MovieInfo'

function FirstScreen() {
    return (
        <div className="landing-screen">
            <img src="https://i.pinimg.com/originals/9d/51/67/9d51672e3312a419e582c110a48a4598.jpg" className="background-landing-screen-img"alt=""/>
            <div className="landing-screen-gradient"></div>
            <div className="page-content">
                <MovieInfo/>
            </div>
        </div>
    )
}

export default FirstScreen