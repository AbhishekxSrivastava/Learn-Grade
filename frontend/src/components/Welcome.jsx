import React from 'react'
import logo from '../assets/logo.png';

export const Welcome = ({onStart}) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
      <img src={logo} className="w-[200px] sm:w-[150px]" alt="" />

      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Welcome to Learn-Garde
      </h1>

      <span className='text-lg font-semibold sm:text-2xl'>
        Test your Expertise !!!
      </span>

      <button onClick={onStart} className='w-1/2 rounded-full
      bg-black px-4 py-2 text-sm text-white hover:opacity-80
      sm:1-3 sm:text-xl'>Start Quiz...</button>
    </div>
  );
}
