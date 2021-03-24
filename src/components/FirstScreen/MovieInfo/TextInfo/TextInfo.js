import React, {useState, useEffect} from 'react'
import StarsRate from './StarsRate/StarsRate'
import './TextInfo.css'

function TextInfo(props) {
    let releaseDate = '-'
    if(props.firstMovie?.release_date != undefined)
    {
        releaseDate = props.firstMovie?.release_date.split('-')[0]
    }
    return (
        <div className="text-info">
            <h2 className="movie-title">{props.firstMovie?.title}</h2>
            <div className="related-movie-infos">
                <span className="year">{releaseDate}</span>
                <span className="gender">Genre : <span className="blue-text">{props.firstMovie?.genres?.[0]?.name}, {props.firstMovie?.genres?.[1]?.name}</span> </span>
                <span className="actor"><span className="grey-text" >By :</span> {props.firstMovie?.production_companies?.[0]?.name}</span>
                <StarsRate movieId={props.firstMovie?.id}/>
            </div>
            <p className="overview">{props.firstMovie.overview}</p>
        </div>
    )
    
}

export default TextInfo