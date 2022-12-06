import axios from "axios"

export const getMovieList = async () => {
  const movies = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
  )
  return movies.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${process.env.REACT_APP_BASEURL}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${q}`
  )
  return search.data.results
}
