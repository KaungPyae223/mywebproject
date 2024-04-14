import React from "react";
import { FaStar } from "react-icons/fa";

const HeaderComponent = ({data}) => {
  const backdropUrl = data ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}` : '';
  console.log(data);
  return (

    <div 
    className={`flex p-12 justify-start items-center top-0 left-0 h-[100vh] bg-cover bg-center`}
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className=" py-10 px-12 rounded-xl bg-opacity-25 backdrop-blur-lg bg-black shadow-lg">
        <p className="text-4xl font-bold text-white font-heading">
         {data?.original_title}
        </p>
        <div className="mt-2 flex flex-row justify-start items-center gap-1.5">
          <FaStar className="text-white" />
          <p className="text-white/65">
            {" "}
            <span className="text-white">{data?.vote_average}</span> / 10 ({data?.vote_count} votes) . Release
            Date: <span className="text-white">{data?.release_date}</span>{" "}
          </p>
        </div>
        <p className="mt-5 text-white max-w-[450px] line-clamp-4">
        {data?.overview}
        </p>
        <button
          type="button"
          class="mt-5 py-2 px-4 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-700 text-white hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none bg-opacity-25 backdrop-blur-lg"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
