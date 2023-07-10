import React from "react";
import classses from './Card.module.css'

const Card = (props) =>{

    return(
        <div className= {classses.card}>
            {props.children}
        </div>
    )
}

export default Card;