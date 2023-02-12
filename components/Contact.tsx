import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='text-center py-24 flex flex-col items-center gap-6 px-6'>
        <h1 className='font-poppins text-3xl md:text-5xl font-semibold'>Contact Us</h1>
        <div className='h-[4px] w-1/3 bg-gradient-to-r from-primary to-secondary'></div>
        <ul className='w-full md:w-2/3 text-xl font-cabin text-light'>
            <li className='flex flex-items-center space-x-2 justify-center py-2'><PhoneIcon className='text-primary h-7 w-7'/><p>+91 98XX-XXX-XXX</p></li>
            <li className='flex flex-items-center space-x-2 justify-center py-2'><EnvelopeIcon className='text-primary h-7 w-7'/><p>response@coral.com</p></li>
            <li className='flex flex-items-center space-x-2 justify-center py-2'><MapPinIcon className='text-primary h-7 w-7'/><p>New Delhi, India</p></li>
        </ul>
    </div>
  )
}