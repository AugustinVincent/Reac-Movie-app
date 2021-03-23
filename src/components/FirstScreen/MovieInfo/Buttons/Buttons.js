import React from 'react'
import './Buttons.css'
function Buttons() {
    return (
        <div className="buttons-container">
            <div className="trailer-btn"><span>See trailer</span> <img src="" alt="" className="play-btn"/></div>
            <span className="watch-more">Watch more</span>
            <div className="add-favorites-btn">
                <span>Add to your favorites</span>
                <img src="" alt="" className="favorite-btn"/>
            </div>
        </div>
    )
}

export default Buttons