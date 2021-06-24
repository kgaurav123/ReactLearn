// video34
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
            if (name === 'fname') {
                return {
                    Fname: value,
                    Lname: prevvalue.Lname,
                    Email: prevvalue.Email,
                    Phone: prevvalue.Phone,
                }
            }
            else if (name === 'lname') {
                return {
                    Fname: prevvalue.Fname,
                    Lname: value,
                    Email: prevvalue.Email,
                    Phone: prevvalue.Phone,
                }
            }
            else if (name === 'email') {
                return {
                    Fname: prevvalue.Fname,
                    Lname: prevvalue.Lname,
                    Email: value,
                    Phone: prevvalue.Phone,
                }
            }
            else {
                return {
                    Fname: prevvalue.Fname,
                    Lname: prevvalue.Lname,
                    Email: prevvalue.Email,
                    Phone: value,
                }
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
                <input type="text" name="fname" placeholder="Enter your first name" onChange={inputevent} value={name.Fname} />
                <input type="text" name="lname" placeholder="Enter your last name" onChange={inputevent} value={name.Lname} />
                <input type="email" name="email" placeholder="Enter your Email" onChange={inputevent} value={name.Email} />
                <input type="number" name="phone" placeholder="Enter your Phone number" onChange={inputevent} value={name.Phone} />
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

// import React from 'react'
// import Reactdom from 'react-dom'
// Reactdom.render(<>

// </>, document.getElementById('root'))
// const fname = ['gaurav', 'kumar']
// const mix = [1, ...fname, 24, 'male']//spread operators
// console.log(mix)
// console.log(fname)

// var games = ['call of duty', 'pubg', 'sabzi']
// var [first, ...remaining] = games;
// console.log(first)
// console.log(remaining)