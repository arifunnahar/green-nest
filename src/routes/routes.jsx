import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";


import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
    
      },
      {
        path: "/plants",
        element: <Plants/>,
      },
      {
        path: "/myprofile",
        element:<PrivateRoute> <MyProfile/></PrivateRoute>,
      },
      {
        path: "/signup",
        element:<Signup/>,
      },
      {
        path: "/signin",
        element: <Signin/>,
      },
    
      {
        path: "/product/:id",
        element: <PrivateRoute><ProductDetails/></PrivateRoute>,
      }
    ],
  },
]);
