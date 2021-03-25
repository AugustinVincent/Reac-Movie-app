import React from 'react'

import SeeTrailerBtn from './SeeTrailerBtn'
import WatchMoreBtn from './WatchMoreBtn'
import AddToFavoritesBtn from './AddToFavoritesBtn'
import './Buttons.css'

function Buttons(props) {
    console.log(props.favoritesMovies)
    return (
        <div className="buttons-container">
            <SeeTrailerBtn/>
            <WatchMoreBtn/>
            <AddToFavoritesBtn movie={props.firstMovie} favoritesMovies={props.favoritesMovies}/>
        </div>
    )
}

export default Buttons