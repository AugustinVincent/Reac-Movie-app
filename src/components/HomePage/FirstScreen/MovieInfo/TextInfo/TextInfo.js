import React from 'react'
import RelatedMoviesInfos from './RelatedMoviesInfos/RelatedMoviesInfos'
import './TextInfo.css'

function TextInfo(props) {
    let releaseDate = '-'
    if(props.firstMovie?.release_date !== undefined)
    {
        releaseDate = props.firstMovie?.release_date.split('-')[0]
    }
    return (
        <div className="text-info">
            <h2 className="movie-title">{props.firstMovie?.original_title}</h2>
            <RelatedMoviesInfos firstMovie={props.firstMovie}/>
            <p className="overview">{props.firstMovie.overview}</p>
        </div>
    )
    
}

export default TextInfo