import React from 'react';
import Nav from './Components/Nav';
import Header from './Components/Headers/Header';
import Search from './Components/Search';
import Filter from './Components/MoviesDisplay/Filter';
import Movies from './Components/MoviesDisplay/Movies';

const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Search/>
      <Filter/>
      <Movies/>
    </div>
  );
};

export default App;