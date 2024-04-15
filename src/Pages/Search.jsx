import React, { useEffect, useState } from "react";
import Breadcrum from "../Components/Details/Breadcrum";
import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../Services/EndPoints/MovieEndPoints";
import MovieDisplay from "../Components/MoviesDisplay/MovieDisplay";
import Pagination from "../Components/MoviesDisplay/Pagination";

const Search = () => {
  const { search } = useParams();

  const [currentpage, setpage] = useState(1);
  
  let fetchData = useGetSearchQuery({
    query: search,
    page: currentpage,
  });

  

  console.log(fetchData);

  return (
    <div className=" mt-24">
      <Breadcrum Title={"Search"} />
      <p className="mt-8 mx-6 md:mx-9 lg:mx-14 text-xl font-semibold">
        Search Result of: <span className="font-bold">{search}</span>
      </p>
      {fetchData.isSuccess && (
        <div>
          <MovieDisplay data={fetchData.data.results} />
          <Pagination
            totalpages={fetchData.data.total_pages}
            setpage={setpage}
            currentpage={currentpage}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
