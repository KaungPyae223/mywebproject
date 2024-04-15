import React from "react";
import MovieCard from "./MovieCard";

const MovieDisplay = ({data}) => {
  return (
    <div className="mx-3 md:mx-6 lg:mx-12 my-6 grid grid-cols-2 grid-flow-dense md:grid-cols-3 lg:grid-cols-4">
      {data?.map((el, i) => {
          return <MovieCard key={i} data={el} index={i} />;
        })}

    </div>
    
  );
};

export default MovieDisplay;
