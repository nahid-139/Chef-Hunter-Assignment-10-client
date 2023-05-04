import React, { useContext, useState } from 'react';
import {  FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const {user,logOut}=useContext(AuthContext);

      // logout handler 
      const handleSignOut =()=>{
       logOut()
       .then(()=>{

       })
       .catch((error)=>{
        console.error(error)
       })
      }


    return (
    <div>
        <div>
               <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <div className=" flex align- ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                <img src="https://i.ibb.co/vBWVt04/3e8b208aec729fe8ea7e15ead554e7d5-modified.png"className='w-4/12' alt="" />
                <p className='text-black mt-10'>Chef Custody</p>
              </div>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <ActiveLink
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive?"font-medium tracking-wide text-xl capitalize  text-blue-500 transition-colors duration-200 hover:text-teal-accent-400":"font-medium tracking-wide text-xl capitalize text-black-100 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                  Home
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  to="/allrecipes"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive?"font-medium tracking-wide text-xl capitalize  text-black-500 transition-colors duration-200 hover:text-teal-accent-400":"font-medium tracking-wide text-xl capitalize text-black-100 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                  Recipes
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  to="/blogs"
                  aria-label="About us"
                  title="About us"
                  className={({isActive})=>isActive?"font-medium tracking-wide text-xl capitalize  text-blue-500 transition-colors duration-200 hover:text-teal-accent-400":"font-medium tracking-wide text-xl capitalize text-black-100 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                 Blogs
                </ActiveLink>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
           {
            user?.uid?<><p className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>{user?.displayName}</p>
            <button className='bg-yellow-300  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-2xl transition duration-200 rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none' onClick={handleSignOut}>Logout</button>
            </>:<>
            <li>
              <Link
                to="/signUp"
                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-60 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-60 mr-6 mb-2 focus:outline-none dark:focus:ring-blue-800"
                aria-label="Sign up"
                title="Sign up"
              >
                Log In
              </Link>
            </li>
            </>
           }
           {user?.photoURL?<img className='w-12 rounded-full' title={user?.displayName} src={user?.photoURL} alt="" />:<span className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center'><FaUser></FaUser></span>
           }
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          className={({isActive })=> isActive? "font-medium tracking-wide  text-yellow-600 transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/allrecipes"
                          className={({isActive })=> isActive? "font-medium tracking-wide  text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" }
                        >
                          Recipes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blogs"
                          className={({isActive })=> isActive? "font-medium tracking-wide  text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" }
                        >
                          Blogs
                        </NavLink>
                      </li>
                      {
                        user?.uid?<><p className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-xl transition duration-200 rounded shadow-md   focus:shadow-outline focus:outline-none'>{user?.displayName}</p>
                        <button className='bg-white  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-2xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400  focus:shadow-outline focus:outline-none' onClick={handleSignOut}>Logout</button>
                       </>:<>
                      <li>
                        <Link
                          to="/signUp"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                       </>
                      }
                     {user?.photoURL?<img className='w-12 rounded-full' title={user?.displayName} src={user?.photoURL} alt="" />:<span className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center'><FaUser></FaUser></span>
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
         </div>
       </div>
      </div>
   </div>
    );
};

export default Header;