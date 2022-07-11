import React, {  useEffect, useState} from 'react'
import movieTrailer from 'movie-trailer'
import ReactPlayer from 'react-player';
import { getMovies } from '../api'
import './Row.css'

const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({title,path,isLarge}) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl , setTrailerUrl] = useState([])

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data ", data)
      setMovies(data?.results)

    } catch (error) {
      console.log('Metodo fecthMovies: ',error)
    }
  }

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  const handleOnClick = (movie) => {
  
    movieTrailer (movie?.title ||movie?.name ||movie?.original_name )
      .then( response => 
        setTrailerUrl(response)
      )

      .catch((error)=>{
        console.log("movieTrailer error: ",error)
      })
  //proxima feature é implementar o modal
  }
  
  return (
   <div className="row-container">
    <h2 className="row-header">{title}</h2>
   
    <div className="row-cards">
      {movies?.map((movie) => {
        return (
          <img
            className={`movie-card ${isLarge? 'movie-card-large': ''}`}
            onClick={() => handleOnClick(movie)}
            key={movie.id}
            src={`${imageHost}${
            isLarge? movie.backdrop_path  :
              movie.poster_path 
          }`}
          alt={movie.name}
        ></img>
        );
      })}
    </div>
      {trailerUrl && < ReactPlayer url={trailerUrl} /> } 
    
    </div>
  )
}

export default Row
