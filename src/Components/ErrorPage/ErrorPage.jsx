import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	
    const error = useRouteError();
     console.error(error);
    return (
     <section className="flex items-center lg:h-full  lg:py-64 p-16 bg-gray-900 text-white dark:text-gray-100">
	    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		         <div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-2xl">Sorry, an unexpected error has occurred</p>
			<p className="mt-4 mb-8 dark:text-gray-400">
                <i>{error.statusText || error.message}</i>
            </p>
			<Link rel="noopener noreferrer" to="/home" className="px-8 py-3 font-semibold rounded bg-violet-400 dark:text-gray-900">Back to homepage</Link>
		</div>
	    </div>
    </section>
    );
};

export default ErrorPage;