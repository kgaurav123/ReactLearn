import React, { useState } from 'react'
import Reactdom from 'react-dom'
const App = () => {
    const [name, setname] = useState({
        Fname: "",
        Lname: "",
        Email: "",
        Phone: "",
    });
    const inputevent = (event) => {

        const { value, name } = event.target;
        setname((prevvalue) => {
            // console.log(prevvalue);
            return {
                ...prevvalue,
                [name]: value,
            }

        })
    }


    const final = (e) => {
        e.preventDefault();
        alert('form submitted')
    }
    return (
        <>
            <form onSubmit={final}>
                <h1> Hello {name.Fname} {name.Lname} </h1>
                <p>{name.Email} {name.Phone}</p>
                <input type="text" name="Fname" placeholder="Enter your first name" onChange={inputevent} value={name.Fname} />
                <input type="text" name="Lname" placeholder="Enter your last name" onChange={inputevent} value={name.Lname} />
                <input type="email" name="Email" placeholder="Enter your Email" onChange={inputevent} value={name.Email} />
                <input type="number" name="Phone" placeholder="Enter your Phone number" onChange={inputevent} value={name.Phone} />
                <button type="submit">Click Me</button>
            </form>
        </>
    )

}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)
