import React, {useState, useEffect} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import './components/Favorites/Favorites.css';
import './components/Navbar.css'
import FirstScreen from './components/HomePage/FirstScreen/FirstScreen'
import FilmDisplay from './components/HomePage/FilmDisplay/FilmDisplay'
import FavoriteFilmDiplay from './components/Favorites/FavoriteFilmDisplay'

document.addEventListener('scroll', (event) =>
{
  if(event.path[1].scrollY > 100)
  {
    document.querySelector('.navbar.header-navbar').style.background = 'rgba(1,5,17, 0.6)'
    document.querySelector('.navbar.header-navbar').style.backdropFilter = 'blur(10px)'
  }
  else
  {
    document.querySelector('.navbar.header-navbar').style.background = 'none'
    document.querySelector('.navbar.header-navbar').style.backdropFilter = 'none'
  }
})

if(localStorage.length < 1)
{
  localStorage.setItem('FavoriteMovies', JSON.stringify([]))
}

function App(){
  const [searchField, setSearchField] = useState('')
  const [favoritesMovies, setFavoritesMovies] = useState(JSON.parse(localStorage.getItem('FavoriteMovies')))

  const upDateSearch = (e) =>
  {
    setSearchField(e.target.value)
    // setPageNumber(1)
  }

  return (
    <Router>
      <div>
        <div className="App">
          <nav className="navbar header-navbar">
              <div className="movie-time-logo"><Link to='/'>MOVIE TIME</Link></div>
              <div className="navbar-items-container">
                {
                  window.location.pathname == "/" &&
                  <div className="search-container">
                      <input onChange = {upDateSearch} type="text" className="search-field"/>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" alt="" className="search-icon"/>
                  </div>
                }

                  <span><Link to='/'>Home</Link></span>
                  <span><Link to='/favorites'>Favorites</Link></span>
              </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
              <Home searchField = {searchField} favoritesMovies={favoritesMovies}/>
          </Route>
          <Route exact path="/favorites">
              <Favorite favoritesMovies={favoritesMovies}/>
          </Route>
        </Switch>
      </div>
    </Router>

)}

function Home(props) {
  const [movieDatas, setMovieDatas] = useState([])
  const [firstMovie, setFirstMovie] = useState('empty')
  const [pageNumber, setPageNumber] = useState(1)
<<<<<<< HEAD
=======


>>>>>>> router
  useEffect(()=>
  {
    if(props.searchField !== '')
    {

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US&sort_by=popularity.desc&page=${pageNumber}&query=${props.searchField}`)
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
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&sort_by=popularity.desc&page=${pageNumber}`)
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
  }, [props.searchField, pageNumber])

<<<<<<< HEAD
  const upDateSearch = (e) =>
  {
    setSearchField(e.target.value)
    setPageNumber(1)
  }
=======
>>>>>>> router

  const previousPage = () =>
  {
    if(pageNumber > 1)
    {

      const tempNumber = pageNumber - 1
      setPageNumber(tempNumber)

      window.scrollTo({ top : 0, behavior : 'smooth'})
    }
  }

  const nextPage = () =>
  {
    const tempNumber = pageNumber + 1
    setPageNumber(tempNumber)

    window.scrollTo({ top : 0, behavior : 'smooth'})
  }
  
  return (
    <div className="App">
<<<<<<< HEAD
      <nav className="navbar header-navbar">
            <div className="movie-time-logo">MOVIE TIME</div>
            <div className="navbar-items-container">
                <div className="search-container">
                    <input onChange={upDateSearch} type="text" className="search-field" value={searchField}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" alt="" className="search-icon"/>
                </div>
                <a href='#' ><span>Home</span></a>
                <span>Favorites</span>
            </div>
        </nav>
      {/* <Navbar searchField={}/> */}
      <FirstScreen firstMovie={firstMovie}/>
      <FilmDisplay movieDatas = {movieDatas}/>
=======
      {/* <Navbar/> */}
      <FirstScreen favoritesMovies={props.favoritesMovies} firstMovie={firstMovie}/>
      <FilmDisplay favoritesMovies={props.favoritesMovies} movieDatas = {movieDatas}/>
>>>>>>> router
      <div className="pages-btns">
        <div onClick={previousPage} className="previous-btn btn">Previous</div>
        <div onClick={nextPage} className="next-btn btn">Next</div>
      </div>

    </div>
  );  
}

function Favorite(props) {
    return (
        <div className="favorites-container">
          <FavoriteFilmDiplay favoritesMovies={props.favoritesMovies}/>
        </div>
        )
    }
  
export default App;



 
