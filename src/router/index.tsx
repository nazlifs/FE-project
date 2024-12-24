import { createBrowserRouter } from "react-router-dom";
import {
  Daftar,
  Dashboard,
  Hero,
  Jadwal,
  Laporan,
  Login,
  SignUp,
  Ujian,
} from "../pages";

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

  {
    path: "/daftar",
    element: <Daftar />,
  },

  {
    path: "/jadwal",
    element: <Jadwal />,
  },

  {
    path: "/laporan",
    element: <Laporan />,
  },

  {
    path: "/hero",
    element: <Hero />,
  },

  {
    path: "/ujian",
    element: <Ujian />,
  },
]);

export default router;
