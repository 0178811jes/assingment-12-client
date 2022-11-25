import DashboardLayout from "../../Layout/DashboardLayout";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Category from "../../Pages/Category/Category/Category";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Blog from "../../Pages/Home/Home/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import Signup from "../../Pages/Signup/Signup";
import PrivetRoute from "../PrivateRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
                path: '/',
                element: <Home></Home>,
                loader:() => fetch('http://localhost:5000/allProducts')
           },
           
           {
                path: '/category/:id',
                element: <Category></Category>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`),
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
     children: [
          {
               path:'/dashboard',
               element:<Dashboard></Dashboard>
          }
     ]
    }
])