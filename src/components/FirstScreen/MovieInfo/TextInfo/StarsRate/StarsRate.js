import React, {useState, useEffect} from 'react'
import './StarsRate.css'
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&query=";
const LINK_API = "https://api.themoviedb.org/3/discover/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&sort_by=popularity.desc&page=1";

function StarsRate(props) {
    let voteAverage 
    const [starsWidth, setStarsWidth] = useState([])
    useEffect(() =>
    {
        const MOVIE_API =`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US`
        fetch(MOVIE_API).then(res => res.json()).then(res => 
            {
                voteAverage  =  res.vote_average / 2
                let starsTempArray = ['0%','0%','0%','0%','0%']
                let i = 0
                while(voteAverage > 0)
                {
                    if(voteAverage >=1)
                    {
                        starsTempArray.splice(i, 1, "100%")
                        // console.log(starsTempArray)
                    }
                    else
                    {
                        starsTempArray.splice(i, 1, `${Math.floor(voteAverage*100)}%` )
                        // console.log(starsTempArray)
                    }
                    voteAverage -= 1
                    i ++
                }
                setStarsWidth(starsTempArray)
                
            })
    }, [props.movieId])
        return (
            <div className="stars-container">
                
                <div className="star">
                    <div className="star-color" style={{background : "var(--primary-color)" , width : starsWidth[0], height : '100%'}}></div>
                </div>
                
                <div className="star">
                    <div className="star-color" style={{background : "var(--primary-color)" , width : starsWidth[1], height : '100%'}}></div>
                </div>

                <div className="star">
                    <div className="star-color" style={{background : "var(--primary-color)" , width : starsWidth[2], height : '100%'}}></div>
                </div>

                <div className="star">
                    <div className="star-color" style={{background : "var(--primary-color)" , width : starsWidth[3], height : '100%'}}></div>
                </div>

                <div className="star">
                    <div className="star-color" style={{background : "var(--primary-color)" , width : starsWidth[4], height : '100%'}}></div>
                </div>

            </div>
        )
    
}

export default StarsRate