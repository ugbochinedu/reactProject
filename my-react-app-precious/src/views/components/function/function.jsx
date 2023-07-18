import React, { useState } from "react";

const Details = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const sumbitHandler = (e) => {
    e.preventDefault()
    const myDetail = {
      firstname: firstName,
      lastname: lastName,
      Email: email,
    };
    console.log(myDetail);
    alert("Name: "+ firstName +" "+ lastName + "\n"+ "Email: "+ email)
    // alert("First Name: " + firstName+ "\nLastName: "+ lastName+ "\nEmail: "+ email)
    
    // alert(firstName);
    // alert(lastName);
    // alert(email);

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div>
      <form action="" onSubmit={sumbitHandler}>
        <div>
          <label htmlFor="">FirstName</label>
          <input value={firstName} onChange={firstNameHandler} type="text" />
        </div>
        <div>
          <label htmlFor="">LastName</label>
          <input value={lastName} onChange={lastNameHandler} type="text" />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input value={email} onChange={emailHandler} type="text" />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Details;
