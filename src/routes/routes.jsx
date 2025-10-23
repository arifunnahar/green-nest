import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
    
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "/signup",
        element:<Signup></Signup>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>
      }
    ],
  },
]);
