import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    sendPasswordResetEmailFunc,
    setUser,
    user,
  } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const from = location.state?.from || "/";

  
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  // Email and Password login
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    setLoading(true);
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);

       
        if (!res.user?.emailVerified) {
          toast.error("Your email is not verified. You cannot login.");
          return;
        }

        //verified users can login
        setUser(res.user);
        toast.success("Signin successful");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  // Google login
  const handleGoogleSignin = () => {
    setLoading(true);
    signInWithEmailFunc()
      .then((res) => {
        setLoading(false);

        if (!res.user?.emailVerified) {
          toast.error("Your Google email is not verified. You cannot login.");
          return;
        }

        setUser(res.user);
        toast.success("Google signin successful");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  // Forgot password
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) return toast.error("Please enter your email first");

    sendPasswordResetEmailFunc(email)
      .then(() => toast.success("Check your email to reset password"))
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="hero min-h-screen mt-20 md:mt-0 lg:mt-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

            <form onSubmit={handleSignin}>
              {/* Email */}
              <div className="form-control mb-4 relative">
                <label className="label text-gray-900 text-[16px]">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Email"
                  className="input input-bordered w-full placeholder-gray-400"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control mb-2 relative">
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
                  className="absolute right-[25px] top-[35px] text-gray-400 cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Forgot Password */}
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-gray-800 hover:underline mb-4"
              >
                Forgot password?
              </button>

              {/* Login Button */}
              <button type="submit" className="btn btn-neutral w-full mb-2">
                Login
              </button>

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn w-full bg-white text-black border-gray-300 flex items-center justify-center gap-2"
              >
                <FcGoogle size={24} />
                Login with Google
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-400 font-medium underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
