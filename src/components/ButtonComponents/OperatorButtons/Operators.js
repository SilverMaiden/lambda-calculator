import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file
//

import { operators } from "../../../data";

const Operators = (props) => {
  // STEP 2 - add the imported data to state

  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    { operators.map(function(element) {
        let key1 = Object.keys(element)[0];
        return <OperatorButton value={element[key1]} setNumberState={props.setNumberState} numberState={props.numberState} /> ;
    })}

    </div>
  );
};

export default Operators;
