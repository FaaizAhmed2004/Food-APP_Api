import React from 'react'
import './Footer.css'
import image from '../../assets/image.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
const  Footer = () => {
  return (
    <div className='footer-text'>
      <ul className='sec-0ne'>
        <p>Contact</p>
        <p>Feedback</p>
        <p>Trustiblity</p>
        <p>Quality and products</p>
      </ul>
      <ul className='sec-two'>
      <p>Certifications</p>
        <p>Foods</p>
        <p>Clients Reviews</p>
        <p>Social Feedback</p>
      </ul>
<div className='footer-icons'>
<img src={image} alt="" srcset="" height={60} width = {70} />
<img src={facebook} alt="" srcset="" height={60} width = {70} />
<img src={instagram} alt="" srcset="" height={60} width = {70} />
</div>
    </div>
  )
}

export default Footer