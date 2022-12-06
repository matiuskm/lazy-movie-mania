import "./App.css"
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie) => {
      return (
        <div className="movie-wrapper" key={movie.id}>
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
          <div className="movie-details">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-date">Release Date: {movie.release_date}</div>
            <div className="movie-rating">
              <FontAwesomeIcon icon={faStar} />
              &nbsp;
              {movie.vote_average}
            </div>
          </div>
        </div>
      )
    })
  }

  const search = async (e) => {
    if (e.key === "Enter") {
      const results = await searchMovie(e.target.value)
      setPopularMovies(results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lazy Movie Mania</h1>
        <input
          placeholder="cari film kesayangan..."
          className="movie-search"
          onKeyPress={(e) => search(e)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  )
}

export default App
