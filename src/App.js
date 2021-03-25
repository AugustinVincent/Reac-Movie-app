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

function App() {
  const [movieDatas, setMovieDatas] = useState([])
  const [firstMovie, setFirstMovie] = useState('empty')
  const [searchField, setSearchField] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(()=>
  {
    if(searchField !== '')
    {

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&language=en-US&sort_by=popularity.desc&page=${pageNumber}&query=${searchField}`)
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
      console.log()
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
  }, [searchField, pageNumber])

  const upDateSearch = (e) =>
  {
    setSearchField(e.target.value)
    setPageNumber(1)
  }

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
      <div className="pages-btns">
        <div onClick={previousPage} className="previous-btn btn">Previous</div>
        <div onClick={nextPage} className="next-btn btn">Next</div>
      </div>

    </div>
  );
  
  

}

export default App;
