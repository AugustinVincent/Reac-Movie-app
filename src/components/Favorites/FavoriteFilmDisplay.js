import React, { useEffect, useState } from 'react'
import FavoriteMoviecard from '../Favorites/FavoriteMovieCard/FavoriteMoviecard'

function FavoriteFilmDiplay(props) {
    const [updateRender, setUpdateRender] = useState(false)
    const updateRenderer = () =>
    {
        setUpdateRender(!updateRender)
    }
    useEffect(() =>
    {
    }, [updateRender, props])
    return (
        <div className="content-container" onClick={updateRenderer}>

              <h1 className="favorite-title">Favorites movies</h1>
              <div className="film-container">

                {props.favoritesMovies.map((favoriteMovie, index) =>
                ( 
                  <FavoriteMoviecard  favoriteMovie={favoriteMovie} favoritesMovies={props.favoritesMovies} key={index}/>
                ))}
              </div>
            </div>
    )
}

export default FavoriteFilmDiplay