import React, {useState, useEffect} from 'react'
import './StarsRate.css'

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
                    }
                    else
                    {
                        starsTempArray.splice(i, 1, `${Math.floor(voteAverage*100)}%` )
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