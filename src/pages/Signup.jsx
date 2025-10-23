import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Signup = () => {
    const [show, setShow] = useState(false);


    const handleSignin = (e) => {
        e.preventDefault();
        const displayName = e.target.name?.value;
        const photoURL = e.target.photo?.value;
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        console.log('signup', { displayName, photoURL, email, password });
     
        


        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
         if (!regExp.test(password)) {
   
             toast.error(" Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
                 
             );
        return;
    
  }

            // 1st step  create user email and password
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {

                // update profile

                updateProfile(res.user,{
                    displayName: displayName,
                    photoURL: photoURL,
                }).then(() => {
                     console.log(res);

                    //send email verification
                    sendEmailVerification(res.user)
                        .then((res) => {
                         console.log(res);
                 
                        toast.success("Signup successful. Check your email to validate your account");
                        
                    }).catch((e) => {
                        toast.error(e.message);
                        
                })



                   
                })
                 .catch((e) => {
                    toast.error(e.message);
                })
            })
        

         .catch((e) => {
                    toast.error(e.message);
                })
    }




    return (
       <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Signup</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignin}>
         <fieldset className="fieldset">
                       {/* name       */}
          <label className="label text-gray-900">Name</label>
                                <input type="text"
                                    name="name"
                                    className="input  text-gray-400"
                                    placeholder="Name" />
                    {/* photo */}
           <label className="label text-gray-900">Photo</label>
                                <input type="photo"
                                    name="photo"
                                    className="input text-gray-400"
                                    placeholder="Your photo URL here" />
                                
                {/* Email */}
                <div className='relative'>
                <label className="label text-gray-900">Email</label>
                                    <input type="email"
                                        name="email"
                                        className="input  text-gray-400" placeholder="Email" />
                <label className="label text-gray-900">Password</label>
                                    
                                {/* password */}
                                <input type={show? "text" : "password"}
                                    name="password"
                                    className="input  text-gray-400"
                                    placeholder="Password" />
                                
            <span onClick={() => setShow(!show)} className='absolute right-[25px] top-[90px] cursor-pointer z-50'>
                 {show ? <FaEye/> :<IoEyeOff/>  }               
            </span>
         </div>



       
         <button className="btn btn-neutral mt-4">Signup</button>
                                
                <div className='text-center mt-3'>
                                    <p className='text-sm'>Already have an account?{" "}
                                          
                    <Link to="/signin" className='text-blue-400 font-medium underline'>Signin</Link></p>
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