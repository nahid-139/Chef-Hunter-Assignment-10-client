import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Team = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Chefs Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
        A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word "chef" is derived from the term chef de cuisine the director or head of a kitchen.
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-auto h-full rounded"
              src="https://www.forbesindia.com/media/images/2018/Jun/img_106499_chefsanjeevkapoor3.jpg"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Sanjeev Kapoor</p>
            <p className="mb-5 text-xs text-gray-800">Indian chef</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
               <FaFacebook></FaFacebook>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaTwitter></FaTwitter>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-auto h-full rounded"
              src="https://fdstatic.foodfood.com/odd/images/4HQX4uChef-Saransh-Goila.jpg"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Saransh Goila</p>
            <p className="mb-5 text-xs text-gray-800">Indian chef</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaTwitter></FaTwitter>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img src='https://assets.telegraphindia.com/telegraph/b86693e9-3006-48f0-a92b-eaf17a84a532.jpg'
              className="absolute object-cover w-auto h-full rounded"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Ranveer Brar</p>
            <p className="mb-5 text-xs text-gray-800">Indian Chef</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaTwitter></FaTwitter>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-auto h-full rounded"
              src="https://i0.wp.com/bharatflux.com/wp-content/uploads/2023/03/Chef-vikas-khanna-.jpg?fit=1080%2C1350&ssl=1"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Vikas Khanna</p>
            <p className="mb-5 text-xs text-gray-800">Indian Chef</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
              <FaFacebook></FaFacebook>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaTwitter></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Team;