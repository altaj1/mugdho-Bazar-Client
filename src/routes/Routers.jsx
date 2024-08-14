/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signin from "../components/Pages/login/Signin";
import SignUp from "../components/Pages/login/SignUp";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {}
        ]
    },
    { path: '/signin', element: <Signin/> },
    { path: '/signup', element: <SignUp /> },
    // dashBoard
])