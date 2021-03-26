import React from 'react'

import SeeTrailerBtn from './SeeTrailerBtn'
import WatchMoreBtn from './WatchMoreBtn'
import AddToFavoritesBtn from './AddToFavoritesBtn'
import './Buttons.css'

function Buttons(props) {
    return (
        <div className="buttons-container">
            <SeeTrailerBtn movie={props.firstMovie}/>
            <WatchMoreBtn movie={props.firstMovie}/>
            <AddToFavoritesBtn movie={props.firstMovie} favoritesMovies={props.favoritesMovies}/>
        </div>
    )
}

export default Buttons