import React from 'react';

const SliderItem = ({ img }) => {
    return (
        <div className='w-full h-full'>
            <img className='w-full md:h-96 h-56 object-center' src={img} alt="" />
        </div>
        // <div className='w-full md:h-96 h-full '>
        //     <img src={img} className='object-cover w-full h-full rounded-md' alt="" />
        // </div >
    );
};

export default SliderItem;