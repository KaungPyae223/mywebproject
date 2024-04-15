import React from "react";

const ReviewsCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <li class="flex flex-row gap-x-2 sm:gap-x-4 md:me-11 sm:me-6">
        
          <img className='w-9 h-9 rounded-full object-cover object-center' src={data.author_details.avatar_path ?`https://image.tmdb.org/t/p/w200/${data.author_details.avatar_path}`:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}/>
        

        <div>
          <div class="bg-white border border-gray-200 rounded-2xl p-4 dark:bg-slate-900 dark:border-gray-700">
            <p class="font-medium text-lg text-gray-800 dark:text-white">
              {data.author}
            </p>

            <div class="space-y-1.5">
              <p class="my-3 text-sm text-gray-800 dark:text-white">
                {data.content}
              </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ReviewsCard;
