
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Recipes = () => {

  const [mealsData, setMealsData] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  const [sorting, setSorting] = useState(null)

  // le useEffect quand le composant est monté. Ne pas oublier le callback
  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch).then((res) => setMealsData(res.data.meals));

  }, [inputSearch])


  return (

    <div className="cooking">

      <input type="text" placeholder='Cherchez un aliment' onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="btn-sort-container">
        <div className="btn-sort" id="top" onClick={() => setSorting("top")}><h2>Top</h2> <span>👍🏻</span> </div>
        <div className="btn-sort" id="flop" onClick={() => setSorting("flop")}><h2>Flop </h2><span> 👎🏻</span> </div>
      </div>


      <ul>
        {mealsData && mealsData.slice(0, 24).
          sort((a, b) => {

            if (sorting === "top") {
              return b.vote_average - a.vote_average;
            }
            else if (sorting === "flop") {
              return a.vote_average - b.vote_average
            }
          }
          ).map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
      </ul>
    </div>

  );
};

export default Recipes;