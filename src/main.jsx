import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./provider/Authprovider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </HelmetProvider>
  </>
);
