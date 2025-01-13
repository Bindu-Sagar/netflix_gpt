import React from 'react'
import useAddNowPlayingMovies from '../hooks/useAddNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const NowPlayingMovies = () => {
  useAddNowPlayingMovies();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default NowPlayingMovies