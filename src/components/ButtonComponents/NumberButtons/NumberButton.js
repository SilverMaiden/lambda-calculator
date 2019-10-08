import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {
          console.log(`You clicked ${props.value}`);
          console.log(props.numberState);
          if (props.numberState === 0) {
              props.setNumberState(props.numberState + parseInt(props.value))
          } else {
              props.setNumberState(props.numberState + props.value );
          }
      }
      }> {props.value} </button>
    </>
  );
};

export default NumberButton;
