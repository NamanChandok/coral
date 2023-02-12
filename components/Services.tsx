import React from 'react'

type Props = {}

export default function Services({}: Props) {
  return (
    <div className='text-center py-24 flex flex-col items-center gap-6 px-6'>
        <h1 className='font-poppins text-3xl md:text-5xl font-semibold'>Services</h1>
        <div className='h-[4px] w-1/3 bg-gradient-to-r from-primary to-secondary'></div>
        <div className='w-full md:w-2/3 flex md:flex-row flex-col gap-8'>
            <a href='psych' className="text-white text-3xl pt-24 font-semibold font-poppins bg-[url('/card-blue.png')] h-96 w-full md:w-1/3 bg-cover rounded-2xl mt-5 hover:mt-2 hover:shadow-lg bg-bottom transition-all ease-in-out duration-200">Psychologists</a>
            <a href='phys' className="text-white text-3xl pt-24 font-semibold font-poppins bg-[url('/card-pink.png')] h-96 w-full md:w-1/3 bg-cover rounded-2xl mt-5 hover:mt-2 hover:shadow-lg bg-bottom transition-all ease-in-out duration-200">Physiotherapists</a>
            <a href='grp' className="text-white text-3xl pt-24 font-semibold font-poppins bg-[url('/card-green.png')] h-96 w-full md:w-1/3 bg-cover rounded-2xl mt-5 hover:mt-2 hover:shadow-lg bg-bottom transition-all ease-in-out duration-200">Support Groups</a>
        </div>
    </div>
  )
}