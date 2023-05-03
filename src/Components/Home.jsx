import React, { useEffect } from 'react';
import { useState } from 'react';
import Banner from './Banner';

const Home = () => {
    const [homeData,setHomeData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/chef")
    .then((response) => response.json())
    .then((data) => setHomeData(data));
    },[]);
    console.log(homeData);
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center font-bold text-4xl mt-20 mb-10'>Our chefs</h1>
            {
             homeData.map(home =><p
             key={home.id}
             >
                <h1>he is name is {home.name}</h1>

             </p>)
            }
        </div>
    );
};

export default Home;