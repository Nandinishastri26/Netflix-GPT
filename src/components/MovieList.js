import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title,movies}) => {
    //console.log("mov"+movies);
  return (
    <div className='px-6'>
         <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide '>
            <div className='flex'>
                {movies?.map((movie)=>(
               <MovieCard key={movie.id} 
               movieId={movie.id} 
               movieTitle={movie.title} 
               overview={movie.overview}
               posterPath={movie.poster_path}
               date={movie.release_date}
               />
                ))}
           
            </div>
        </div>
    
    </div>
  )
}

export default MovieList
