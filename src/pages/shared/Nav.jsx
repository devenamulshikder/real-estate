import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";
import { toast } from "react-toastify";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Log out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline btn-success font-bold text-lg"
              : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success font-bold text-lg"
                : "font-bold"
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success font-bold text-lg"
                : "font-bold"
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success font-bold text-lg"
                : "font-bold"
            }
            to="/updateprofile"
          >
            Update Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline btn-success font-bold text-lg"
              : "font-bold"
          }
          to="/contactus"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar my-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center">
            <img className=" w-12 lg:w-16" src="/public/logo.jpeg" alt="" />
            <a className="btn btn-ghost hidden lg:flex text-md md:text-xl lg:text-3xl font-bold">
              Dream <span className="text-[#38b469]">Sites</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal lg:text-lg px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-4 font-semibold">
          {user ? (
            <div className="flex gap-2 items-center">
              <button
                onClick={handleLogOut}
                className="btn btn-ghost lg:text-lg"
              >
                Log Out
              </button>
              <img
                className=" w-9 h-9 lg:w-12 lg:h-12 rounded-full border"
                alt="user"
                src={user.photoURL}
              />
            </div>
          ) : (
            <Link to="/register" className="btn text-black bg-[#38b469]">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
