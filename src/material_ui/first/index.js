import React, { useState } from 'react'
import Reactdom from 'react-dom'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import './index.css'
const App = () => {
    const [c, setc] = useState(0);
    const incnum = () => {
        setc(c + 1);
    }
    const decnum = () => {
        if (c === 0) {
            return alert('number is zero')
        }
        setc(c - 1);
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{c}</h1>
                    <div className="btn_div">
                        <button onClick={incnum} ><AddIcon /></button>

                        <button onClick={decnum} ><DeleteIcon /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)