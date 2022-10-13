import React, { useState } from "react";
/* import styled from "styled-components"; */
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
/* const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background-color: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`; */
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setisValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //The trim() method removes whitespace from
    // both ends of a string and returns a new string, without modifying the original string
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return; //prevent the button to add empty string to list
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={
          `${styles["form-control"]} ${!isValid && styles.inValid}`
          /* we use this to access class name because it have (-)
          className={!isValid && "inValid"} */
        }
      >
        <label
        /*  style={{ color: !isValid ? "red" : "black" }} inline style 
         to use dynamic value in class name we need cyrly braces({}) 
        Template literals are enclosed by backtick (`) characters instead of
        double or single quotes //we can add dynamic value using ${} */
        >
          Todo List
        </label>
        <input
          type="text"
          /* style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }} */
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CourseInput;
