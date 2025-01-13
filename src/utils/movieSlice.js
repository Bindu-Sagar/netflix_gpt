import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState:{
    nowPlayingMovies :null,
    videoTrailer: null,
  },
  reducers:{
    addNowPlayingMovies: (state,action) =>{
      state.nowPlayingMovies = action.payload;
    },
    addTrailerDetails: (state,action) => {
      state.videoTrailer = action.payload;
    }
  }
})
export const moviesReducer = movieSlice.reducer;
export const {addNowPlayingMovies , addTrailerDetails} = movieSlice.actions;