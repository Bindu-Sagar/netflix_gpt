import React from 'react'
import BrowseHeader from './BrowseHeader';
import NowPlayingMovies from './NowPlayingMovies';


const Browse = () => {
   return (
    <div className="">
      <BrowseHeader/>
      <NowPlayingMovies />
    </div>
  )
}

export default Browse;