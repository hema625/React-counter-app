import React from 'react';

const counter = (props) => {
    return (
           <fragment>
                <h1>React Number click</h1>
                 <br/> <h2>{props.val}</h2> <br/>
                 <button onClick = {props.increment}>+</button>
                 <button onClick = {props.reset}>Reset</button>
                 <button onClick = {props.decrement}>-</button>
           </fragment>

           
    )


}

export default counter;