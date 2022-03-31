import React from 'react';

const InfoCard = ({ name, number }) => {
    return (
        <div className='p-4 cursor-pointer bg-white shadow-md flex-grow text-center text-xl rounded-2xl hover:shadow-2xl'>
            <a href={`tel:${number}`}>
                <h1 className='text-2xl font-bold my-2 uppercase text-red-600'>{name}</h1>
                <p>{number}</p>
            </a>
        </div>
    );
};

export default InfoCard;