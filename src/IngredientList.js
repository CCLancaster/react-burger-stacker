import React from 'react';

function IngredientList(props) {
    
    return (
        <ul>
            {props.ingredients.map((ingredient, i) => (
                <li key={`ingredientname-${i}`}>{ingredient.name}</li>
            ))}
        </ul>
    )
    }

    // onClick={(e) => {props.addFunctionHere(e, i);}}
export default IngredientList; 