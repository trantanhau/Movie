import Home from "../pages/main/home";
import DetailMovie from "../pages/main/deail-movie";
import Booking from "../pages/main/booking";
import Dashboard from "../pages/admin/dashboard";
import Movie from "../pages/admin/movie";
import User from "../pages/admin/user";
import Login from "../pages/main/login";
export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/movie-detail/:maPhim",
    exact: false,
    Component: DetailMovie,
  },
  {
    path: "/booking/:maLichChieu",
    exact: false,
    Component: Booking,
  },
  {
    path: "/login",
    exact: false,
    Component: Login,
  },
];

/**
 * admin router:
 *  - dashboard : http://localhost:3000/admin/dashboard
 *  - user : http://localhost:3000/admin/user
 *  - movie : http://localhost:3000/admin/movie
 */

export const adminRouter = [
  {
    path: "/admin/dashboard",
    exact: true,
    Component: Dashboard,
  },
  {
    path: "/admin/user",
    exact: true,
    Component: User,
  },
  {
    path: "/admin/movie",
    exact: true,
    Component: Movie,
  },
];
