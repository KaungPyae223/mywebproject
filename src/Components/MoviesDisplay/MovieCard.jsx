import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data, index }) => {
  
    const parentdiv = useRef();

    const navigate = useNavigate();



    const CalculateLeftRight = (event) => {
        if(window.innerWidth/2 < event.nativeEvent.clientX){
            parentdiv.current.classList.add("sm:hover:-translate-x-[50%]")
            parentdiv.current.childNodes[0].classList.add("sm:flex-row-reverse")
        }
    }
    

  return (
    <div className="relative">
      <div ref={parentdiv} onMouseEnter={CalculateLeftRight} onClick={()=> {navigate(`/details/${data.id}`)}} className="top-0 left-0 transform  p-1.5 group sm:hover:absolute sm:hover:w-[200%]  size-full sm:hover:z-50">
        <div  className="size-full cursor-pointer flex  group  bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col sm:group-hover:basis-1/2 sm:group-hover:border-e">
            <div className="rounded-t-xl group-hover:rounded-t-none overflow-hidden sm:h-[300px]">
              <img
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
                {data.title}
              </h3>
            </div>
          </div>
          <div className="p-5 sm:group-hover:flex group-hover:basis-1/2 hidden flex-col justify-between gap-1.5">
            <p className="line-clamp-[11]">{data.overview}</p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-1.5">
                <FaStar /> {data.vote_average} / 10
              </div>
              <p>{data.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
