import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <div className="homeClass">
        <h1 className="shadowTextHome">Data structures app</h1>
        <p className="shadowTextHome">Choose the app you want discover more:</p>
        <div className="homeButtonClass">
          <Link className="homeButton" to="/palindrome">
            <button className="buttonsHome">Palindrome app</button>
          </Link>
          <Link className="homeButton" to="/bubblesort">
            <button className="buttonsHome">Bubble sort app</button>
          </Link>
          <Link className="homeButton" to="/stack">
            <button className="buttonsHome">Stack data structure app</button>
          </Link>
          <Link className="homeButton" to="/queue">
            <button className="buttonsHome">Queue data structure app</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
