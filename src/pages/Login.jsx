/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { logIn, error, setError, googleLogIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLonIn = () => {
    setError(null);
    googleLogIn()
      .then()
      .catch((error) => setError(error.message));
  };

  return (
    <div className="w-full lg:mt-32 mx-auto lg:w-[1000px] shadow-lg bg-white flex group text-gray-600">
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
          <label htmlFor="email_" className="block">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#38b469]"
          />
          <label htmlFor="password_" className="block">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder=".............."
            min={5}
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#38b469]"
          />
        </div>
        <div className="flex justify-end text-xs ">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>
        <div>
          {
          error && <h5 className="text-red-400">Please don't try to login with wrong Password..!</h5>
          }
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
            aria-label="Log in with Twitter"
            className="p-3 rounded-full hover:bg-gray-200"
          >
            <FaGithub size={30} />
          </button>
          <button
            aria-label="Log in with GitHub"
            className="p-3 rounded-full hover:bg-gray-200"
          >
            <FaFacebook size={30} />
          </button>
        </div>

        <p className="">
          Please Create a Accouont?{" "}
          <Link
            className="underline font-semibold hover:text-[#38b469]"
            to="/register"
          >
            Register!
          </Link>
        </p>
      </form>
    </div>
  );

  // const {logIn, error, setError, googleLogIn} = useContext(AuthContext);
  //   const handleLogIn = (e) => {
  //       e.preventDefault();
  //       setError(null)
  //       const email = e.target.email.value;
  //       const password = e.target.password.value;
  //       logIn(email, password)
  //       .then()
  //       .catch(error => setError(error.message))
  //   }
  // const handleGoogleLonIn = () => {
  //     setError(null);
  //     googleLogIn()
  //     .then()
  //     .catch(error => setError(error.message))
  // }
  //   return (
  //       <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 border-dotted bg-white   font-sans mx-auto my-5 lg:my-14">
  //           <h1 className="text-3xl font-bold text-center text-[#4CCD99]">Login</h1>
  //           {/* Input fields and the form started */}
  //           <form onSubmit={handleLogIn} className="space-y-6">
  //               <div className="space-y-2 text-sm">
  //                   <label htmlFor="username" className="block ">
  //                       Your name
  //                   </label>
  //                   <input type="email" required name="email"  placeholder="Your email" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none focus:border-2  " />
  //               </div>
  //               <div className="space-y-2 text-sm">
  //                   <label htmlFor="password" className="block ">
  //                       Password
  //                   </label>
  //                   <input type="password" name="password"  placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none  focus:border-2 " />
  //                   <div>
  // {
  //     error && <h5 className="text-red-400">{error}</h5>
  // }
  //                   </div>
  // <div className="flex justify-end text-xs ">
  //     <a href="#" className="hover:underline">
  //         Forgot Password?
  //     </a>
  // </div>
  //               </div>
  //               {/* Sign in Button */}
  //               <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#4CCD99] text-white border-y-4 duration-500 overflow-hidden focus:border-[#4CCD99] z-50 group">
  //                   Log In
  //                   <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
  //                       Let&apos;s go
  //                   </span>
  //                   <span className="bg-[#007F73] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
  //                   <span className="bg-[#007F73] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
  //                   <span className="bg-[#007F73] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
  //                   <span className="bg-[#007F73] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
  //               </button>
  //           </form>
  // <div className="flex items-center pt-4 space-x-2">
  //     <div className="flex-1 h-px bg-gray-300"></div>
  //     <p className="text-sm text-gray-600">Login with social accounts</p>
  //     <div className="flex-1 h-px bg-gray-300"></div>
  // </div>
  //           {/* Social icons */}
  // <div className="flex justify-center space-x-4">
  //     <button onClick={handleGoogleLonIn} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
  //         <FaGoogle size={30} />
  //     </button>
  //     <button aria-label="Log in with Twitter" className="p-3 rounded-full hover:bg-gray-200">
  //         <FaGithub size={30} />
  //     </button>
  //     <button aria-label="Log in with GitHub" className="p-3 rounded-full hover:bg-gray-200">
  //         <FaFacebook  size={30}/>
  //     </button>
  // </div>
  //           <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
  //               Don&apos;t have an account?
  //               <Link to='/register' className="underline hover:text-[#007F73] font-bold">
  //                   Register
  //               </Link>
  //           </p>
  //       </div>
  //   );
};

export default Login;
