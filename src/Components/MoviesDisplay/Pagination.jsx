import React from "react";

const Pagination = ({ totalpages, setpage, currentpage }) => {
  const startpage = currentpage - 2 > 1 ? currentpage - 2 : 1;
  const endpage = currentpage + 2 < totalpages ? currentpage + 2 : totalpages;

  return (
    <div className="my-5">
      <nav class="flex items-center gap-x-1 justify-center">
        <button
        onClick={() => {currentpage>1? setpage(currentpage - 1):null}}
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <svg
            aria-hidden="true"
            class="hidden flex-shrink-0 size-3.5"
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
          <span>Previous</span>
        </button>
        <div class="flex items-center gap-x-1">
          {Array.from(
            { length: endpage - startpage + 1 },
            (_, index) => startpage + index
          ).map((pageNumber) => (
            <button
            onClick={()=>{setpage(pageNumber)}}
              key={pageNumber} // Remember to add a unique key prop
              type="button"
              className={`${pageNumber == currentpage? "bg-blue-500 text-white":""} min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800  py-2 px-3 text-sm rounded-lg focus:outline-non disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
        onClick={() => {currentpage<totalpages? setpage(currentpage + 1):null}}
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span>Next</span>
          <svg
            aria-hidden="true"
            class="hidden flex-shrink-0 size-3.5"
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

export default Pagination;
