import {useState, useEffect } from 'react'
import API from '../API'


export const useMoviesFetch = movieId => {

  const [state, setstate] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  
  useEffect(() => {
    
    const fetchMovieData = async () => {
      try {  
        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        const directors =  credits.crew.filter(
          e => e.job === 'Director'
        )
        setLoading(false)
        setError(false)
        setstate({
          ...movie,
          actors: credits.cast,
          crew: credits.crew,
          directors
        })
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }

    fetchMovieData()

  }, [movieId])
  
  return { state, loading, error }
}
