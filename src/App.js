import React, {useState, useEffect} from 'react'
import './App.css';
import FirstScreen from './components/FirstScreen/FirstScreen'
import Navbar from './components/Navbar/Navbar'
import FilmDisplay from './components/FilmDisplay/FilmDisplay'

const LINK_API = "https://api.themoviedb.org/3/discover/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&sort_by=popularity.desc"
const IMG_API = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=0bb47688d9717ccbbc0f747be389c94a&query="

function App() {
  const [movieDatas, setMovieDatas] = useState([])

  useEffect(() =>
  {
    fetch(LINK_API).then(res => res.json())
    .then(res => {
      setMovieDatas(res.results)
      console.log(res.results)
    })
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <FirstScreen/>
      <FilmDisplay movieDatas = {movieDatas}/>
    </div>
  );
}

export default App;
