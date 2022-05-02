import React from 'react'
import { Wrapper, Content, Divider } from './Footer.styles'

export const Footer = () => {

  const LinkStyle = {
    color: "red",
    fontWeight: 'bold'
  };

  return (
    <Wrapper>
      <Content>
        <p>This is demo movies app made by <a href='https://www.instagram.com/_bettr_thn_nrml/?hl=en' target='_blank' rel="noopener noreferrer"><span style={LinkStyle}>me.</span></a></p>
        <Divider />
        <h3 style={{textDecoration: 'underline'}}>Credits</h3>
          <p>All Movie Details API provided by <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'><span style={LinkStyle}>themoviedb.org</span></a></p>
          <p>Freecodecamp
          View Tutorial <a href='https://youtu.be/nTeuhbP7wdE' target='_blank' rel="noopener noreferrer"><span style={LinkStyle}>here</span></a></p>
          <p>Tutorial Made by weibenfalk See his channel<a href='https://www.youtube.com/weibenfalk' target='_blank' rel='noopener noreferrer'><span style={LinkStyle}> here</span></a></p>
      </Content>
    </Wrapper>
  )
}
