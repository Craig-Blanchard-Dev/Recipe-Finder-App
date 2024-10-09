import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=b2135521d82247428c1aa0e66cc28b20&query=${query}&number=10&addRecipeInformation=true`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
      <h6>A Craig Blanchard Project</h6>
    </div>
  );
}

export default App;





