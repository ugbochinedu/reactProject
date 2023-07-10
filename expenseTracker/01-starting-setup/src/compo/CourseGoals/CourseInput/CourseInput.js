import React, { useState } from "react";
import styled from 'styled-components'

//import styles from './CourseInput.css' change folder name .module.css and classname = {styles['selector name']}
// To add or bind another css style use: className ={`${styles['form-control']} ${!isValid && styles.invalid}}

import Button from "../../UI/Button/Button";
import "./CourseInput.css";


const FormControl = styled.div`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}


& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.inValid input{
  border-color: red;
  background-color: rgb(192, 138, 138);
}

&.inValid label{
  color: red;
}
`

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={`& ${!isValid? 'inValid':''}`}> */}
      <FormControl className={!isValid && "inValid"}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
