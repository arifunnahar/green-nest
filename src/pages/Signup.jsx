import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setUser,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    // password validation
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setLoading(true);

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
      
        return updateProfileFunc(displayName, photoURL).then(() => {
    
          setUser({
            ...res.user,
            displayName,
            photoURL,
          });

          // Send verification email 
          sendEmailVerificationFunc();

          toast.success("Signup successful! Welcome to GreenNest");

          // Navigate to home page
          navigate("/");
        });
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignup}>
              <h1 className="text-2xl text-center font-bold">Register</h1>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label text-gray-900">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input placeholder-gray-400"
                  placeholder="Name"
                  required
                />
                {/* Photo */}
                <label className="label text-gray-900">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input placeholder-gray-400"
                  placeholder="Your photo URL here"
                />
                {/* Email & Password */}
                <div className="relative">
                  <label className="label text-gray-900">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input placeholder-gray-400"
                    placeholder="Email"
                    required
                  />
                  <label className="label text-gray-900">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input placeholder-gray-400"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[25px] top-[90px] text-gray-400 cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button className="btn btn-neutral mt-4">Register</button>

                <div className="text-center mt-3">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-blue-400 font-medium underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
