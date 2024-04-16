import { Outlet } from "react-router-dom";
import Nav from "../pages/shared/Nav";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
// import Footer from "../components/Footer";
const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
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
