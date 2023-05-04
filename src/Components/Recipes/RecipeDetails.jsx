import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = () => {

    const [isHidden, setIsHidden] = useState(false);
    const diffToast = () => {
        toast("Favourite Item Selected",{
            position: "top-center",
        })
        setIsHidden(true);
      };

    const recipeDetails = useLoaderData();

    return (
        <div>
            <h1 className='font-bold text-center text-2xl mt-6 mb-8'>Recipe Detail</h1>
            <img className='md:w-6/12 rounded-2xl  md:ml-80' src={recipeDetails.img_url} alt="" />
            <h1 className='font-bold text-center text-2xl mt-6'>{recipeDetails.name}</h1>
            <h1 className='mt-4 text-lg font-semibold text-center'>{recipeDetails.description}</h1>
            <h1 className='text-center font-bold text-2xl mt-10'>Ingredients</h1>
            <ul className='text-center mt-6 mb-20  md:ml-80 font-semibold text-lg border md:w-6/12 rounded-2xl bg-yellow-200 py-10 '>
                <li>{recipeDetails.ingredients[0]}</li>
                <li>{recipeDetails.ingredients[1]}</li>
                <li>{recipeDetails.ingredients[2]}</li>
                <li>{recipeDetails.ingredients[3]}</li>
                <li>{recipeDetails.ingredients[4]}</li>
                <li>{recipeDetails.ingredients[5]}</li>
                <li>{recipeDetails.ingredients[6]}</li>
                <li>{recipeDetails.ingredients[7]}</li>
                <li>{recipeDetails.ingredients[8]}</li>
                <li>{recipeDetails.ingredients[9]}</li>
                <li>{recipeDetails.ingredients[10]}</li>
                {isHidden ? null :<button onClick={diffToast} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-6 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Favourite Item
            </button>}
            </ul>
            <div>
            <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default RecipeDetails;