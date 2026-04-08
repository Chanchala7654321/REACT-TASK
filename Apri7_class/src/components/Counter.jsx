import React, { useState } from 'react'

import './Counter.css'

function Counter({ title }) {
    const [count, setCount] = useState(0)

    return (
        <div className='counterContainer'>
            <h2>{title}</h2> 
            <div className='counter'>
                <h3>Count is {count}</h3>
                <button onClick={() => setCount(count + 1)}>+ 1</button>
                <button onClick={() => setCount(count - 1)}>- 1</button>
                <button onClick={() => setCount(count + 3)}>+ 3</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter