import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, SignUp } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
