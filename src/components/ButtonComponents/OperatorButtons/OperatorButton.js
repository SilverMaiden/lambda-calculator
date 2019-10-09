import React from "react";

const OperatorButton = (props) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {
          if (props.value === '=') {
              props.setNumberState(eval(props.numberState.replace(/x/g, "*")));
          } else {
              props.setNumberState(props.numberState + props.value);
          }
      }}> {props.value} </button>
      </>
  );
};

export default OperatorButton;
