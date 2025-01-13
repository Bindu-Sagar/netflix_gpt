import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useAddNowPlayingMovies = async()=>{
  const dispatch = useDispatch();
  const getNowPlayingMovies = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing",API_options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json));
  }
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
export default useAddNowPlayingMovies;