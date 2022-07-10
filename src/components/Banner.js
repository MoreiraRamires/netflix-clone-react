import React from 'react'
import { useState, useEffect} from 'react'
import categories, { getMovies } from '../api'
import './Banner.css'

function Banner() {
  const [movie,setMovie] = useState({})

  const fetchRandomMovie = async (_path) => {

    try {
      const netflixOriginalCategory = categories.find(
        category => category.name === 'netflixOriginals'
      )
      const data = await getMovies(netflixOriginalCategory.path);
      const randomIndex = Math.floor(Math.random() * data.results.length)
      
    } catch (error) {
      console.log('Banner fetchRandomMovie:  ',error)
    }
  }
  useEffect(() => {
 
  }, [])
  


  return (
    <>
      <header className="banner-container" 
       style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg")`,
        roundPosition: "center-center",
      }}></header>
      <section className="banner-content">
        <h1 className="banner-title"></h1>
        <div className="banner-buttons-container">
          <button className="banner-button"></button>
          <button className="banner-button"></button>
        </div>
        <div className="banner-description"></div>
      </section>
    </>
  )
}

export default Banner