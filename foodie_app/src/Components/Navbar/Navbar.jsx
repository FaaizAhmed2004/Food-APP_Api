import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='header'>
      <ul className='navbar'>
        <li className='logo'>Foodie Recipies</li>
        <li><Link to="/" className='navlink'>Home</Link></li>
        <li><Link to="/recipie" className='navlink' >Recipe</Link></li>
        <li><Link to="/about" className='navlink'>About</Link></li>
        <li><Link to="/contact" className='navlink'>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar