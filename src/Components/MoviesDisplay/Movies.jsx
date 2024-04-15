import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetNowPlayingQuery } from "../../Services/EndPoints/MovieEndPoints";
import MovieDisplay from "./MovieDisplay";
import Pagination from "./Pagination";

const Movies = () => {
  const selected = useSelector((state) => state.home.HomeMovie);
  let movieData;

  const [currentpage,setpage] = useState(1);

  useEffect(()=>{
    setpage(1)
  },[selected])

  if (selected == 1) {
    movieData = useGetNowPlayingQuery({path:"movie/now_playing",page:currentpage});
  } else if (selected == 2) {
    movieData = useGetNowPlayingQuery({path:"movie/top_rated",page:currentpage});
  } else {
    movieData = useGetNowPlayingQuery({path:"movie/popular",page:currentpage});
  }
  
  return (
    <div>
      {
      movieData.isSuccess && <MovieDisplay data={movieData.data?.results}></MovieDisplay>
      }

      <Pagination setpage={setpage} currentpage={currentpage} totalpages={movieData.data?.total_pages}/>
    </div>
  );
};

export default Movies;
