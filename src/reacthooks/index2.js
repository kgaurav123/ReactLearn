import React, { useState } from 'react'
import Reactdom from 'react-dom'
function App() {
    let time = new Date().toLocaleTimeString()
    const [ctime, settime] = useState(time)
    function Updatetime() {
        time = new Date().toLocaleTimeString()
        settime(time)
    }
    setInterval(Updatetime, 1000);
    return (
        <>
            {ctime}

        </>
    )
}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)