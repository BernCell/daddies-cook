import React from 'react';

const Card = ({ meal }) => {
    
    
    return (
        <li className="card">
            <img src={meal.strMealThumb} alt={"photo " + meal.strTags} />
            <div className="infos">
                <h2>
                   {meal.strMeal}
                </h2>
                <h2>{"type: " + meal.strCategory}</h2>
                <h4>{"origine: " + meal.strArea}</h4>
                <p>{meal.strInstructions} </p>
            </div>
        </li>
    );
};

export default Card;