import React from "react";
import Card from "../Ui/Card";

const AddUser = (props) => {

    const AddUserHandler = (event) =>{
        event.preventDefault();
    }

    const Handler1 = () => {

    }

    const Handler = () => [

    ]

    return(
       <Card>
             <form action="" onSubmit={AddUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={Handler1}/>
                <label htmlFor="username">Age (Years)</label>
                <input id="username" type="number" onChange={Handler}/>
                <button type="submit">Submit</button>
            </form>
       </Card>
    )
}

export default AddUser;