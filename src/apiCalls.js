import { key } from './apiKey'

export const fetchMovies = async () => {
  try {
    const response = await fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&include_adult=false&page=1`)
    if (!response.ok) {
      throw new Error('Error fetching movies')
    }
    const movies = await response.json()
    return movies.results
  }
  catch (error) {
    throw new Error(error.message)
  } 
}

export const fetchStoreProperties = async (url, object, method, error) => {
  try {
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    }
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(error)
    }
    const user = await response.json()
    return user;
  }
  catch (error) {
    throw new Error(error.message)
  }
}