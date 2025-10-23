import React from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ Correct import
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
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
        </ul>
      </div>


      <div className="navbar-end flex items-center gap-3">
       
        <Link to="/signup" className="btn btn-success text-white">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
