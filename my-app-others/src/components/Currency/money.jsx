import React, { useState } from "react";
import './money.css'
const Money =() =>{

    const [inputValue, setInputValue] = useState(0);
    
    let convertRate = 500;

    const changeHandler =(e) =>{
        let requestedValue = e.target.value;
        let convertedValue = convertRate * requestedValue
        setInputValue(convertedValue)
    }
 
    return(
        <div className="main-box">
            <h1>Currency Converter</h1>
            <p className="ptag">Check live rates, set rate alerts, receive notificatons and more</p>
            <form action="">
                
                <div className="input">
                    <p>Amount <span>(NGN)</span></p>
                    <input type="number" min={0} onChange={changeHandler}/>
                </div>
                <div className="input">
                    <p>Converted Amount <span>(dollar)</span></p>
                    <input type="number" value={inputValue}/>
                </div>
            </form>
        </div>
    )
}

export default Money;