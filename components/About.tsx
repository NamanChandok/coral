import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='text-center py-24 flex flex-col items-center gap-6 px-6'>
        <h1 className='font-poppins text-3xl md:text-5xl font-semibold'>About Coral</h1>
        <div className='h-[4px] w-1/3 bg-gradient-to-r from-primary to-secondary'></div>
        <p className='w-full md:w-2/3 text-xl font-cabin text-light'>
        Coral is highly-prized as a substance believed to be endowed with mysterious sacred properties. It is a symbol of modesty, wisdom, happiness and immortality.
        <br /><br />
        Here at coral, we help you connect with different psychologists, therapists and support groups who can help you with the issues you're going through. Here we try to get rid of negativity and help you live a happy and positive life. You can also view nearby psychologists, therapists and support groups and interact with them.
        </p>
    </div>
  )
}