import React from 'react';
import InfoCard from './InfoCard';

const InfoHeading = ({ heading, info }) => {
    return (
        <div>
            <h1 className='text-2xl my-5 font-bold'>{heading}</h1>
            <div className='flex gap-5 flex-wrap'>
                {
                    info.map(info => <InfoCard
                        key={info.id}
                        name={info.name}
                        number={info.number}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoHeading;