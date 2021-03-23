import React, {useState, useEffect} from 'react'
import StarsRate from './StarsRate/StarsRate'
import './TextInfo.css'
import '../../../../../public/star.svg'

const MOVIE_API = "https://api.themoviedb.org/3/movie/791373?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US"

function TextInfo() {
        return (
            <div className="text-info">
                <h2 className="movie-title">Spider-Man : HomeComing</h2>
                <div className="related-movie-infos">
                    <span className="year">2019</span>
                    <span className="gender">Genre : <span className="blue-text">Action, Aventure</span> </span>
                    <span className="actor"><span className="grey-text" >Avec :</span> Tom Holland</span>
                    <StarsRate movieId={791373}/>
                </div>
                <p className="overview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum eum dolore expedita dicta. Officiis, expedita? Possimus, deleniti inventore. Incidunt, ipsum. Eius ipsa quaerat harum alias id unde quis libero? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem asperiores dolores iusto ipsam aperiam voluptatem sapiente! Ratione repellendus a, nemo placeat sint atque maiores exercitationem, consequatur eos, molestias suscipit minus!</p>
            </div>
        )
    
}

export default TextInfo