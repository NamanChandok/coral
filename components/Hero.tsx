import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-start pl-0 md:pl-40 text-center overflow-hidden bg-[url('/home-texture.svg')] bg-cover shadow-inner">
        <div className='bg-white p-8 flex items-center shadow-md rounded-3xl'>
            <img src='./home-text.png' alt="coral always there for you" className='md:h-44 md:w-auto w-full h-auto'/>
        </div>
    </div>
  )
}