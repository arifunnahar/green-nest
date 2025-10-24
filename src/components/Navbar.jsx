import React, { use } from "react";
import { Link, NavLink } from "react-router-dom"; 
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { BeatLoader} from "react-spinners";

const Navbar = () => {
  const { user, setUser, signOutUserFunc,loading, setLoading } = use(AuthContext);

  // signout
  const handleSignOut = () => {
    signOutUserFunc()
      .then((res) => {
        console.log(res);

        toast.success("Signout successful");
        setUser(null);
      })

      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(user);


  return (
    <div className="navbar bg-base-100 shadow-sm">
  
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600  underline underline-offset-4"
                    : "hover:underline"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/plants"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600  underline underline-offset-4"
                    : "hover:underline"
                }
              >
                Plants
              </NavLink>
            </li>
            {
              user && (
                
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 underline underline-offset-4"
                    : "hover:underline"
                }
              >
                My Profile
              </NavLink>
            </li>
              )}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-green-600">GreenNest</div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600  underline underline-offset-4"
                  : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plants"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600  underline underline-offset-4"
                  : "hover:underline"
              }
            >
              Plants
            </NavLink>
          </li>

          {
            user && (
              <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600  underline underline-offset-4"
                  : "hover:underline"
              }
            >
              My Profile
            </NavLink>
          </li>
            )
          }
        </ul>
      </div>

      
 {loading ? (
        <div className="navbar-end pr-4">
          <BeatLoader color="#e74c3c" />
        </div>
      ) : user ? (
        <div className="navbar-end flex items-center gap-3 pr-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className=" m-1 p-0">
              <img
                className="h-15 w-15 rounded-full"
                src={user?.photoURL || "https://via.placeholder.com/88"}
                alt={user?.displayName || "User"}
              />
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box w-52 p-4 shadow-sm"
            >
              <li>
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-sm ">{user?.email}</p>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn bg-green-600 w-full rounded-md text-white mt-2"
                >
                  Signout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end flex items-center gap-3">
          <Link to="/signin" className="btn btn-success text-white">
            Signin
          </Link>
        </div>
      )}

    </div>
  );
};

export default Navbar;
