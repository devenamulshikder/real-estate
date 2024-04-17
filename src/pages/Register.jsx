/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, loading, error, setError, showPassword, setShowPassword } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // if (loading) {
  //   return (
  //     <div className="text-center">
  //       <span className="loading loading-dots loading-lg"></span>
  //     </div>
  //   );
  // }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    setError("");

    if (password.length < 6) {
      setError("Please should be at least 6 characters of longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError(
        "Your password should have at least one upper case characters."
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        toast("You have Register Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1200"
      className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 border-dotted bg-white   font-sans mx-auto my-5 lg:my-14"
    >
      <Helmet>
        <title>Dream sites || Register</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center text-[#38b469]">
        Register
      </h1>
      {/* Input fields and the form started */}
      <form onSubmit={handleRegister} action="" className="space-y-6">
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            Your name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border border-[#38b469] focus:outline-none focus:border-2  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-md border border-[#38b469] focus:outline-none focus:border-2  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            PhotoURL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your photo url"
            className="w-full px-4 py-3 rounded-md border border-[#38b469] focus:outline-none focus:border-2  "
          />
        </div>
        <div className="relative space-y-2 text-sm">
          <label htmlFor="password" className="block ">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-[#38b469] focus:outline-none  focus:border-2 "
          />
          <span className=" absolute right-3 bottom-3" onClick={()=>setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
        </div>
        {/* Sign in Button */}
        <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#38b469] text-white border-y-4 duration-500 overflow-hidden focus:border-[#38b469] z-50 group">
          Register
          <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
            Let&apos;s go
          </span>
          <span className="bg-[#007F73] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-[#007F73] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-[#007F73] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          <span className="bg-[#007F73] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
        </button>
      </form>
      <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
        Already have an account?
        <Link to="/login" className="underline hover:text-[#007F73] font-bold">
          Log in!
        </Link>
      </p>
      {error && (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Register;
