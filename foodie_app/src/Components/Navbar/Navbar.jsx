import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='header'>
      <ul className='navbar'>
        <li className='logo'>Foodie Recipies</li>
    <li >Home</li>
        <li>Recipe</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar