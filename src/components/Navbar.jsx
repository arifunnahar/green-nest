import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUserFunc, setUser } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);

  const handleSignOut = () => {
    signOutUserFunc()
      .then(() => {
        setUser(null);
        setShowProfile(false);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
   
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-green-600">
          GreenNest
        </Link>
      </div>

      {/* Desktop*/}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="tabs">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "tab tab-active" : "tab"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              isActive ? "tab tab-active" : "tab"
            }
          >
            Plants
          </NavLink>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-none flex items-center gap-4">
        {!user && (
          <div className="hidden md:flex gap-2">
            <Link to="/signin" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Signup
            </Link>
          </div>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt={user.displayName || "User"}
                />
              </div>
            </label>
            {showProfile && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52"
              >
                <li className="flex flex-col items-center mb-2">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/80"}
                    alt={user.displayName || "User"}
                    className="w-20 h-20 rounded-full mb-2"
                  />
                  <h2 className="text-lg font-semibold">{user.displayName}</h2>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                </li>
                <li>
                  <Link to="/myprofile" onClick={() => setShowProfile(false)}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="btn btn-green w-full">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Mobile dropdown */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" onClick={() => setShowProfile(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/plants" onClick={() => setShowProfile(false)}>
                Plants
              </NavLink>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/myprofile" onClick={() => setShowProfile(false)}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
