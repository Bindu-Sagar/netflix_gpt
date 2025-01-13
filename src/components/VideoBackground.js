import React from 'react'
import { useSelector } from 'react-redux';
import useGetTrailerDetails from '../hooks/useGetTrailorDetails';

const VideoBackground = ({movieId}) => {
  useGetTrailerDetails(movieId);
  const trailer = useSelector(store => store.movies?.videoTrailer);
  
  if (!trailer) {
    return <div>Loading trailer...</div>; // Placeholder for loading state
  }
  return (
    <div className='w-screen  '>
      <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailer.key +"?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ></iframe>

    </div>
  )
}

export default VideoBackground