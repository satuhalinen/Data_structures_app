import "../styles/Stack.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Stack() {
  let color;
  const [stack, setStack] = useState([]);

  const addBlueBoxHandler = () => {
    let stackCopy = [...stack];
    if ([...stack].length < 12) {
      color = "blueRing";
      stackCopy.push(color);
      setStack(stackCopy);
    }
  };
  const addYellowBoxHandler = () => {
    let stackCopy = [...stack];
    if ([...stack].length < 12) {
      color = "yellowRing";
      stackCopy.push(color);
      setStack(stackCopy);
    }
  };
  const addRedBoxHandler = () => {
    let stackCopy = [...stack];
    if ([...stack].length < 12) {
      color = "redRing";
      stackCopy.push(color);
      setStack(stackCopy);
    }
  };

  const removeBoxHandler = () => {
    let stackCopy = [...stack];
    stackCopy.pop();
    setStack(stackCopy);
  };
  const listItems = stack
    .toReversed()
    .map((color) => <div className={color}></div>);

  return (
    <>
      <div className="all">
        <NavLink className="stackBackButton" to="/">
          Back to home page
        </NavLink>
        <h1>Build a stack!</h1>
        <div className="withBg">
          <div className="rings">{listItems}</div>
          <div className="stackButtons">
            <button className="blueButton" onClick={addBlueBoxHandler}>
              Add a blue ring!
            </button>
            <button className="yellowButton" onClick={addYellowBoxHandler}>
              Add a yellow ring!
            </button>
            <button className="redButton" onClick={addRedBoxHandler}>
              Add a red ring!
            </button>
            <button className="removeButton" onClick={removeBoxHandler}>
              Remove a ring!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
