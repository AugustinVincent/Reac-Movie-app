import React from 'react'

import StarsRate from '../../HomePage/FirstScreen/MovieInfo/TextInfo/StarsRate/StarsRate'


const IMG_API = "https://image.tmdb.org/t/p/w1280"

function FavoriteMoviecard(props) {
    console.log(props.favoriteMovie.original_title)
    return ( 
        <div className="film-cards">
                <img src={IMG_API + props.favoriteMovie?.poster_path} alt="" className="movie-poster-img"/>
                <div className="film-infos">
                    <h4 className="film-title">{props.favoriteMovie?.original_title}</h4>
                    <StarsRate movieId={props.favoriteMovie?.id}/>
                </div>
            </div>
    )
}

export default FavoriteMoviecard