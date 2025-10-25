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
    <nav className="flex items-center justify-between bg-base-100 shadow-sm p-4 relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-green-600">
        GreenNest
      </Link>

      {/* Links */}
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-600 underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              isActive ? "text-purple-600 underline" : "hover:underline"
            }
          >
            Plants
          </NavLink>
        </li>
      </ul>

      {/* Right side: User info  */}
      <div className="flex items-center gap-4">
        {!user && (
          <>
            <Link to="/signin" className="btn btn-outline">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Signup
            </Link>
          </>
        )}

        {user && (
          <div className="relative">
            {/* Avatar button */}
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2  focus:outline-none"
            >
             <ul className="flex flex-col items-center gap-2 mt-3 mb-4">
                  <li>
                   
                 <Link
                        to="/myprofile"
                        className="hover:text-purple-600 font-bold hover:underline"
                        onClick={() => setShowProfile(false)}
                      >
                        My Profile
                      </Link>
                  </li>
                </ul>
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full"
              />
           
            </button>

            {/* Profile dropdown */}
            {showProfile && (
              <div className="absolute right-0 mt-4 w-64 bg-base-100 shadow-lg rounded-lg p-4 z-50">
                <div className="flex flex-col items-center mb-2">
                  
                 

                  <img
                    src={user.photoURL || "https://via.placeholder.com/80"}
                    alt={user.displayName || "User"}
                    className="w-20 h-20 rounded-full mb-2"
                  />
                  
                  <h2 className="text-lg font-semibold">{user.displayName}</h2>
                  <p className="text-gray-500">{user.email}</p>
                </div>

               

                <button
                  onClick={handleSignOut}
                  className="btn bg-green-600 text-white w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
