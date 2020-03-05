import React from 'react';

function BurgerStack(props) {
    
    return (
        <ul>
            {props.chosenIngredients.map((ingredient, i) => (
                <li key={`newingredient-${i}`}>{ingredient.name}</li>
            ))}
        </ul>
    )
}

export default BurgerStack;