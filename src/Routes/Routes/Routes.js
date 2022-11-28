import DashboardLayout from "../../Layout/DashboardLayout";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Category from "../../Pages/Category/Category/Category";
import AdminAddProduct from "../../Pages/Dashboard/AdminAddProduct/AdminAddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageProduct from "../../Pages/Dashboard/MannageProduct/ManageProduct";

import MyAppointProduct from "../../Pages/Dashboard/MyAppointProduct/MyAppointProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Blog from "../../Pages/Home/Home/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import DisplayError from "../../Pages/Sheard/DisplayError/DisplayError";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRout/AdminRout";
import PrivetRoute from "../PrivateRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children: [
           {
                path: '/',
                element: <Home></Home>,
                
           },
           
           {
                path: '/category/:id',
                element: <Category></Category>,
                loader:({params}) => fetch(`https://assignment-12-server-livid.vercel.app/category/${params.id}`),
           },
           {
                path: '/product/:id',
                element: <Products></Products>
           },
           {
                path: '/blog',
                element: <Blog></Blog>
           },

           {
                path: '/login',
                element: <Login></Login>
           },
           {
                path: '/signup',
                element: <Signup></Signup>
           },
           {
            path:'/appointment',
            element:<Appointment></Appointment>
           }
        ]
        
    },
    {
     path:'/dashboard',
     element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
     errorElement:<DisplayError></DisplayError>,
     children: [
          {
               path:'/dashboard',
               element:<MyAppointProduct></MyAppointProduct>
          },
          {
               path:'/dashboard/allusers',
               element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
               path:'/dashboard/adminaddproduct',
               element: <AdminRoute><AdminAddProduct></AdminAddProduct></AdminRoute>
          },
          {
               path:'/dashboard/manageproduct',
               element: <AdminRoute><ManageProduct></ManageProduct></AdminRoute>
          },
          {
               path:'/dashboard/payment/:id',
               element: <Payment></Payment>,
               loader:({params})=> fetch(`https://assignment-12-server-livid.vercel.app/bookings/${params.id}`)
          },
     ]
    }
])