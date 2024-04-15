import React from "react";
import { FaStar } from "react-icons/fa";
import { useGetDetailsQuery } from "../../Services/EndPoints/MovieEndPoints";

const DetailsIntro = ({ id }) => {
  const { data, isSuccess } = useGetDetailsQuery(id);
  return (
    isSuccess && (
      <div className="grid md:grid-cols-3 gap-5 mx-6 md:mx-9 lg:mx-14">
        <div className="md:p-12 py-5">
          <img
            
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          ></img>
        </div>
        <div className="md:col-span-2 md:p-12">
          <p className="font-heading text-4xl font-bold">
            {data.original_title}
          </p>
          <div className="flex flex-row items-center gap-1.5 mt-2 font-semibold">
            <FaStar /> {data.vote_average} / 10 ({data.vote_count} votes)
          </div>
          <table className="mt-1.5">
            <tr>
              <td className="pe-3">
                <span className="font-semibold">Language:</span>
              </td>
              <td>{data.original_language}</td>
            </tr>
            <tr>
              <td className="pe-3">
                <span className="font-semibold">Release Date:</span>
              </td>
              <td>{data.release_date}</td>
            </tr>
            <tr>
              <td className="pe-3">
                <span className="font-semibold">Production:</span>
              </td>
              <td>{data.production_companies[0].name}</td>
            </tr>
          </table>

          <div className="flex flex-wrap justify-start gap-1.5 my-3">
            {data.genres.map((el,i) => {
              return (
                <span key={i} className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white">
                  {el.name}
                </span>
              );
            })}
          </div>
          <blockquote class="relative my-5">
            <div class="relative z-10">
              <p class="text-gray-800 sm:text-xl dark:text-white">
                <em>
                  <blockquote class="relative">
                    <div class="relative z-10">
                      <p class="text-gray-800 sm:text-xl dark:text-white">
                        <em>{data.tagline}</em>
                      </p>
                    </div>
                  </blockquote>
                </em>
              </p>
            </div>
          </blockquote>
          <p>{data.overview}</p>
        </div>
      </div>
    )
  );
};

export default DetailsIntro;
