import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {

          if (props.value === 'C') {
              props.setNumberState(parseInt(props.numberState) - parseInt(props.numberState));
          } else if(props.value ==='+/-') {
              props.setNumberState(parseInt(props.numberState) - (2 * parseInt(props.numberState)));
          } else if(props.value === '%') {
              props.setNumberState(parseInt(props.numberState) * 0.01);
          }


      }}> {props.value} </button>
    </>
  );
};

export default SpecialButton;
