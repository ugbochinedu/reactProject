import React, { useState } from "react";
import './chat.css'

const Chat = (props) =>{

    const [inputvalue, setInputValue] = useState("")

    const textareaHandler =(e)=>{
        setInputValue(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        
         console.log(inputvalue);

         props.collectedInputValue(inputvalue)
    }

   

    return (
      <div className="main-box">
        <form action="" onSubmit={submitHandler}>
          <p>Comment here</p>
          <textarea name="" id="textarea" onChange={textareaHandler}></textarea>
          <button id="btn" type="submit">submit</button>
          <p>The value in the textarea is: {inputvalue}</p>
        </form>
      </div>
    );
}

export default Chat;