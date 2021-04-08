import React from 'react'
import './index.css'
import * as p from './Images'

function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <p.default imgsrc={props.imgsrc} />
                <div className="card_info">
                    <p.Title title={props.title} />
                    <p.name fname={props.fname} />
                    <p.link olink={props.olink} />
                </div>
            </div>
        </div>
    )
}
export default Card;