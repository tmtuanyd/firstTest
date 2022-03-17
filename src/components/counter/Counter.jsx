import React from 'react';

const Counter = (props) => {
    const [count, setCount] = React.useState(0)
    const increment = () => {
        setCount((prev)=> prev + 1)
    }
    return (
        <div>
           <button onClick={increment}>Clicked: {count}</button> 
           <button onClick={props.changeName}>Change Name</button>
           <p id='name'>{props.name}</p>
        </div>
    );
};

export default Counter;