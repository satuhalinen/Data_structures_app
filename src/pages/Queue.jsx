import "../styles/Queue.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Queue() {
  let color;
  const [stack, setStack] = useState([]);

  const addGreenBoxHandler = () => {
    let stackCopy = [...stack];
    color = "greenWagon";
    stackCopy.push(color);
    setStack(stackCopy);
  };
  const addOrangeBoxHandler = () => {
    let stackCopy = [...stack];
    color = "orangeWagon";
    stackCopy.push(color);
    setStack(stackCopy);
  };
  const addRedBoxHandler = () => {
    let stackCopy = [...stack];
    color = "redWagon";
    stackCopy.push(color);
    setStack(stackCopy);
  };

  const removeBoxHandler = () => {
    let stackCopy = [...stack];
    stackCopy.shift();
    setStack(stackCopy);
  };
  const listItems = stack
    .toReversed()
    .map((color) => <div className={color}></div>);

  return (
    <>
      <div className="all">
        <NavLink className="queueBackButton" to="/">
          Back to home page
        </NavLink>
        <h1>Make a queue!</h1>
        <div className="wagons">{listItems}</div>
        <div className="queueButtons">
          <button className="greenButton" onClick={addGreenBoxHandler}>
            Add a green wagon!
          </button>
          <button className="orangeButton" onClick={addOrangeBoxHandler}>
            Add an orange wagon!
          </button>
          <button className="redButton" onClick={addRedBoxHandler}>
            Add a red wagon!
          </button>
          <button className="removeButton" onClick={removeBoxHandler}>
            Remove a wagon!
          </button>
        </div>
      </div>
    </>
  );
}

export default Queue;
