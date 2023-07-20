import React from "react";
import img from './images/photo-1.jpeg'
import './message.css'
const Message = (props) =>{

    console.log(props.receievedMessage);

    return (
      <div className="main">
        <img id="img" src={img} alt="" />
        <div className="msg-box">{props.message}</div>
      </div>
    );
}

export default Message;