import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addTrailerDetails } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetTrailerDetails =  (movieId) =>{
  const id = movieId;
  const dispatch = useDispatch();
  const getMovieVideo = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,API_options);
    const json = await data.json();
    const trailersData = json.results.filter(video => video.type ==="Trailer");
    const trailer = trailersData.length ? trailersData[0] : json.results[0]; 
    dispatch(addTrailerDetails(trailer));
  }
  useEffect(()=>{
     getMovieVideo()
  },[])
}
export default useGetTrailerDetails;