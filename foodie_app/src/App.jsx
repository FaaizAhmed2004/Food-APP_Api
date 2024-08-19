import { useState } from 'react'
import './App.css'
import React from 'react'
import Home from './Pages/Home/Home'
import Recipies from './Pages/Recipies/Recipies'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    
        <>
        
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipie" element={<Recipies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App