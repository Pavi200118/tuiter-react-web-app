import React from 'react';
function FunctionParanthesisAndParameters() {
const square = a => { return a * a; }

const plusOne = a => { return a + 1; }

const twoSquared = square(2);

const threePlusOne = plusOne(3);
return (
<>
    <h3>Paranthesis And Parameters </h3>
    twoSquared = {twoSquared}<br />
    square(2) = {square(2)}<br />
    threePlusOne = {threePlusOne}<br />
    plusOne(3) = {plusOne(3)}<br />
   </>
  );
} export default FunctionParanthesisAndParameters

