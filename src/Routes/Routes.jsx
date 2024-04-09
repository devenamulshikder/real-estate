import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from '../pages/Home'
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        // {
        //     path:'/nav'
        // }
        {
            path:'/login',
            element: <Login/>
        },
      ]
    },
  ]);

export default router