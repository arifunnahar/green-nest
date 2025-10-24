import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"; 
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false); 

  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    sendPasswordResetEmailFunc,
    setUser } = useContext(AuthContext);

  const emailRef = useRef(null);


  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    setLoading(true);
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false)); 
  };

  const handleGoogleSignin = () => {
    setLoading(true); 
    signInWithEmailFunc()
      .then((res) => {
        if (!res.user?.emailVerified) {
          toast.error("Your email is not verified.");
          return;
        }
        setUser(res.user);
        toast.success("Google signin successful");
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) return toast.error("Please enter your email first");
    sendPasswordResetEmailFunc(email)
      .then(() => toast.success("Check your email to reset password"))
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignin}>
              <h1 className="text-2xl text-center font-bold">Login</h1>
              <fieldset className="fieldset">
                {/* Email */}
                <div className="relative">
                  <label className="label text-[16px] text-gray-900">Email</label>
                  <input type="email" name="email" ref={emailRef} className="input text-gray-400" placeholder="Email" />
                  {/* Password */}
                  <label className="label text-[16px] text-gray-900">Password</label>
                  <input type={show ? "text" : "password"} name="password" className="input" placeholder="Password" /> <span onClick={() => setShow(!show)} className="absolute right-[25px] top-[100px] text-gray-400 cursor-pointer z-50" >
                    {show ? <FaEye /> : <IoEyeOff />} </span>
                </div> <button type="button"
                  onClick={handleForgotPassword}
                  className="hover:underline cursor-pointer text-gray-800 label" > Forgot password? </button> <button type="submit" className="btn btn-neutral mt-4"> Login </button> {/* Google Signin */} <button type="button" onClick={handleGoogleSignin} className="btn bg-white text-black border-[#a9a7a7] mt-2" > Login with Google </button>
                <div className="text-center mt-3">
                  <p className="text-sm"> Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-400 font-medium underline"> Register </Link>
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

export default Signin;
