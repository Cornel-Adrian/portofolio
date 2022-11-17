import React from 'react'
import Logo from '../img/logo.PNG';

function Toolbar() {
  return (
    <div className='m-2 sm:mx-72'>
      <div className='bg-gray-200 shadow-gray-500 p-4 flex gap-1 justify-between rounded-3xl shadow-gray shadow-sm'>
        <div className='hidden m-0 md:block'>
          <img src={Logo} className="w-200 h-200"></img>
        </div>
        <div className='md:my-auto'>
          <div className='flex gap-5  md:m-auto'>
            <a href='#' className='bg-rose-600 text-white px-3 py-2 rounded-md text-sm font-medium shadow-gray shadow-lg'>Presentation</a>
            <a href='#' className='bg-rose-600 text-white px-3 py-2 rounded-md text-sm font-medium shadow-gray shadow-lg'>Skills</a>
            <a href='#' className='bg-rose-600 text-white px-3 py-2 rounded-md text-sm font-medium shadow-gray shadow-lg'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar