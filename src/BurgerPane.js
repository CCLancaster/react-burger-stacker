import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

function BurgerPane(props) {
    
    return (
        <div>
            <BurgerStack chosenIngredients={props.chosenIngredients} />
            <ClearBurger />
        </div>
    )
}

export default BurgerPane;
