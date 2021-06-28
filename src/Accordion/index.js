import React, { useState } from 'react'
import Reactdom from 'react-dom'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { questions } from './Api';
import "./index.css";
const MyAccordion = ({ question, answer }) => {
    const [show, setshow] = useState(false);

    return (
        <>
            <div className="main-heading">
                <p onClick={() => setshow(!show)}>{show ? "-" : "+"}</p>

                <h3>{question}</h3>
            </div>
            {show && <p className="answers">{answer}</p>}
        </>
    )
}
const Accordion = () => {

    return (
        <>
            <section className="main-div">
                <h6>React Interview Questions</h6>
                {questions.map((ques) => {
                    const { id } = ques;
                    return <MyAccordion key={id} {...ques} />;
                })}
            </section>
        </>
    )

}
Reactdom.render(
    <>
        <Accordion />
    </>, document.getElementById('root')
)