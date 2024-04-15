import React from "react";
import Search from "../Components/Search";
import Filter from "../Components/MoviesDisplay/Filter";
import Movies from "../Components/MoviesDisplay/Movies";
import Header from "../Components/Headers/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
      <Movies />
    </div>
  );
};

export default HomePage;
