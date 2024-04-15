import React from 'react';
import { CgProfile } from "react-icons/cg";


const ActorsCard = ({data}) => {

    return (
        <div className='flex flex-col justify-start items-center'>
            {
                data.profile_path? <img className='w-20 h-20 rounded-full object-cover object-center' src={`https://image.tmdb.org/t/p/w200/${data.profile_path}`}/> : <CgProfile className="inline-block w-20 h-20 rounded-full" />
            }
            <p className='text-lg font-medium font-heading'>{data.character}</p>
            <p className='text-sm'>{data.name}</p>
        </div>
    );
};

export default ActorsCard;