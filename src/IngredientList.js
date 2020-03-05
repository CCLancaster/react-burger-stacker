import React from 'react';

function IngredientList(props) {
    
    return (
        <ul>
            {props.ingredients.map((ingredient, i) => (
                <li key={`ingredientname-${i}`}>{ingredient.name}<button onClick={(e) => {props.addIngredient(e, i);}}>+</button></li>
            ))}
        </ul>
    )
    }

export default IngredientList; 