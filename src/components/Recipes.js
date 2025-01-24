
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Recipes = () => {
    
    const [mealsData, setMealsData] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    
    // le useEffect quand le composant est monté. Ne pas oublier le callback
    useEffect(() => {
       axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch).then((res) => setMealsData(res.data.meals));

    }, [inputSearch])    


    return (
                    
          <div className="cooking"> 
          
          <input type="text" placeholder='Cherchez un aliment' onChange={(e) => setInputSearch(e.target.value)} 
            />
           
          

          <ul>
            {mealsData && mealsData.slice(0, 24).map((meal) => (
                <Card key={meal.idMeal} meal={meal} />
            ))}
          </ul>
          </div>
        
    );
};

export default Recipes;