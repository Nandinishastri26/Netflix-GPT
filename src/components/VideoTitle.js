import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>

        <div className='my-4 flex md:m-0 ' >
            <button className='bg-white  flex items-center text-black py-2 md:py-4 px-3 md:px-12 text-lg  rounded-md hover:bg-opacity-80'>
            <FaPlay className='mr-2'/> Play
            </button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 items-center text-white p-4 px-12 text-xl bg-opacity-50 rounded-md hover:bg-opacity-80'>
           <FiInfo className='mr-2'/> More Info
            </button>
            
        </div>
      
    </div>
  )
}

export default VideoTitle

