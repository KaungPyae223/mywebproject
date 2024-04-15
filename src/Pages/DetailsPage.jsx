import React from "react";
import DetailsIntro from "../Components/Details/DetailsIntro";
import Breadcrum from "../Components/Details/Breadcrum";
import Actors from "../Components/Details/Actors";
import Reviews from "../Components/Details/Reviews";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const {id} = useParams();
    
  return (
    <div className="mt-24">
      <Breadcrum Title={"Details"}/>
      <DetailsIntro id={id}/>
      <Actors id={id}/>
      <Reviews id={id}/>
    </div>
  );
};

export default DetailsPage;
