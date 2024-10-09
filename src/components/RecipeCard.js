import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>
      {}
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">View Recipe</a>
    </div>
  );
};

export default RecipeCard;
