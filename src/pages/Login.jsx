/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    logIn,
    error,
    setError,
    googleLogIn,
    githubLogIn,
    showPassword,
    setShowPassword,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        toast("Login Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast(`${error.message}Please Register first..!`);
        navigate("/register");
      });
  };

  const handleGoogleLonIn = () => {
    setError(null);
    googleLogIn()
      .then(() => {
        toast("Google Login Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.message));
  };

  const handleGithubLonIn = () => {
    setError(null);
    githubLogIn()
      .then(() => {
        toast("Github Login Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="w-full lg:mt-32 mx-auto lg:w-[1000px] shadow-lg bg-white flex group text-gray-600"
      >
        <Helmet>
          <title>Dream sites || Login</title>
        </Helmet>
        <div className="w-1/2 min-h-full bg-[#38b469] relative overflow-hidden hidden lg:block">
          <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">
            Hey! <br /> Please
            <br /> Login Our Sites
          </h1>
          <span className="bg-green-700/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
          <span className="bg-green-700/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
        </div>
        <form onSubmit={handleLogin} className="p-8 flex-1">
          <h1 className="text-4xl pb-4">Login</h1>
          <div className="space-y-5">
            <div>
              <label htmlFor="email_" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@example.com"
                className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#38b469]"
              />
            </div>
            <div className="relative ">
              <label htmlFor="password_" className="block">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=".............."
                required
                min={5}
                className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#38b469]"
              />
              <span
                className=" absolute right-3 bottom-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
          </div>
          <div className="flex justify-end text-xs ">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <div>
            {error && (
              <h5 className="text-red-400">
                Please don't try to login with wrong Password..!
              </h5>
            )}
          </div>

          <div>
            <button className="btn btn-outline my-4 border-2 border-dashed border-[#38b469] hover:bg-[#38b469]">
              Log in
            </button>
          </div>

          <div className="flex items-center pt-4 space-x-2 mb-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-4 mb-2">
            <button
              onClick={handleGoogleLonIn}
              aria-label="Log in with Google"
              className="p-3 rounded-full hover:bg-gray-200"
            >
              <FaGoogle size={30} />
            </button>
            <button
              onClick={handleGithubLonIn}
              aria-label="Log in with Twitter"
              className="p-3 rounded-full hover:bg-gray-200"
            >
              <FaGithub size={30} />
            </button>
          </div>

          <p className="">
            Do not have an Accouont?{" "}
            <Link
              className="underline font-semibold hover:text-[#38b469]"
              to="/register"
            >
              Register!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
