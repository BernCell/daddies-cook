import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cooking from './pages/Cooking';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>        
        <Route path='/' element={<Home />} >      
        </Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/cooking' element={<Cooking />} ></Route>
        <Route path='*' element={<Home />} ></Route>

      </Routes>
    </BrowserRouter>
  
  );
};

export default App;