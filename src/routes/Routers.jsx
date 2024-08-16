/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signin from "../components/Pages/login/Signin";
import SignUp from "../components/Pages/login/SignUp";
import Sopping from "../components/Pages/Sopping/Sopping";
import DashboardLayout from "../layout/DashboardLayout";
import AddProduct from "../components/Pages/Admin/AddProduct";
import ProductDetail from "../components/Pages/productDetail/ProductDetail";
import Home from "../components/Pages/home/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/sopping',
                element:<Sopping></Sopping>
            },
            {
                path:'/product-detail/:id',
                element:<ProductDetail></ProductDetail>
            }
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
    children:[
        {
            path:'/dashboard',
            element:<AddProduct></AddProduct>
        }
    ]
    }
])