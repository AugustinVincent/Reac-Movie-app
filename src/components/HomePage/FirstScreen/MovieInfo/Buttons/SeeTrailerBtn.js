import React from 'react'
import './Buttons.css'
function SeeTrailerBtn(props) {
    return (
        
        <a href={props.movie.homepage} target="_blank"><div className="trailer-btn">See trailer</div></a>
    )
}

export default SeeTrailerBtn