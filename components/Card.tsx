import React from 'react'
import {PlayIcon, MusicalNoteIcon} from '@heroicons/react/24/solid'

type Props = {
    title: string,
    imgUrl?: string,
    desc?: string,
    url: string,
    type: string
}

export default function Card({title, imgUrl, desc, url, type}: Props) {
  if(type == "card") {
    return ( 
        <a href={url} className={`text-white flex-shrink-0 text-3xl pt-20 font-semibold font-poppins h-80 min-h-full w-full md:w-72 bg-cover rounded-2xl opacity-90 hover:opacity-100 text-center hover:shadow-lg bg-bottom transition-all ease-in-out duration-200 mb-8 bg-[url('/${imgUrl}')]`}>{title}</a>
    );
  } else {
    return (
        <div className="p-6 h-80 min-h-full w-full flex-shrink-0 md:w-72 bg-gray-100 rounded-2xl opacity-90 hover:opacity-100 hover:shadow-lg transition-all ease-in-out duration-200 mb-8">
            <div className={`w-full h-40 mb-2 rounded-md relative`}>
              <img src={imgUrl} className="w-full h-full object-cover z-0 absolute opacity-60 rounded-md" />
              <a href={url} className='h-16 w-16 bg-gray-200/90 hover:bg-gray-200 transition ease-in-out duration-150 rounded-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
                {type === "video" ? <PlayIcon className='text-[#8fa8b0] w-8 h-8'/> : <MusicalNoteIcon className='text-[#8fa8b0] w-8 h-8' />}
              </a>
            </div>
            <a href={url} className='text-gray-900 font-poppins'>{title}</a>
            <p className='text-gray-800 font-cabin text-sm'>{desc}</p>
        </div>
    );
  }
}