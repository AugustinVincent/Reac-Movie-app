import React from 'react'
import SeeTrailerBtn from './SeeTrailerBtn'
import WatchMoreBtn from './WatchMoreBtn'
import AddToFavoritesBtn from './AddToFavoritesBtn'
import './Buttons.css'
function Buttons() {
    return (
        <div className="buttons-container">
            <SeeTrailerBtn/>
            <WatchMoreBtn/>
            <AddToFavoritesBtn/>
        </div>
    )
}

export default Buttons