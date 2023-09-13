// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

const Header = () => {
    return (
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center my-6">
        <h1 className="font-bold text-2xl">
          Player<span className="text-orange-500">Draft</span>
        </h1>
        <div className="space-x-3 font-bold">
          <a
            className="text-gray-700 hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
            href=""
          >
            Home
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
            href=""
          >
            Player
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
            href=""
          >
            About us
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
            href=""
          >
            Contact us
          </a>
        </div>
        <img className="w-[50px]" src="../../../public/images/boy1.png" alt="" />
      </div>
    );
};

Header.propTypes = {
    
};

export default Header;