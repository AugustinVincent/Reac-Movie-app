import React from 'react'
import './FilmDisplay.css'
import FilmCard from './FilmCard/FilmCard'

function FilmDisplay(props) {
    console.log(props.searchField)
    const movieDatas = props.movieDatas
    return (
        <div className="film-container">
            {props.movieDatas.map((movieData, index) =>
                    (
                        <FilmCard key={index} movieID={movieData.id} movieData={movieData}/>
                    ))}
        </div>
    )
}

export default FilmDisplay