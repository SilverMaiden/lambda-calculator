import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {

          console.log(props.value);
          if (props.value === 'C') {
              props.setNumberState(props.numberState - props.numberState);
          }
          console.log(props.numberState);


      }}> {props.value} </button>
    </>
  );
};

export default SpecialButton;
