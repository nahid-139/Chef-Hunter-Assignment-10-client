import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const LogIn = () => {
    const {logIn} =useContext(AuthContext);

    const handleLogIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        

        logIn(email,password)
        .then (result =>{
            const loggedUser = result.user;
            
            form.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='mt-6 mb-20'>
            <div className='container border-2 w-9/12 bg-teal-400 hover:bg-teal-200 rounded-lg m-auto  '>
            <h1 className='text-center text-4xl font-bold mb-10 mt-6'>Log In</h1>
            <form onSubmit={handleLogIn} className='text-center'>
            <p className='mr-56'>Email Address</p>
            <input className='mb-6 w-4/12 rounded 'name='email' type="email" placeholder='Your Email Address' required/>
            <br />
            <p className='mr-64'>Password</p>
            <input className='mb-14 w-4/12 rounded'name='password' type="Password" placeholder='Password'required />
            <br />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
            mb-12">Submit</button>
            <p className='mb-20'>New to Chef Custody? <Link className='text-cyan-800' to={'/signup'}>Create new Account</Link></p>
            </form>
            </div>
        </div>
    );
};

export default LogIn;