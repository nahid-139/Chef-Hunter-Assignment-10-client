import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {

 return (

// loader part start

 <div className='mx-auto text-center'>

    <button type="button" className ="" disabled>
       {/* <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> */}
       <FadeLoader color="rgba(16, 20, 22, 1)"/>
     </button>
     
  </div>
    );
};

export default Loader;