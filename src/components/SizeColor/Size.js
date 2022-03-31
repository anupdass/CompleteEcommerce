import React from 'react';

const Size = ({ children, sizeSelected, item, className }) => {
    return (
        <div className={`w-10 h-10 text-center${className} mx-2 text-white rounded-full list-none flex items-center justify-center cursor-pointer`}
            onClick={() => sizeSelected(item)}
        >
            {children}
        </div >
    );
};

export default Size;