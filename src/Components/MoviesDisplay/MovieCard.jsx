import React from 'react';
import { FaStar } from "react-icons/fa";

const MovieCard = ({ data, index }) => {
    // Calculate row and column start positions
    const fourthdiv =((index+1) % 4);
    const row = Math.ceil((index+1)/4)

    return (
        <div className={`${fourthdiv == 0? `RowStart${row} hover:col-start-3`:""}  cursor-pointer grid hover:grid-cols-2 group hover:col-span-2  bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}>
            <div className="flex flex-col group-hover:border-e">
                <div className="rounded-t-xl group-hover:rounded-t-none overflow-hidden h-[300px]">
                    <img
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        alt="Image Description"
                    />
                </div>
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                       {data.title}
                    </h3>
                </div>
            </div>
            <div className="p-5 group-hover:flex hidden flex-col justify-between gap-1.5">
                <p className="line-clamp-[11]">
                    {data.overview}
                </p>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-1.5">
                        <FaStar /> {data.vote_average} / 10
                    </div>
                    <p>{data.release_date}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
