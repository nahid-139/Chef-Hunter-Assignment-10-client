import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllRecipes = () => {
    const [recipes,setRepices]=useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/recipes")
        .then((response) => response.json())
        .then((data)=> setRepices(data));
      },[]);

    return (
        <div>
            <div className='md:grid grid-cols-2 gap-6 items-center m-20 ml-40'>
                {
                    recipes.map(recipe =><div
                    key={recipe.id}
                    
                    >
                    <div>
                        <img className='w-9/12 rounded-2xl' src={recipe.img_url} alt="" />
                        <p className='text-xl font-bold mt-6 mb-2'>{recipe.name}</p>
                        <p className='mb-8'>{recipe.description}</p>
                        <div>
                    <Link to={`/recipes/${recipe.id}`}aria-label="" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-60 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Recipe Details</Link>
                    </div>
                        
                    </div>
                    

                    </div>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;