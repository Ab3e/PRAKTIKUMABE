import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Contact from './contact/Contact';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <div className='oyo'> 
        <span className="logo">
          <img src="/img/kitchen kicik PP.png" alt="logo" width={'120'}/>
        </span>
        </div>
        <div className='oya'>
        <NavLink to="/about">
          <button className='ButtonAppAbout1'>About</button>
        </NavLink>
        <NavLink to="/">
          <span className='icon-home'></span>
          <button className='ButtonAppHome1' >Home</button>
        </NavLink>
        <NavLink to="/projects">
          <button className='ButtonAppMenu1'>Menu</button>
        </NavLink>
        <NavLink to="/contact">
          <button className='ButtonAppContact1'>Contact</button> 
        </NavLink>
        </div>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<Contact/>} />
       </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
