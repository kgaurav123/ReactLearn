import React, { useState } from 'react'
import Reactdom from 'react-dom'
let count = 1
const App = () => {
    const [count, setcount] = useState(0)
    const incnum = () => {
        setcount(count + 1)
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={incnum}>Click me</button>

        </>
    )
}

Reactdom.render(
    <>


        <App />

    </>, document.getElementById('root')
)