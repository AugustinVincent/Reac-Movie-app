import React from 'react'
import StarsRate from '../StarsRate/StarsRate'
import './RelatedMoviesInfos.css'

function RelatedMoviesInfos(props) {
    let releaseDate = '-'
    if(props.firstMovie?.release_date !== undefined)
    {
        releaseDate = props.firstMovie?.release_date.split('-')[0]
    }
    return (
            <div className="related-movie-infos">
                <span className="year">{releaseDate}</span>
                <span className="gender">Genre : <span className="blue-text">{props.firstMovie?.genres?.[0]?.name}, {props.firstMovie?.genres?.[1]?.name}</span> </span>
                <span className="actor"><span className="grey-text" >By :</span> {props.firstMovie?.production_companies?.[0]?.name}</span>
                <StarsRate movieId={props.firstMovie?.id}/>
            </div>
    )
    
}

export default RelatedMoviesInfos