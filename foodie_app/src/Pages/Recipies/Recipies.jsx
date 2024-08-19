import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from '../../Components/HeroSection/HeroSection';  
import Footer from '../../Components/Footer/Footer' 


const Recipes = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/recipies');
      const response = await res.json();
      setData(response.recipes); // Potential typo fix: 'recipes' (assuming it exists)
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors gracefully, e.g., display a fallback UI or retry mechanism
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to fetch data only once on initial render

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div>
        {data.length > 0 ? ( // Check if data has loaded before rendering
          data.map((recipe, index) => ( // Consistent variable naming
            <div key={index}> 
              <h2>{recipe.name}</h2>
              <li>{recipe.ingredients}</li>
              <li>{recipe.instructions}</li>
            </div>
          ))
        ) : (
          <p>Loading recipes...</p> // Display loading indicator while fetching data
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Recipes;