import React, { useState, useRef } from "react";
import Card from "../Ui/Card";
import classes from "./AddUser.module.css";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
import Wrapper from "../Helpers/Wrappers";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age value",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    // props.onAddUser(enteredUserName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value ='';

    // setEnteredUserName("");
    // setEnteredAge("");
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => [setEnteredAge(event.target.value)];

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form action="" onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            // value={enteredUserName}
            type="text"
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            id="username"
            // value={enteredAge}
            type="number"
            min={0}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
