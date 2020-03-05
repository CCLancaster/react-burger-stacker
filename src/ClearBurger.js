import React from 'react';

function ClearBurger(props) {
    
    return (
        <div class="clear">
            <input type="button" class="stacktable"></input>
            <button onClick={() => {props.clearBurger();}}>Clear Burger</button>
        </div>
    )
}

export default ClearBurger;