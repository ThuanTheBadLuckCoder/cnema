import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cnema from './Pages/Cnema';
import News from './Pages/News';
import More from './Pages/More';
import LoginSignup from './Pages/LoginSignup';
import FilmCategory from './Pages/FilmCategory';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cnema/>}/>
          <Route path="/Movies" element={<FilmCategory/>}/>
          <Route path="/News" element={<News/>}/>
          <Route path="/More" element={<More/>}/>


          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
        <Cnema/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
