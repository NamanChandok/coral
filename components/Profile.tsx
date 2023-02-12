import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'

type Props = {
    name: string,
    title: string,
    address: string
}

export default function Profile({name, title, address}: Props) {
  return (
    <div className='flex flex-row space-x-4'>
        <MapPinIcon className='w-12 h-12 text-secondary hidden md:block my-auto flex-shrink-0'/>
        <div className='flex flex-col'>
            <h3 className='font-poppins text-2xl font-semibold'>{name}</h3>
            <h5 className='text-gray-400 text-md font-semibold font-poppins'>{title}</h5>
            <p className='text-sm font-cabin'>{address}</p>
        </div>
    </div>
  )
}