import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Movie } from './components/Movie';
import NotFound from './components/NotFound';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
    <Footer />
  </Router>
);

export default App;
