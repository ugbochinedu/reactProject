import React, {useState} from "react";

const Number = () =>{

    const[enteredNumber, setEnteredNumber] = useState("0")

    const manipulateNumber = event =>{
        let text = event.target.value;
    //    if(+enteredNumber >= 0){
    //         if (text == 1) {
    //             setEnteredNumber(+enteredNumber + 1)
    //         }
    //         else if (text == -1) {
    //             setEnteredNumber(+enteredNumber - 1)
    //         }
    //         else if (text == 5) {
    //             setEnteredNumber(+enteredNumber + 5)
    //         }
    //         else if (text == -5) {
    //             setEnteredNumber(+enteredNumber - 5)
    //         }
    //         return enteredNumber;
    //    }
        if(text == 1){
            let value = +enteredNumber + 1
            if(value >= 0){
                setEnteredNumber(value)
            }
        }
        if(text == -1){
            let value = +enteredNumber - 1
            if(value >= 0){
                setEnteredNumber(value)
            }
        }
        if(text == 5){
            let value = +enteredNumber + 5
            if(value>= 0){
                setEnteredNumber(value)
            }
        }
        if(text == -5){
            let value = +enteredNumber - 5
            if(value >= 0){
                setEnteredNumber(value)
            }
        }
        // return enteredNumber;
    }

    return(
        <div>
            <p>{enteredNumber}</p>
            <button type="button" value={1} onClick={manipulateNumber}>1</button>
            <button type="button" value={-1} onClick={manipulateNumber}>-1</button>
            <button type="button" value={5} onClick={manipulateNumber}>5</button>
            <button type="button" value={-5} onClick={manipulateNumber}>-5</button>
        </div>
    )
}

export default Number;