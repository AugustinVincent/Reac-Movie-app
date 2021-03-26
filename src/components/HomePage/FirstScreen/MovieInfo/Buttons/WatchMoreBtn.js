import React from 'react'
import './Buttons.css'
function WatchMoreBtn(props) {
    console.log(props.movie)
    return (
         <a href={props.movie.homepage} target="_blank"><div className="watch-more">Watch more</div></a>
    )
}

export default WatchMoreBtn