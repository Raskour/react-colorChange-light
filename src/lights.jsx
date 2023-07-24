import { useState } from "react";
import Color from "./color";
// when we have more data(for eg. colors here) then using if else can be too much code.
//In that case we always put data in the form of array and use its index to set the state.
const colors = ["red", "blue", "green", "yellow", "orange", "black", "brown"];
function Light() {
  const [index, setIndex] = useState(0);

  const hasNext = index === colors.length - 1;
  function handleColor() {
    if (hasNext) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <Color color={colors[index]} />
      <button onClick={handleColor}>Change-Color</button>
    </>
  );
}
export default Light;
