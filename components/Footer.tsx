import React from 'react'

type Props = {
  logged?: boolean;
};

export default function Footer({logged}: Props) {
  return (
    <div className='text-center py-12 flex flex-col items-center gap-6 bg-gray-200'>
        <img src='./home-text.png' alt="coral always there for you" className='md:h-48 md:w-auto w-full h-auto'/>
        <div className='flex md:flex-row flex-col md:divide-x-2 divide-gray-900'>
            <a href='/#home' className='px-4'>Home</a>
            <a href='/#about' className='px-4'>About Us</a>
            <a href='/#services' className='px-4'>Services</a>
            <a href='/#contact' className='px-4'>Contact Us</a>
            { logged ? <a href='/#home' className='px-4'>Log Out</a> : <a href='/login' className='px-4'>Login</a> }
        </div>
    </div>
  )
}