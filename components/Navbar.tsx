import React from 'react'
const store = require("store2");

type Props = {
  logged?: boolean;
};


export default function Navbar({ logged }: Props) {
    if (logged) {  
      return (
        <nav className="w-full h-20 bg-gray-900 text-sm fixed py-2 px-8 md:px-24 flex items-center justify-between z-20">
          <div className='h-full flex items-center gap-8'>
            <a href='/#home' className="h-full">
                <img src="./logo.png" alt="logo" className="h-full"/>
            </a>
          </div>
          <a href='/#home' className='cursor-pointer bg-white text-gray-900 rounded-md px-4 py-1 shadow font-semibold hover:shadow-white transition ease-in-out duration-150'>Log Out</a>
        </nav>
      ); 
    } else {
      return (
        <nav className="w-full h-20 bg-gray-900 text-sm fixed py-2 px-8 md:px-24 flex items-center justify-between z-20">
            <div className='h-full flex items-center gap-8'>
              <a href='/#home' className="h-full">
                  <img src="./logo.png" alt="logo" className="h-full"/>
              </a>
              <a href='/#about' className='text-gray-300 hover:text-white transition ease-in-out duration-150 md:block hidden'>About Us</a>

              <a href='/#services' className='text-gray-300 hover:text-white transition ease-in-out duration-150 md:block hidden'>Services</a>

              <a href='/#contact' className='text-gray-300 hover:text-white transition ease-in-out duration-150 md:block hidden'>Contact Us</a>
            </div>
            <a href='login' className='bg-white text-gray-900 rounded-md px-4 py-1 shadow font-semibold hover:shadow-white transition ease-in-out duration-150'>Login</a>
        </nav>
      ) 
    }
}