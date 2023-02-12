import React from 'react'

import Link from 'next/link'

type Props = {
  logged?: boolean;
};

export default function Footer({logged}: Props) {
  return (
    <div className='text-center py-12 flex flex-col items-center gap-6 bg-gray-200'>
        <img src='./home-text.png' alt="coral always there for you" className='md:h-48 md:w-auto w-full h-auto'/>
        <div className='flex md:flex-row flex-col md:divide-x-2 divide-gray-900'>
            <Link href='/#home' className='px-4'>Home</Link>
            <Link href='/#about' className='px-4'>About Us</Link>
            <Link href='/#services' className='px-4'>Services</Link>
            <Link href='/#contact' className='px-4'>Contact Us</Link>
            { logged ? <Link href='/#home' className='px-4'>Log Out</Link> : <Link href='/login' className='px-4'>Login</Link> }
        </div>
    </div>
  )
}