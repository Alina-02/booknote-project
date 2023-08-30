import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../views/Home.jsx";
import Details from "../views/Details.jsx";
import Prueba from "../views/prueba.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:bookId",
    element: <Details />,
  },
  {
    path: "/prueba",
    element: <Prueba />,
  },
]);

const MyRouter = () => {
  return <RouterProvider router={router} />;
};

export default MyRouter;
