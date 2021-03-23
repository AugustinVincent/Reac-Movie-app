import React, {useState, useEffect} from 'react'
import './App.css';
import './components/Navbar/Navbar.css'
import FirstScreen from './components/FirstScreen/FirstScreen'
import Navbar from './components/Navbar/Navbar'
import FilmDisplay from './components/FilmDisplay/FilmDisplay'

const LINK_API = "https://api.themoviedb.org/3/discover/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&sort_by=popularity.desc&page=1"
const IMG_API = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&query="

document.addEventListener('scroll', (event) =>
{
  console.log(event.path[1].scrollY)
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

function App() {
  const [movieDatas, setMovieDatas] = useState([])


  const [searchField, setSearchField] = useState('')

    const upDateSearch = (e) =>
    {
        setSearchField(e.target.value)
    }


  useEffect(() =>
  {
    fetch(LINK_API).then(res => res.json())
    .then(res => {
      setMovieDatas(res.results)
      console.log(res)
    })
  }, [])
  return (
    <div className="App">
      <nav className="navbar header-navbar">
            <div className="temporary-logo">MOVIE TIME</div>
            <div className="navbar-items-container">
                <div className="search-container">
                    <input onChange={upDateSearch} type="text" className="search-field"/>
                    <div className="search-icon"></div>
                </div>
                <span>Home</span>
                <span>Favorites</span>
            </div>
        </nav>
      <FirstScreen/>
      <FilmDisplay movieDatas = {movieDatas} searchField={searchField}/>
    </div>
  );
}

export default App;
