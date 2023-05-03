import React, { useEffect } from 'react';
import { useState } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  const [chefs, setChef] = useState([]);
  const [recipes,setRepices]=useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);
  console.log(chefs);

  useEffect(()=> {
    fetch("http://localhost:5000/recipes")
    .then((response) => response.json())
    .then((data)=> setRepices(data));
  },[]);


  return (
    <div>
      <Banner></Banner>
      <h1 className='text-center font-bold text-4xl mt-20 mb-10'>Our Chefs</h1>
      {
        chefs.map(chef => <p
          key={chef.id}
          
        >
          <div className='bg-yellow-500 '>
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
                  </div>
                  <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                    <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                      <div className="h-full p-5 border border-l-0 rounded-r">
                        <h6 className="mb-2 font-semibold leading-5">
                          {chef.famous_recipes[0]}
                        </h6>
                        <p className="text-sm text-gray-900">
                          <img src={chef.recipe_url} alt="" />
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
                            <li className='text-2xl font-bold'> {chef.famous_recipes[0]}</li>
                            <p>How to make you this recipe.In your house.Click below for more details.....</p>
                            <Link to={'recipeDetails'} type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-4 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Recipe Details</Link>
                            
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="object-cover h-56 rounded shadow-lg sm:h-96 items-center "
                    src={chef.img_url}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </p>)
      }
    </div>
  );
};

export default Home;