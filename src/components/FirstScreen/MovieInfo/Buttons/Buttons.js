import React from 'react'
import './Buttons.css'
function Buttons() {
    return (
        <div className="buttons-container">
            <div className="trailer-btn"><span>See trailer</span> <img src="https://lh3.googleusercontent.com/proxy/l1Wwaxkd-LmHXem4Csx44zqBC7-_fpI5H_Mji1JPi9JG44TawoZWEHRm9hmfG9wW0a4X1_nK37vG4dqbPM4-KbFFCI_V6Z0" alt="" className="play-btn"/></div>
            <span className="watch-more">Watch more</span>
            <div className="add-favorites-btn">
                <span>Add to your favorites</span>
                <img src="https://icon-library.com/images/white-heart-icon/white-heart-icon-23.jpg" alt="" className="favorite-btn"/>
            </div>
        </div>
    )
}

export default Buttons