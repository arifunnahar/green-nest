import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { auth } from '../firebase/firebase.config';


const Signin = () => {
    const [user, setUser] = useState(null)

  const [show, setShow] = useState(false);


    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;
     
      
        

        
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
                setUser(res.user)
                toast.success("Signin successful");
            })
        
         .catch((e) => {
                    toast.error(e.message);
                })
}

    // google signin
    

const handleGoogleSignin = () => {
  const googleProvider = new GoogleAuthProvider();

  signInWithPopup(auth, googleProvider)
      .then((res) => {
          if (!res.user?.emailVerified) {
              toast.error("Your email is not verified.")
              return;
        }
          
          
      console.log(res);
      setUser(res.user);
      toast.success("Google signin successful");
    })
    .catch((e) => {
      toast.error(e.message);
    });
};





    // signout
    const handleSignOut = () => {
        signOut(auth)
         .then((res) => {
                console.log(res)
              
             toast.success("Signout successful");
             setUser(null)
            })
        
         .catch((e) => {
                    toast.error(e.message);
                })
    }


    console.log(user)

    return (     <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
                    {
                        user ? (<div className='text-center space-y-3'>
                            <img className='h-20 w-20 rounded-full mx-auto' src={user?.photoURL || "https://via.placeholder.com/88"} alt="" />
                            <h2 className='text-xl font-semibold'>{user?.displayName}</h2>  
                            <p className='text-sm '>{user?.email}</p>
                            <button onClick={handleSignOut} className='btn bg-green-600 w-full rounded-md text-white'>Signout</button>
                        
                        
                        </div>) : (<form onSubmit={handleSignup}>
                               <h1 className="text-2xl text-center font-bold">Login</h1>
         
                                <fieldset className="fieldset">
                                 
          
                                    {/* Email */}
                                    <div className='relative'>
                                         <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    {/* password */}
                                    <input type={show? "text" : "password"}
                                        name="password"
                                        className="input"
                                        placeholder="Password" />
                                    
                <span onClick={() => setShow(!show)} className='absolute right-[25px] top-[90px] cursor-pointer z-50'>
                     {show ? <FaEye/> :<IoEyeOff/>  }               
                </span>
             </div>
    
    
    
              <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            
                            {/* /* Google */} 
            <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#a9a7a7] mt-2 cursor-pointer">
             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
                </button>
  
                                  
                  <div className='text-center mt-3'>
                      <p className='text-sm'>Don't have an account?{" "}
                      <Link to="/signup" className='text-blue-400 font-medium underline'>Signup</Link></p>
                  </div>
          </fieldset>
        </form>
        ) }
        </div>
      </div>
    </div>
  </div>

    );
};

export default Signin;