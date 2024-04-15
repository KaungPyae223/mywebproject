import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeMovie } from "../../Services/Slices/HomeSlice";


const Filter = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ChangeMovie('1'));
  }, []);

  const selectedOnChange = (event) => {
    dispatch(ChangeMovie(event.target.value));
  
  };
  return (
    <div className="px-12 flex flex-row justify-start gap-5 items-center">
      <p>Filter</p>
      <select
      onChange={selectedOnChange}
      className="py-3 px-4 pe-9 border border-gray-700 w-fit block focus:outline-none hover:outline-none bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
        <option selected value={1}>Latest</option>
        <option value={2}>Top Rated</option>
        <option value={3}>Popular</option>
        
      </select>
    </div>
  );
};

export default Filter;
