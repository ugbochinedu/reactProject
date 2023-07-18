import React from "react";

import classses from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={classses.button}
      onClick={props.onClick}
    >
    {props.children}
    </button>
  );
};

export default Button;
