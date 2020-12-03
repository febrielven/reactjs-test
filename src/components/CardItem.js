import React from 'react';
import {Card} from 'react-bootstrap'

export default function CardItem(props){
    return(
        <>
            <Card>
                <Card.Body>
                    <h2 style={textPoint}>{props.point}</h2>
                    <p>{props.text}</p>
                </Card.Body>
            </Card>
        </>
    )
}

const textPoint = {
    color: '#0036A0',
    fontWeight: 700
}