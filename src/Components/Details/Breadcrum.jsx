import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrum = ({Title}) => {
  const navigate = useNavigate();
  return (
    <div className="mx-6 md:mx-9 lg:mx-14">
      <ol className="flex items-center whitespace-nowrap">
        <li className="inline-flex items-center text-lg">
          <a
            className="flex items-center cursor-pointer text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
            onClick={() => {navigate("/")}}
          >
            Home
          </a>
          <svg
            className="flex-shrink-0 mx-2 overflow-visible size-6 text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </li>

        <li
          className="inline-flex items-center text-lg font-semibold text-gray-800 truncate dark:text-gray-200"
          aria-current="page"
        >
          {Title}
        </li>
      </ol>
    </div>
  );
};

export default Breadcrum;
