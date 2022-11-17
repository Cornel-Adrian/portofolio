import React from 'react'
import Logo from '../img/logo.PNG';

function Toolbar() {
  return (
    <div className='bg-gray-200 shadow-gray-500 p-4 flex gap-1 justify-between rounded-3xl shadow-gray shadow-sm'>
      <div className='hidden m-0 md:block'>
        <img src={Logo} alt="logo" className="w-200 h-200"></img>
      </div>
      <div className='m-auto md:mr-2'>
        <div className='flex gap-5  md:m-auto'>
          <a href='#presentation' className='bg-rose-600 text-white font-thin rounded-md text-sm p-auto shadow-gray shadow-lg md:px-3 md:py-2 md:font-medium'>Presentation</a>
          <a href='#skills' className='bg-rose-600 text-white font-thin rounded-md text-sm p-auto shadow-gray shadow-lg md:px-3 md:py-2 md:font-medium'>Skills</a>
          <a href='#skills' className='bg-rose-600 text-white font-thin rounded-md text-sm p-auto shadow-gray shadow-lg md:px-3 md:py-2 md:font-medium' >Projects</a>
          <a href='#contact' className='bg-rose-600 text-white font-thin rounded-md text-sm p-auto shadow-gray shadow-lg md:px-3 md:py-2 md:font-medium'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Toolbar