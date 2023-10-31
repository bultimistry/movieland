import React from 'react'

import {useState, useEffect } from 'react'; 
import './App.css'; 
import SearchIcon from './search.svg' 
import MovieCard from './MovieCard';
// fb978591 

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=fb978591'
//http://www.omdbapi.com/?i=tt3896198&apikey=fb978591

/*const movie1 = {
  "Title": "Amazing spider man", 
  "Year": "2012", 
  "imdbID": "fb978591", 
  "Type": "movie", 
  "Poster": "N/A"
} */

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchbar, setSearchbar] = useState(''); 

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }
  useEffect(()=>{
   searchMovies('spiderman')
  }, []);

  return (
    <div className='app'>
     <h1>MoviesLand</h1>

     <div className='search'>
      <input 
      placeholder='search for movies' 
      value={searchbar}
      onChange={(e)=>setSearchbar(e.target.value)}
      />
      <img  
      src={SearchIcon}
      alt='search'
      onClick={()=>searchMovies(searchbar)}
      />
     </div> 

     {
      movies?.length > 0 
      ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        
       </div>
      ) : (
        <div className='empty'>
          <h2>No Movies found</h2>
        </div>
      )
     
      }
     
    </div>
      
  )
}

export default App