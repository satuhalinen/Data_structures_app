import { useState } from "react";
import "../styles/BubbleSort.css";
import { NavLink } from "react-router-dom";

function BubbleSort() {
  const [userInput, setUserInput] = useState("");
  const sortHandler = (e) => {
    setUserInput(e.target.value);
  };
  const bubbleSort = () => {
    if (userInput != "") {
      let splitted = userInput.split(",");
      let splittedNumber = splitted.map(Number);
      if (!splittedNumber.includes(NaN)) {
        for (let i = splittedNumber.length; i > 0; i--) {
          for (let j = 0; j < i - 1; j++) {
            if (splittedNumber[j] > splittedNumber[j + 1]) {
              let temp = splittedNumber[j];
              splittedNumber[j] = splittedNumber[j + 1];
              splittedNumber[j + 1] = temp;
            }
          }
        }
        return splittedNumber.toString();
      } else {
        return "Please give numbers separated by commas.";
      }
    } else {
      return "Give numbers separated by commas.";
    }
  };
  return (
    <>
      <div className="bubbleSortPicture">
        <NavLink to="/">Back to home page</NavLink>
        <h1 className="shadowText">Bubble sort app</h1>
        <input type="text" onChange={sortHandler} />
        <p className="shadowText">{bubbleSort()}</p>
      </div>
    </>
  );
}

export default BubbleSort;
