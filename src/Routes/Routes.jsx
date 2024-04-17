import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Register from "../pages/Register";
import PropertyDetails from "../components/PropertyDetails";
import PrivetRout from "./PrivetRout";
import ContactUs from "../components/ContactUs";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fake.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/:id",
        element: (
          <PrivetRout>
            <PropertyDetails />
          </PrivetRout>
        ),
        loader: () => fetch("/fake.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivetRout>
            <Profile />
          </PrivetRout>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivetRout>
            <UpdateProfile />
          </PrivetRout>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
