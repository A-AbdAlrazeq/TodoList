import React from "react";
import styles from "./Button.module.css";
/* import styled from "styled-components"; */
//applied all style auto when add it between (``)
// we use (&) to apply another style when it need.
//it's wrap this style in generated class name>every class name is unieqe
/* const Button = styled.button`
  width: 100%; //default width if media query not met
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  // if media query is met will excute for big or normal devices
  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`; */
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={styles.button}
      /*.Button_button__1UB8H (component name-class name-unique hash)
      change all class name to be unique
      // we use css module to style each one of our component without effect to another one
      */ onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
