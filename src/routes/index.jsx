import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../views/Home.jsx";
import Details from "../views/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:bookId",
    element: <Details />,
  },
]);

const MyRouter = () => {
  return <RouterProvider router={router} />;
};

export default MyRouter;
