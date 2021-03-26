import React, { useEffect, useState } from 'react'
import './FilmCard.css'
import StarsRate from '../../FirstScreen/MovieInfo/TextInfo/StarsRate/StarsRate'
import RelatedMoviesInfos from '../../FirstScreen/MovieInfo/TextInfo/RelatedMoviesInfos/RelatedMoviesInfos';
import Buttons from '../../FirstScreen/MovieInfo/Buttons/Buttons';


const IMG_API = "https://image.tmdb.org/t/p/w1280";
function FilmCard(props) {
    const [newMovieData, setNewMovieData] = useState(props.movieData)
<<<<<<< HEAD:src/components/FilmDisplay/FilmCard/FilmCard.js
    const [relatedMovies, setRelatedMovies] = useState({})
    const [fullscreenMovie, setFullscreenMovie] = useState(false)
=======
>>>>>>> router:src/components/HomePage/FilmDisplay/FilmCard/FilmCard.js
    const displayFilmDetails  = () =>
    {
        const MOVIE_API =`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US`
        fetch(MOVIE_API)
        .then(res => res.json())
        .then(res => 
            {
                setNewMovieData(res)
            })

        setFullscreenMovie(!fullscreenMovie)
    }
    const movieTime = (runtime) =>
    {
        let movieTimers = {
            hours : 0,
            minutes : 0
        }
        while(runtime > 60)
        {
            runtime -= 60
            movieTimers.hours += 1
        }
        if(runtime < 10)  movieTimers.minutes = '0' + runtime
        if(runtime > 10)  movieTimers.minutes =  runtime

        return movieTimers.hours + 'h' + movieTimers.minutes + 'm'
    }

    
    useEffect(() =>
    {
        setNewMovieData(props.movieData)
    }, [fullscreenMovie, props])
    if(!fullscreenMovie)
    {

        return (
            <div onClick={displayFilmDetails} className="film-cards">
                <img src={IMG_API + newMovieData?.poster_path} alt="" className="movie-poster-img"/>
                <div className="film-infos">
                    <h4 className="film-title">{newMovieData?.original_title}</h4>
                    <StarsRate movieId={newMovieData?.id}/>
                </div>
            </div>
        )
    }

    if(fullscreenMovie)
    {
        return (
            <div className="film-cards">

                <div  className="fullscreen-movie">
                    <div className="fullscreen-movie-container">
                        <div onClick={displayFilmDetails} className="exit-btn">
                                <div></div>
                                <div></div>
                        </div>
                        <div className="backdrop-movie-container">
                            <img src={IMG_API + newMovieData?.backdrop_path} alt="" className="background-img-movie"/>
                            <div className="landing-screen-gradient"></div>
                            <div className="content">
                                <div className="top-container">
                                    <img src={IMG_API + newMovieData?.poster_path} className="movie-poster" alt=""/>
                                    <div className="right-container">
                                        <h2 className="film-title">{newMovieData?.original_title}</h2>
                                        <RelatedMoviesInfos firstMovie={newMovieData}/>
                                        <Buttons firstMovie={newMovieData} favoritesMovies={props.favoritesMovies}/>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                        <div className="related-movies">
                            <div className="text-info-container">

                                <p className="overview">{newMovieData?.overview}</p>
                                <ul>
                                    <li>Runtime : {movieTime(newMovieData?.runtime)}</li>
                                    <li>From : {newMovieData?.production_countries?.[0]?.name}</li>
                                    <li>Arthur : Thouin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmCard