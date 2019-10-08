import React from "react";

const OperatorButton = (props) => {
    var math_it_up = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y }
        '*': function (x, y) { return x * y }
        '/': function (x, y) { return x / y }
    };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {
          console.log(props.value);
          if (props.value === '=') {
              console.log("TIME TO FIND THE SUM");
              let myArr =props.numberState.split();
              let temporaryTotal = 0;
              let finalOutput = 0;
              myArr.forEach((element) => {
                  if (isNaN(parseInt(element))) {
                      //For multiplication and division
                      finalOutput += temporaryTotal;
                      temporaryTotal = 0;
                  } else {
                      //For addition and subtraction
                      temporaryTotal +=
                  }

              })
              console.log(myArr);
          } else {
              props.setNumberState(props.numberState + props.value);
          }
      }}> {props.value} </button>
      </>
  );
};

export default OperatorButton;
