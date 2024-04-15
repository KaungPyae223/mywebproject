import React from 'react';
import ActorsCard from './ActorsCard';
import { useGetActorsQuery } from '../../Services/EndPoints/MovieEndPoints';

const Actors = ({id}) => {
    const {isSuccess,data} = useGetActorsQuery(id);
    
    return isSuccess && (
        <div className='my-12 mx-6 md:mx-9 lg:mx-14'>
            <p className='text-3xl font-medium mb-12'>Actors</p>
            <div className='flex flex-wrap justify-center gap-10'>
             {
                data.cast.map((el,i) => {
                    if(i<11)
                    return(
                    <ActorsCard data={el} key={i}/>
                    )
                })
             }

            </div>
        </div>
    );
};

export default Actors;