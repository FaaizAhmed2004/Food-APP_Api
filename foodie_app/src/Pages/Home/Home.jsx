import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from'../../Components/HeroSection/HeroSection';
import Cards from '../../Components/Cards/Cards';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/About/About';


const Home = () => {
  return (
    <div>
<>
<Navbar/>
</>
<HeroSection/>
<>
<Cards/>
<About/>
</>
<>
<Footer/>
</>

    </div>
  )
}

export default Home