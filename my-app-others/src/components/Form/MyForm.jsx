import React, { useState } from "react";

const MyForm = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");

  const firstNameHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneNumberHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const details = {
        name: enteredFirstName,
        email: enteredEmail,
        phoneNumber: enteredPhoneNumber,
    };

    console.log(details)

    setEnteredEmail('')
    setEnteredFirstName("")
    setEnteredPhoneNumber("")

    // console.log(enteredFirstName);
    // console.log(enteredEmail);
    // console.log(enteredPhoneNumber);
  };

  // console.log(enteredFirstName)

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Firstname</label>
          <input type="text" value={enteredFirstName} onChange={firstNameHandler} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" value={enteredEmail} onChange={emailHandler} />
        </div>
        <div>
          <label htmlFor="">phone Number</label>
          <input type="number" value={enteredPhoneNumber} onChange={phoneNumberHandler} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default MyForm;
