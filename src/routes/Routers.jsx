/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signin from "../components/Pages/login/Signin";
import SignUp from "../components/Pages/login/SignUp";
import Sopping from "../components/Pages/Sopping/Sopping";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/sopping',
                element:<Sopping></Sopping>
            },
        ]
    },
    { path: '/signin', element: <Signin/> },
    { path: '/signup', element: <SignUp /> },
    // dashBoard
    {
        path: '/dashboard',
    element: (
        <DashboardLayout />
    ),
    }
])