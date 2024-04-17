import { Outlet } from "react-router-dom";
import Nav from "../pages/shared/Nav";
import Footer from "../components/Footer";
const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Nav />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
