import React from 'react';

const CategoryItem = ({ selectCategory, name }) => {
    return (
        <div onClick={() => selectCategory(name)} className='text-center inline-block md:m-4 m-2 font-bold cursor-pointer  md:p-4 p-2 bg-green-400 rounded-full'>
            <span >{name}</span>
        </div>
    );
};

export default CategoryItem;