import Category from "../../Pages/Category/Category/Category";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";

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
                element: <Home></Home>
           },
           
           {
                path: '/category/:id',
                element: <Category></Category>
           },
           {
                path: '/product/:id',
                element: <Products></Products>
           },

           {
                path: '/login',
                element: <Login></Login>
           },
        ]
    }
])