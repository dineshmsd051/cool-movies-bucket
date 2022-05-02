import React from 'react'
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config'
import Thumb from '../Thumb'
import Noimage from '../../images/no_image.jpg'
import { Wrapper, Content, Text } from './MovieInfo.styles'

export const MovieInfo = ({movie}) => {
  return (
    <Wrapper backdrop={movie.poster_path}>
      <Content>
        <Thumb 
          clickable={false}          
          image={ 
            movie.poster_path ?
            `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}` : Noimage
          }
        />
        <Text>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className='director'>
            <h4>Director(s) : </h4>
            {
              movie.directors && movie.directors.map( (director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))
            }
          </div>    
        </Text>
      </Content>
    </Wrapper>
  )
}
