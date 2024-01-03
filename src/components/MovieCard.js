import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom';


const MovieCard = ({posterPath,movieId,movieTitle,overview,date}) => {

  const myObj ={
    obj:{
    posterPath:{posterPath},
    movieId:{movieId},
    movieTitle:{movieTitle},
    overview:{overview},
    date:{date},
    }
  }

  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
        <Link to='/movieCardDesc' state={myObj}>
      <img alt= "Movie Card" src={IMG_CDN_URL+posterPath}/>
      </Link>
       </div>
  )
}

export default MovieCard
