import React from 'react';

function ClearBurger(props) {
    
    return (
        <div>
            <button onClick={() => {props.clearBurger();}}>Clear Burger</button>
        </div>
    )
}

export default ClearBurger;