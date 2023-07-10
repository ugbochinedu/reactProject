import React from "react";
import { useState } from "react";

const Form = (props) =>{
    const[first, setfirst] = useState("");
    const[last, setLast] = useState("");

    const inputFirstHandler = (e) =>{
        setfirst(e.target.value);
        // console.log(first)
    }

    const inputLastHandler = (e) =>{
        setLast(e.target.value);
        // console.log(last)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(setfirst)
        // console.log(setLast)
        // console.log(first)
        // console.log(last)
        const value = {
            first: first,
            second: last,
        }
        props.collectValue(value)
        console.log(value)

        // setfirst("")
        // setLast("")
    }



    return(
        <div>
           <form action="" onSubmit={submitHandler}>
           <label htmlFor="">firstName</label>
            <input type="text" value={first} onChange={inputFirstHandler}/>
            <label htmlFor="">LastName</label>
            <input type="text" value={last} onChange={inputLastHandler} />
            <input type="submit" value="submit  " />
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Form;