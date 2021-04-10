import React, { useState } from 'react'
import Reactdom from 'react-dom'


function App() {
    let time = new Date().toLocaleTimeString();
    const [ctime, settime] = useState(time)
    const Updatetime = () => {
        time = new Date().toLocaleTimeString();
        settime(time)
    }
    return (
        <>
            {ctime}
            <button onClick={Updatetime}>Get Time</button>
        </>
    )
}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)