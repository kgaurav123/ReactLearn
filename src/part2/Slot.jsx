import React from 'react'
const SlotM = (props) => {
    let { x, y, z } = props
    if (x === y && y === z) {
        return (
            <>
                <p>{x}{y}{z}</p>
                <h1> This is Matching</h1>
            </>
        )
    }
    else {
        return (
            <>
                <p>{x}{y}{z}</p>
                <h1> This is not Matching</h1>
            </>
        )
    }
}
function Slot() {
    return (
        <>
            <h1> 🎰 Welcome to Slot Machine 🎰</h1>
            <SlotM x='😄' y='❤️' z='😍' />
            <SlotM x='😄' y='❤️' z='😍' />
            <SlotM x='😄' y='😄' z='😄' />

        </>
    )
}
export default Slot;