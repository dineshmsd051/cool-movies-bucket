import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './BreadCrumb.styles';

export const BreadCrump = ({ movieTitle }) => {

  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  )
}
  
BreadCrump.propTypes = {
 movieTitle: PropTypes.string
}
