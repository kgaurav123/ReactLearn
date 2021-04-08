import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
function Images(props) {
    return (
        <img src={props.imgsrc} alt="mypic" className="card_img" />
    )
}
function Title(props) {
    return (
        <span className="Card_category">
            {props.title}
        </span>
    )
}
const Netflix = () => {
    return (
        <Card key={Sdata[0].id} imgsrc={Sdata[0].imgsrc} title={Sdata[0].title} fname={Sdata[0].fname} olink={Sdata[0].olink} />
    )
}
const Rest = () => {
    return (
        <Card key={Sdata[3].id} imgsrc={Sdata[3].imgsrc} title={Sdata[3].title} fname={Sdata[3].fname} olink={Sdata[3].olink} />
    )
}
const name = (props) => {
    return (
        <h3 className="card_title">{props.fname}</h3>
    )
}
const link = (props) => {
    return (
        <a href={props.olink} target="_blank" rel="noreferrer">
            <button>Watch Now</button>
        </a>
    )
}
export default Images;
export { Title, name, link, Netflix, Rest };
