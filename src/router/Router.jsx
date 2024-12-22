import Default from "../Layout/Default/Default";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home";
import {
    createBrowserRouter,
  } from "react-router-dom"
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";


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
            path:'/jobs/:id',
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'/jobApply/:id',
            element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
            path:'/myApplications',
            element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
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