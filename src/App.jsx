import "./App.css";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Palindrome from "./pages/Palindrome";
import BubbleSort from "./pages/BubbleSort";
import Stack from "./pages/Stack";
import Queue from "./pages/Queue";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/palindrome",
          element: <Palindrome />,
        },
        {
          path: "/bubblesort",
          element: <BubbleSort />,
        },
        {
          path: "/stack",
          element: <Stack />,
        },
        {
          path: "/queue",
          element: <Queue />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
