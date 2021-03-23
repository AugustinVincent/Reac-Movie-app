import React from 'react'
import TextInfo from './TextInfo/TextInfo'
import Buttons from './Buttons/Buttons'

import './MovieInfo.css'

function MovieInfo() {
    return (
        <div className="movie-info-container">
            <TextInfo/>
            <Buttons/>
        </div>
    )
}

export default MovieInfo