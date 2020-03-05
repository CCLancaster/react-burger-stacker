import React from 'react';

function ClearBurger(props) {
    
    return (
        <div class="clear">
            <input type="button" id="stacktable"></input>
            <button class="eatme" onClick={() => {props.clearBurger();}}>🍔Eat Me 🍔</button>
        </div>
    )
}

export default ClearBurger;