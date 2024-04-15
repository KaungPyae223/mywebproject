import React from "react";
import ReviewsCard from "./ReviewsCard";
import { useGetReviewsQuery } from "../../Services/EndPoints/MovieEndPoints";

const Reviews = ({id}) => {
  const {isSuccess,data} = useGetReviewsQuery(id);

  return isSuccess && (
    <div className="mt-16 mb-12 mx-6 md:mx-9 lg:mx-14">
      <p className="text-3xl font-medium mb-12">Reviews</p>
      <div className="flex flex-col gap-5">
      {
        data.results.map((el,i) => {
          return(
            <ReviewsCard data={el} key={i}/>
          )
        })
      }
      </div>
      

    </div>
  );
};

export default Reviews;
