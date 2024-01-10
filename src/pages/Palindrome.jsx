import { useState } from "react";
import "../styles/Palindrome.css";
import { NavLink } from "react-router-dom";
function Palindrome() {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const palindromeChecker = () => {
    let emptyAway = search.toLowerCase().replaceAll(" ", "");
    let toArray = emptyAway.split("");
    let toReverse = toArray.reverse();
    let palindrome = toReverse.join("");
    if (search == "") {
      return "Give a word, number or phrase and this app will tell you if it's a palindrome or not.";
    } else if (emptyAway == palindrome) {
      return "The given word/number/phrase is a palindrome.";
    } else {
      return "The given word/number/phrase is not a palindrome.";
    }
  };

  return (
    <>
      <div className="palindromePicture">
        <NavLink to="/">Back to home page</NavLink>
        <p className="shadowText">Welcome to use palindrome checker app!</p>
        <input type="text" onChange={searchHandler} />
        <p className="shadowText">{palindromeChecker()}</p>
      </div>
    </>
  );
}

export default Palindrome;
