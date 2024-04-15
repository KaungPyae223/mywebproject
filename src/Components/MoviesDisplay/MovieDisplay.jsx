import React from "react";
import MovieCard from "./MovieCard";

const MovieDisplay = ({data}) => {
  console.log(data);
  return (
    <div className="m-12 grid grid-cols-4 grid-flow-dense gap-3">
      {data?.map((el, i) => {
          return <MovieCard key={i} data={el} index={i} />;
        })}

    </div>
    
  );
};

export default MovieDisplay;
