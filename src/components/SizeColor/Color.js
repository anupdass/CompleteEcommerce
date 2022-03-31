import React from 'react';

const Color = ({ children, colorSelected, item, className }) => {
    return (
        <div className={`w-10 h-10 text-center${className} mx-2 text-white rounded-full list-none flex items-center justify-center cursor-pointer`}
            onClick={() => colorSelected(item)}
        >
            {children}
        </div >
    );
};

export default Color;