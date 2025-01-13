import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies?.results); 
  if(!movies) {
    return;
  }
  const mainMovie = movies[2];

  
  return (
    <div className='text-white '>
      <div className='p-3 pt-[20%] absolute aspect-16/10'>
        <h1 className='p-3 text-5xl font-bold'>{mainMovie.title}</h1>
        <p className='w-2/5 text-l p-3'>{mainMovie.overview}</p>
        <div className='my-10'>
          <button className='text-xl bg-white p-3 rounded-md m-4 m-2 font-bold hover:bg-slate-50 text-black'>▶︎ Play Now</button>
          <button className='text-xl bg-gray-500  bg-opacity-45 p-3 rounded-md m-2 m-2 font-bold hover:bg-opacity-50'> ⓘ More Info</button>
        </div>
      </div>
      <VideoBackground  movieId = {mainMovie.id}/>
    </div>
  )
}

export default MainContainer