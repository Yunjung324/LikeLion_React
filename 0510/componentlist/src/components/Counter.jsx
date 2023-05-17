import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
        setNumber(previous => previous + 1);
    }

    function decrement() {
        setNumber(number - 1);
    }

    return (
        <div>
            <p>Counter: {number}</p>
            <button onClick={increment}>+1</button>
            <button onClick = {decrement}>-1</button>
        </div>
    )
}
