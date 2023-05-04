import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const LogIn = () => {

const {signIn,forgetPassword,signinGoogle,signinGithub}=useContext(AuthContext)
const [userEmail,setUserEmail]=useState('')
const [error,setError]= useState('')
const location= useLocation()
const navigate= useNavigate()
const from= location.state?.from?.pathname ||'/';

// handleSubmit part start
 const handleSubmit=(event)=>{
  event.preventDefault()
  const froms = event.target;
  const email= froms.email.value;
  const password=froms.password.value;
  console.log(email,password)
  signIn(email,password)
  .then((result)=>{
    const user=result.user
    console.log(user)
     froms.reset()
    setError('')
   Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
    )
  // navigate part start
  navigate(from,{replace:true})
  })
  .catch((error)=>{
     console.error(error)
     setError(error.message)
  })
  }

  // handleForget password start
  const handleForgetPassword=()=>{
    forgetPassword(userEmail)
     console.log(userEmail)
      .then(() => {
   
       })
  .catch((error) => {
    console.error(error)
    setError(error.message)
  });
  }

    // signInGoogle part start
  const handleSignInGoogle=()=>{
        signinGoogle()
        .then((result)=>{
            const user= result.user
            console.log(user)
             Swal.fire(
     'Good job!',
    'You clicked the button!',
    'success'
    )
  // navigate part start
  navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))
  }
  // signInGithub part start
  const handleSignInGithub=()=>{
    signinGithub()
    .then( result=>{
      const user= result.user;
      console.log(user)
       Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
    )
  // navigate part start
  navigate(from,{replace:true})
    })
    .catch(error=>{
      console.error(error)
    })
  }

    return (
      <div className='bg-orange-200 ml-10 mr-10 py-10 rounded-xl mb-10'> 
        <div className='lg:w-4/12 lg:p-10 sm:mb-6 container lg:my-20  mx-auto rounded shadow-2xl  pt-10 border bg-yellow-300'>
           <h3 className="lg:text-center  mb-4 lg:text-3xl font-bold sm:text-center sm:mb-6 sm:text-2xl">
                  Login
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                    htmlFor="email"
                     className="text-2xl inline-block mb-1 font-medium"
                    >
                     E-mail
                    </label>
                    <input
                    onBlur={ event =>{setUserEmail(event.target.value)}}
                      placeholder="Your Email Address"
                      required
                      type="text"
                      className="text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                   <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="text-2xl inline-block mb-1 font-medium"
                    >
                     Password
                    </label>
                    <input
                      placeholder="Enter Your Password"
                      required
                      type="password"
                      className="text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="text-xl inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  bg-orange-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        LOGIN
                      
                    </button>

                       <span className='text-center'>{error}</span>
                <div className='lg:text-xl sm:text-xs py-3  font-bold '>
                   <p onClick={handleForgetPassword} className=' lg:text-xl sm:text-xs underline text-blue-600 underline-offset-1'>Forget Password</p>
                   <br></br>
                    <p className="lg:text-xl  text-gray-600 sm:text-sm">
                          New User In Webside ? <Link className=' underline  text-cyan-500' to='/signUp'>Please Register</Link>
                         </p>
                     </div>
                  </div>
                </form>
                  <div>
                   <button
                      onClick={handleSignInGoogle}
                      type="submit"
                      className="my-5 text-xl inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  bg-blue-600 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      <FaGoogle></FaGoogle><span className='ml-2'>Google</span>
                    </button>
                    <button
                    onClick={handleSignInGithub}
                      type="submit"
                      className="text-xl inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                     <FaGithub/><span className='ml-2'>GitHub</span>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default LogIn;