
import { Outlet } from "react-router-dom";
import Nav from "../pages/shared/Nav";
const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <Nav/>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Root;