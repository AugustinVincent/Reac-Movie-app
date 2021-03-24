import React, {useState, useEffect} from 'react'
import './App.css';
import './components/Navbar/Navbar.css'
import FirstScreen from './components/FirstScreen/FirstScreen'
import Navbar from './components/Navbar/Navbar'
import FilmDisplay from './components/FilmDisplay/FilmDisplay'
const MOVIE_API = "https://api.themoviedb.org/3/movie/791373?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US&sort_by=popularity.desc&page=1&query=";
const LINK_API = "https://api.themoviedb.org/3/discover/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&sort_by=popularity.desc&page=1";

document.addEventListener('scroll', (event) =>
{
  if(event.path[1].scrollY > 100)
  {
    document.querySelector('.navbar.header-navbar').style.background = 'rgba(0,0,0, 0.6)'
    document.querySelector('.navbar.header-navbar').style.backdropFilter = 'blur(10px)'
  }
  else
  {
    document.querySelector('.navbar.header-navbar').style.background = 'none'
    document.querySelector('.navbar.header-navbar').style.backdropFilter = 'none'
  }
})

console.log('arthur a tout cassé')

function App() {
  const [movieDatas, setMovieDatas] = useState([])
  const [firstMovie, setFirstMovie] = useState('empty')
  const [searchField, setSearchField] = useState('')


  useEffect(()=>
  {
    if(searchField !== '')
    {

      fetch(SEARCH_API + searchField)
      .then(result => result.json())
      .then(result => 
        {
          fetch(`https://api.themoviedb.org/3/movie/${result.results?.[0]?.id}?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US`)
          .then(res => res.json())
          .then(res => {
            setFirstMovie(res)
          })
          const tempArray = result.results
          tempArray.shift()
          setMovieDatas(tempArray)
        })
    }
    else { 
      fetch(LINK_API)
      .then(result => result.json())
      .then(result => 
        {
          fetch(`https://api.themoviedb.org/3/movie/${result.results?.[0]?.id}?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US`)
          .then(res => res.json())
          .then(res => {
            setFirstMovie(res)
          })
          const tempArray = result.results
          tempArray.shift()
          setMovieDatas(tempArray)
        })
      }
  }, [searchField])

  const upDateSearch = (e) =>
  {
    setSearchField(e.target.value)
  }


  return (
    <div className="App">
      <nav className="navbar header-navbar">
            <div className="movie-time-logo">MOVIE TIME</div>
            <div className="navbar-items-container">
                <div className="search-container">
                    <input onChange={upDateSearch} type="text" className="search-field"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" alt="" className="search-icon"/>
                </div>
                <span>Home</span>
                <span>Favorites</span>
            </div>
        </nav>
      <FirstScreen firstMovie={firstMovie}/>
      <FilmDisplay movieDatas = {movieDatas}/>
    </div>
  );
  

}

export default App;
