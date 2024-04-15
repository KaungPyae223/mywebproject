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
