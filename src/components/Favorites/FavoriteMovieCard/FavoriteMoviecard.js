import React from 'react'

import AddToFavoritesBtn from '../../HomePage/FirstScreen/MovieInfo/Buttons/AddToFavoritesBtn'


const IMG_API = "https://image.tmdb.org/t/p/w1280"

function FavoriteMoviecard(props) {
    return ( 
        <div className="film-cards">
                <img src={IMG_API + props.favoriteMovie?.poster_path} alt="" className="movie-poster-img"/>
                <div className="film-infos">
                    <h4 className="film-title">{props.favoriteMovie?.original_title}</h4>
                    <AddToFavoritesBtn movie={props.favoriteMovie} favoritesMovies={props.favoritesMovies}/>
                </div>
            </div>
    )
}

export default FavoriteMoviecard