//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import Receipe from './Receipe';
import './App.css';


const App = () => { 

  const APP_ID = `1018ea25`;
  const APP_KEY = `07bd2f0134108e2a60ae9a2e13c3bf4f`;

  const [receipt, setReceipt] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
    console.log('let say we are fetching data to you');
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setReceipt(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className = "App">
      <form 
        onSubmit={getQuery} 
        className ="search-form">
          <input 
            className ="search-bar" 
            type = "text" 
            value={search} 
            onChange={updateSearch} />
          <button  className ="search-button" type ="submit">
          Search
        </button>
      </form>
      <div className="recipe">
        {receipt.map(receipe => (
          <Receipe
            key={receipe.recipe.label} 
            title={receipe.recipe.label}
            calories={receipe.recipe.calories}
            image={receipe.recipe.image}
            ingredients={receipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
    ) 
  }

export default App;
