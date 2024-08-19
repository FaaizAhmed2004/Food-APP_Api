import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'

const Recipies = () => {


const fetchData =async()=>{
  const res = await fetch('https://dummyjson.com/recipies')
  const response = await res.json()
  console.log(response.recipies)
  setData(response.recipies)
}
useEffect(()=>{
fetchData()
},[])

  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <div>
          {data.map((value,index)=>(
            <div>
                  <h1>Value</h1>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Recipies