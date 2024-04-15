import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
            <h1 className="text-5xl font-bold"> Oops!!!!!!</h1>
            <h2 className="text-xl">404 Page not found 😒.</h2>
            <Link to='/' className="btn btn-ghost">Go back Home</Link>
        </div>
    );
};

export default Error;