import Default from "../Layout/Default/Default";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home";
import {
    createBrowserRouter,
  } from "react-router-dom"
import SignIn from "../Pages/SignIn/SignIn";


const router = createBrowserRouter([
{
    path: '/',
    element:<Default></Default>,
    errorElement:<h2>Page not found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        }
    ]
}
])

export default router;