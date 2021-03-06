import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

function App() {
  let [ingredients, setIngredients] = useState([
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]);

  let [chosenIngredients, setChosenIngredients] = useState([]);
  
  //going to need an addIngredient handler that adds an ingredient to my chosenIngredients array
  let addIngredient = (e, ingredients) => {
    e.preventDefault();
    console.log(ingredients)
    console.log(chosenIngredients)
    setChosenIngredients([ingredients, ...chosenIngredients]);
  }

  let clearBurger = () => {
    setChosenIngredients( [] )
  }

  return(
    <div class="app">
      <IngredientList ingredients={ingredients} addIngredient={addIngredient}/>
      <BurgerPane chosenIngredients={chosenIngredients} clearBurger={clearBurger} />
    </div>
  );
}

export default App;
