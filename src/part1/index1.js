// //Image Gallery
// import React from 'react'
// import ReactDom from 'react-dom'
// import './index.css'
// const flname = 'vinod'
// const llname = 'vinod'
// const url1 = "https://source.unsplash.com/collection/190727/400x301"
// const url2 = "https://source.unsplash.com/collection/190727/400x300"
// const url3 = "https://source.unsplash.com/collection/190727/401x300"
// const heading = {
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     color: '#fa9191',
//     fontWeight: 'bold',
//     textShadow: '0px 2px 4px #000',
//     margin: '50px 0',
// };
// var current = new Date();
// ReactDom.render(<>
//     <h1 style={heading} >Image gallery it is</h1>
//     <div className="gallery">
//         <img src={url1} />
//         <img src={url2} />
//         <img src={url3} />
//     </div>
// </>, document.getElementById('root'))



// Greeting 
// import React from "react";
// import ReactDom from "react-dom";
// import "./index.css";
// let current = new Date();
// var greeting = "";
// const cssstyle = {};
// if (current.getHours() >= 1 && current.getHours() <= 11) {
//   greeting = "Morning";
//   cssstyle.color = "green";
// } else if (current.getHours() > 11 && current.getHours() <= 19) {
//   greeting = "Evening";
//   cssstyle.color = "orange";
// } else {
//   greeting = "Night";
//   cssstyle.color = "blue";
// }
// ReactDom.render(
//   <div>
//     <h1>
//       Hello Sir, <span style={cssstyle}>Good {greeting}</span>
//     </h1>
//   </div>,
//   document.getElementById("root")
// );


//Components
// import React from 'react'
// import ReactDom from 'react-dom'
// import * as q from './App'
// //import def,{name,myname,myname1} from './App'
// ReactDom.render(<>
//   <ol>
//     <li>{q.default}</li>
//     <li>{q.name}</li>
//     <li>{q.myname()}</li>
//     <li>{q.myname1()}</li>

//   </ol>


// </>, document.getElementById('root'))