import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Register = () => {

    const [error,setError] =useState('');
    const {createUser} = useContext(AuthContext);

    const handleReg = event => {
        event.preventDefault ();

        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        const confirm = form.confirm.value;
        const imgUrl =form.imgUrl.value;
        console.log (email,password,confirm)

        setError('')
        if(password !== confirm){
            setError('Your Password is not match')
            return;
        }
        else if(password.length < 6){
            setError('Please type 6 Digit and Longer');
            return;
        }
        createUser(email, password)
        .then (result =>{
            const loggedUser = result.user;
        })
       .catch(error =>{
        setError(error.messege);
       })

    }
    

    return (
        <div className='mt-16 mb-20'>
            <div className=' hover:bg-teal-200 container border-2 w-9/12 bg-teal-400 rounded-lg m-auto  '>
            <h1 className='text-center text-4xl font-bold mb-10 mt-6'>Sign Up</h1>
            <form onSubmit={handleReg} className='text-center '>
                <p className='mr-56'>Email Address</p>
            <input  className='mb-12 w-4/12 rounded' name='email' type="email" placeholder='Your Email Address' required/>
            <br />
            <p className='mr-64'>Password</p>
            <input  className='mb-14 w-4/12 rounded'name='password'  type="Password" placeholder='Password' required/>
            <br />
            <p className='mr-52'>Confirm Password</p>
            <input className='mb-14 w-4/12 rounded' type="Password" name='confirm' placeholder='Re-Password' />
            <br />
            <p className='mr-64'>Image URL</p>
            <input className='mb-14 w-4/12 rounded'name='imgUrl' type="text" placeholder='Image Url' />
            <br />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
            mb-2">Sign Up</button>
            <p className='text-red-600'>{error}</p>
            <p className='mb-20'>Already have an account ? <Link className='text-cyan-800' to={'/login'}>Log In</Link></p>
            </form>
            </div>
        </div>
    );
};

export default Register;