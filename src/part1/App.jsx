// const youtuber = "gaurav"
// const name = "kumar"
// function myname() {
//     return "john cena";
// }
// function myname1() {
//     return "undertaker";
// }
// export default youtuber;
// export { name, myname, myname1 };



// import React from 'react'

// import * as q from "./Calc"
// function App() {
//     return (
//         <>
//             <ol>
//                 <li>
//                     Addition of two numbers are {q.add(3, 4)}
//                 </li>
//                 <li>
//                     Subtraction of two numbers are {q.sub(3, 4)}
//                 </li>
//                 <li>
//                     Multiplication of two numbers are {q.mul(3, 4)}
//                 </li>
//                 <li>
//                     Division of two numbers are {q.div(10, 3)}
//                 </li>
//             </ol>
//         </>
//     )
// }

// export default App;


import React from 'react'



import { Netflix, Rest } from './Images'
const favseries = 'Netfix'

const App = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", margin: "20px 0 20px 0", letterSpacing: "0.5px" }}>List of Netflix Series</h1>

            {(favseries === 'Netflix') ? <Netflix /> : <Rest />}
            {/* {
                Sdata.map((val, i, Sdaa) => {
                    return (
                        <Card key={val.id} imgsrc={val.imgsrc}
                            title={val.title}
                            fname={val.fname}
                            olink={val.olink}
                        />)
                })
            } */}
        </>
    )
}
export default App;