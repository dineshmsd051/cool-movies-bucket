import React from 'react';
import PropTypes from 'prop-types'
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ name, character, image }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  image: PropTypes.string
}

export default Actor