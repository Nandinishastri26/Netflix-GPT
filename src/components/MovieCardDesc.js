import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { useLocation } from 'react-router-dom';
import { IoMdDownload } from "react-icons/io";
import { FaPlay } from "react-icons/fa";


const MovieCardDesc = () => {
  const { state } = useLocation();
  console.log(state);

  if (!state?.obj) {
    return <div>No data available</div>;
  }

 const { posterPath, movieTitle, overview,date } = state?.obj;

 return (
    <div className='bg-black flex justify-center items-center pt-3  md:pt-7'>
      <div className='w-[400%] md:w-[65%] md:ml-12'>
        <img className='md:max-w-[178%] md:h-[764px] md:m-16 m-3' alt="Movie Card" src={IMG_CDN_URL + posterPath?.posterPath} />
        </div>
        <div className=' flex flex-col items-start mt-9 ml-9 md:ml-60 text-pretty'>
        <h1 className='text-lg md:text-5xl font-bold  text-white'>{movieTitle?.movieTitle}</h1>
        <span className='text-red-700 md:text-lg pt-3 font-bold'>{date?.date}</span>
        <div className='flex pt-3'>
        <button className='bg-white flex items-center text-black py-2 md:py-4 px-3 md:px-12 md:text-lg text-xs rounded-md hover:bg-opacity-80'>
            <FaPlay /> Play
            </button>
            <button className='bg-gray-700 ml-7 flex items-center text-white py-2 md:py-4 px-3 md:px-12 md:text-lg text-xs mr-2 rounded-md hover:bg-opacity-80'>
            <IoMdDownload /> Download
            </button>
        </div>
        <p className=' md:inline-block md:py-6  md:text-xl md:w-1/2 text-xs pb-8 pt-2 md:text-left text-gray-500'>{overview?.overview}</p>
      </div>
       
    </div>
  );
};

export default MovieCardDesc;
