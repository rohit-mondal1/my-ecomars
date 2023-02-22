import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Home from "../Components/Home/Home";
import MyOrder from "../Components/Page/MyOrder/MyOrder";
import Profile from "../Components/Page/Profile/Profile";
import Wishlist from "../Components/Page/wishlist/Wishlist";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/My-Order", element: <MyOrder /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <Signup /> },
    ],
  },
]);