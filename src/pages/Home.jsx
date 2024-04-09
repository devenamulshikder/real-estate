import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3 className="text-6xl">This is home</h3>
            <Link to='/login'>Go to Login</Link>
        </div>
    );
};

export default Home;