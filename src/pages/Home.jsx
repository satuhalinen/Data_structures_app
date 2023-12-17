import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Data structures app</h1>
      <p className="welcomeText">Choose the app you want discover more:</p>
      <Link to="/palindrome">
        <button>Palindrome app</button>
      </Link>
      <Link to="/bubblesort">
        <button>Bubble sort app</button>
      </Link>
    </>
  );
};

export default Home;
