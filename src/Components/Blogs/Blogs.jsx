import React from 'react';
import ReactToPdf from 'react-to-pdf'
import { FaDownload } from "react-icons/fa";

const Blogs = () => {
    const ref = React.createRef();

    return (
        <div className=' p-3' ref={ref}>
            <div>
            <ReactToPdf targetRef={ref} x={.5} y={.5} scale={0.6} filename="creative-shaper.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf}
                             className=" lg:ml-[600px] flex text-center
                              bg-orange-400 px-6 py-4 rounded-xl">
                                <FaDownload className='mr-2'></FaDownload>
                                 <p className='text-lg text-white font-semibold'>Download to PDF</p>
                             </button>
                        )}
                    </ReactToPdf>
            </div>
            <div className='m-20 '>
            <div className='bg-orange-200 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>What is the differences between uncontrolled and controlled components?</h1>
                <p className='text-lg mb-8'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='bg-orange-300 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>How to validate React props using PropTypes?</h1>
                <p className='text-lg mb-8'>The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable, instance, multiple, collection, and required prop types.Below are the validators for the basic data types:

                   <ul>
                   <li className='list-disc'>PropTypes.any: The prop can be of any data type</li>
                    <li className='list-disc'>PropTypes.bool: The prop should be a Boolean</li>
                    <li className='list-disc'>PropTypes.number: The prop should be a number</li>
                    <li className='list-disc'>PropTypes.string: The prop should be a string</li>
                   <li className='list-disc'> PropTypes.func: The prop should be a function</li>
                    <li className='list-disc'>PropTypes.array: The prop should be an array</li>
                    <li className='list-disc'>PropTypes.object: The prop should be an object</li>
                    <li className='list-disc'>PropTypes.symbol: The prop should be a symbol</li>
                    </ul>
                    </p>
            </div>
            <div className='bg-orange-400 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>
                What is the difference between nodejs and express js?
                </h1>
                <p className='text-lg mb-8'>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className='bg-orange-500 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>
                What is a custom hook, and why will you create a custom hook?
                </h1>
                <p className='text-lg mb-8'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;