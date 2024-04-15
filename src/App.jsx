import React from 'react';
import Nav from './Components/Nav';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import { Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
        <Route path='/search/:search' element={<Search/>}/>

      </Routes>
      
    </div>
  );
};

export default App;