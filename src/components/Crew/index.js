import React from 'react';
import { Wrapper, Image } from './Crew.styles'

const Crew = ( { name, job, image } ) => {
   
  return (
   <Wrapper>
    <Image src={image}/>
    <h4>{name}</h4>
    <p>{job}</p>
   </Wrapper>
  )
}

export default Crew
