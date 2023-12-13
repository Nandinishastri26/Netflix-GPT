import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
     <div className='fixed -z-10'>
     <img className='h-screen object-cover w-screen' src= {BG_IMG} alt="bg_img"/>
     </div>
     <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
   
  )
}

export default GPTSearch
