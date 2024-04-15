import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetNowPlayingQuery } from "../../Services/EndPoints/MovieEndPoints";
import MovieDisplay from "./MovieDisplay";

const Movies = () => {
  const selected = useSelector((state) => state.home.HomeMovie);
  let movieData;
  const [currentpage,setpage] = useState(1);

  const startPage = currentpage-3 > 1 ? currentpage-3 : 1;

  if (selected == 1) {
    movieData = useGetNowPlayingQuery({path:"movie/now_playing",page:currentpage});
  } else if (selected == 2) {
    movieData = useGetNowPlayingQuery({path:"movie/top_rated",page:currentpage});
  } else {
    movieData = useGetNowPlayingQuery({path:"movie/popular",page:currentpage});
  }

  const EndPage = movieData.total_pages? currentpage + 3 < movieData.total_pages ? currentpage + 3 : movieData?.total_pages : 0

  const buttons = [];
  console.log(EndPage);
  for (let i = startPage; i <= EndPage; i++) {
      buttons.push(
          <button
              key={i} // Remember to add a unique key prop
              type="button"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
              {i}
          </button>
      );
  }

  console.log(movieData.data);
  return (
    <div>
      <MovieDisplay data={movieData.data?.results}></MovieDisplay>

      <nav class="flex items-center gap-x-1 justify-center my-5">
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <svg
            class="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span aria-hidden="true" class="sr-only">
            Previous
          </span>
        </button>
        <div class="flex items-center gap-x-1">
            {
               buttons 
            }
        
        </div>
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span aria-hidden="true" class="sr-only">
            Next
          </span>
          <svg
            class="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Movies;
