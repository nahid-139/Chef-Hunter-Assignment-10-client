import React, { useEffect, useState } from 'react';

const AllRecipes = () => {
    const [recipes,setRepices]=useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/recipes")
        .then((response) => response.json())
        .then((data)=> setRepices(data));
      },[]);

    return (
        <div>
            <div>
                {
                    recipes.map(recipe =><div
                    key={recipe.id}
                    
                    >
                    <h1>name is {recipe.name}</h1>


                    </div>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;