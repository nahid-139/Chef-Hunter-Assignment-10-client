import { Link, useLoaderData } from 'react-router-dom';

const Recipes = () => {

    const recipe = useLoaderData();
    return (
        <div className='mt-20 mb-20'>
            <h1 className='font-bold text-center text-3xl mb-10'>Our Recipes</h1>
            <div className=''>
                        <div className='md:flex ml-20'>
                            <div className=" overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
                                <img
                                    src={recipe.recipe_url[0]} className="object-cover rounded-xl w-auto h-64 mt-10" alt="" />
                                <div className="p-5 border border-t-0">
                                    <p className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">{recipe.famous_recipes[0]}</p>
                                
                                    <p className=" text-gray-700 mb-6">
                                       {recipe.description_recipe}
                                    </p>
                                    <Link to={`/recipes/${recipe.id}`}
                                        aria-label=""
                                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-8 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        Recipe Details
                                    </Link>
                                </div>
                            </div>
                            <div className=" overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
                                <img
                                    src={recipe.recipe_url[1]} className="object-cover rounded-xl w-auto m-4 h-64 mt-10" alt="" />
                                <div className="p-5 border border-t-0">
                                    <p className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">{recipe.famous_recipes[1]}</p>
                                
                                    <p className=" text-gray-700 mb-6">
                                       {recipe.description_recipe}
                                    </p>
                                    <Link to={`/recipes/${recipe.id}`}
                                        aria-label=""
                                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-8 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        Recipe Details
                                    </Link>
                                </div>
                            </div>
                            <div className=" overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
                                <img
                                    src={recipe.recipe_url[2]} className="object-cover rounded-xl  h-64 mt-10 w-auto" alt="" />
                                <div className="p-5 border border-t-0">
                                    <p className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">{recipe.famous_recipes[2]}</p>
                                
                                    <p className=" text-gray-700 mb-6">
                                       
                                    </p>
                                    <Link to={`/recipes/${recipe.id}`}
                                        aria-label=""
                                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mt-8 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        Recipe Details
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
    );
};

export default Recipes;