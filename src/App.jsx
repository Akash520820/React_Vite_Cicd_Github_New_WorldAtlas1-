import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./component/AppLayout";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
], {
  basename: "/React_Vite_Cicd_Github_New_WorldAtlas1-"
});

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;