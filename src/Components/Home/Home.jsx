import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import Content from '../Content/Content';
import Team from '../Team/Team';
import LazyLoad from 'react-lazy-load';

const Home = () => {
  const [chefs, setChef] = useState([]);
  

  useEffect(() => {
    fetch("https://chef-server-rho-three.vercel.app/chef")
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);
  console.log(chefs);

  return (
    <div className='m-4 '>
      
      <Banner></Banner>
      <Content></Content>
      <h1 className='text-center font-bold text-4xl mt-20 mb-10'>Our Chefs</h1>
      {
        chefs.map(chef => <div
          key={chef.id}
          
        >
          <div className='bg-yellow-500  '>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                      {chef.name}
                    </h2>
                    <p className="text-base text-gray-200 md:text-lg">
                      {chef.bio}
                    </p>
                    <div className='flex justify-between align-middle text-stone-300 mt-6'>
                    <p>Experience: {chef.experience_years} years</p>
                    <div className='flex gap-2 align-middle'>
                    <p>Likes: {chef.likes}</p>
                    <FaThumbsUp></FaThumbsUp>
                    </div>
                    <p>Nationality: {chef.nationality}</p>
                    </div>
                  </div>
                  <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                    <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                      <div className="h-full p-5 border border-l-0 rounded-r">
                        <h6 className="text-xl font-semibold leading-5 mt-4">
                          {chef.famous_recipes[0]}
                        </h6>
                        <p className="text-sm text-gray-900 py-10">
                          <LazyLoad><img src={chef.recipe_url[1]} alt="" /></LazyLoad>
                        </p>
                        
                      </div>
                    </div>
                    <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                      <div className="h-full p-5 border border-l-0 rounded-r">
                        <h6 className="mb-2 font-semibold leading-5">
                          Recipes
                        </h6>
                        <p className=" text-gray-900">
                          <ul>
                            <li className='text-lg font-bold'> 
                            1. {chef.famous_recipes[0]}
                            </li>
                            <li className='text-lg font-bold'> 
                            2. {chef.famous_recipes[1]}
                            </li>
                            <li className='text-lg font-bold'> 
                            3.{chef.famous_recipes[2]}
                            </li>
                            <li className='text-lg font-bold'> 
                            4.{chef.famous_recipes[3]}
                            </li>
                            <li className='text-lg font-bold'> 
                            5.{chef.famous_recipes[4]}
                            </li>
                            <li className='text-lg font-bold'> 
                            6.{chef.famous_recipes[5]}
                            </li>
                            <p className='mt-2'>To see more of our  recipes an details. Click here.....</p>
                            <Link to={`/chef/${chef.id}`} type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-4 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Details</Link>
                            
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <LazyLoad ><img
                    className="object-cover h-56 rounded shadow-lg sm:h-96 items-center mt-20 "
                    src={chef.img_url}
                    alt=""
                  /></LazyLoad>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
      <Team></Team>
    </div>
  );
};

export default Home;