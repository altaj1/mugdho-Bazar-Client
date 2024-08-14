/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {}
        ]
    },
    // { path: '/login', element: <Login /> },
    // { path: '/signup', element: <SignUp /> },
    // dashBoard
])