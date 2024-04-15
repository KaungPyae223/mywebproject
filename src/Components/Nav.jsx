import React from "react";

const Nav = () => {
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap items-center w-full  text-sm py-4 px-0 sm:px-12 dark:bg-gray-800 h-20 -mt-20  transform translate-y-[100%]">
      <nav
        class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:gap-12"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <a class="flex-none text-3xl font-semibold dark:text-white text-sky-700" href="#">
            My Movie
          </a>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#navbar-alignment"
              aria-controls="navbar-alignment"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-alignment"
          class="hs-collapse  py-2 hidden overflow-hidden transition-all duration-300 basis-full grow sm:block "
        >
          
        </div>
        
      </nav>
    </header>
  );
};

export default Nav;
