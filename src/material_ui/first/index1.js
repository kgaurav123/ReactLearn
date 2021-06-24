import React, { useState } from 'react'
import Reactdom from 'react-dom'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import './material_ui/first/index.css'
import Tooltip from '@material-ui/core/Tooltip';
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
                        <Tooltip title="Add">
                            <Button onClick={incnum} ><AddIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Remove">
                            <Button onClick={decnum} ><DeleteIcon /></Button>
                        </Tooltip>
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