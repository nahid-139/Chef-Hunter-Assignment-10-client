import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <form className='mt-6 mb-20'>
            <div className='container border-2 w-9/12 bg-teal-400 hover:bg-teal-200 rounded-lg m-auto  '>
            <h1 className='text-center text-4xl font-bold mb-10 mt-6'>Log In</h1>
            <div className='text-center'>
            <p className='mr-56'>Email Address</p>
            <input className='mb-12 w-4/12 rounded ' type="email" placeholder='Your Email Address' required/>
            <br />
            <p className='mr-64'>Password</p>
            <input className='mb-14 w-4/12 rounded' type="Password" placeholder='Password'required />
            <br />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
            mb-12">Submit</button>
            <p className='mb-20'>New to Chef Hunter? <Link className='text-cyan-800' to={'/signup'}>Create new Account</Link></p>
            </div>
            </div>
        </form>
    );
};

export default LogIn;