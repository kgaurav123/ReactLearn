import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
// function ncard(val) {
//   return (
//     <Card imgsrc={val.imgsrc}
//       title={val.title}
//       fname={val.fname}
//       olink={val.olink}
//     />
//   )
// }
ReactDom.render(
  <>
    <App />
  </>, document.getElementById('root')
)