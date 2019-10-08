import React from "react";

const OperatorButton = (props) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {
          console.log(props.value);
          if (props.value === '=') {
              console.log("TIME TO FIND THE SUM");
              let myArr = Array.from(props.numberState);
              let temporaryTotal = "";
              let finalOutput = 0;
              myArr.forEach((element) => {
                  console.log(element);
                  let strInt = parseInt(element);
                  if (isNaN(strInt)) {
                      let intTotal = parseInt(temporaryTotal);
                      if (element === '+') {
                          finalOutput += intTotal ;
                          console.log(finalOutput);
                      } else if (element === '-') {
                          finalOutput -= intTotal;
                      } else if (element === '*') {
                          finalOutput = finalOutput * intTotal;
                      } else if (element === '/') {
                          finalOutput = finalOutput / intTotal;
                      }
                      temporaryTotal = "";
                  } else {
                      temporaryTotal += element;
                  }
              })
              console.log(finalOutput);
          } else {
              props.setNumberState(props.numberState + props.value);
          }
      }}> {props.value} </button>
      </>
  );
};

export default OperatorButton;
