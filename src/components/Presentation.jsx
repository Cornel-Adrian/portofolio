import React from 'react'
import DevImg from '../img/DevIcon.png'

function Presentation() {
    return (
        <div className='md:flex'>
            <div><img src={DevImg} alt="DevImg" className="rounded-full shadow-lg shadow-gray-500 mt-10"></img></div>
            <div className='text-center m-auto pt-5'><span>Hi my name is Cornel and I'm a software developer</span></div>
        </div>
    )
}

export default Presentation