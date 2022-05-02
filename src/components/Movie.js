import React from 'react'
import { useParams } from 'react-router-dom'
import { useMoviesFetch } from '../hooks/useMoviesFetch'
import { BreadCrump } from './BreadCrumb'
import Grid from './Grid'
import { MovieInfo } from './MovieInfo/MovieInfo'
import { MovieInfoBar } from './MovieInfoBar/MovieInfoBar'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import noImage from '../images/no_image.jpg'
import Actor from '../components/Actor'
import Spinner from './Spinner'
import Crew from '../components/Crew'

export const Movie = () => {

  const { movieId } = useParams()
  const { state: movie, loading, error } = useMoviesFetch(movieId)


  const movieComponent = (
    <>
      <BreadCrump movieTitle={movie.original_title} />
      <MovieInfo movie={movie}/>
      <MovieInfoBar 
        time={movie.runtime} 
        budget={movie.budget}
        revenue={movie.revenue} 
      />
      <Grid header='Actor'>
        {movie.actors && movie.actors.map((actor) => (
          <Actor 
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            image={
              actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : noImage
            }
          />
        ))}
      </Grid>
      <br />
      <br />
      <Grid header='Crew'>
        {movie.crew && movie.crew.map( (crew) => (
          <Crew
            key={crew.credit_id}
            name={crew.name}
            job={crew.job}
            image={
              crew.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${crew.profile_path}` : noImage
            }
          />
        ))}
      </Grid>
      <br />
    </>
  )

  return (
    <>
     {loading ? <Spinner /> :    
      error ? <div style={{marginTop: '20px'}}>   Something Went Wrong....</div> : movieComponent}
    </>
  )
} 
