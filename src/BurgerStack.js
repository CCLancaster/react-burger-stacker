import React from 'react';

function BurgerStack(props) {
    console.log(props.chosenIngredients);
    return (
        <div>
            <ul>
                {props.chosenIngredients.map((ingredient, i) => (
                   
                    <li key={i}>{ingredient.name}</li>
                ))}
            </ul>
        </div>
    )

}

export default BurgerStack;