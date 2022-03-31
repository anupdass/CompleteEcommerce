import React from 'react';

const Button = ({ children }) => {
    return (
        <div className='bg-black hover:bg-green-500 cursor-pointer font-[Poppins] text-white px-6 py-2 rounded-md'>
            {children}
        </div>
    );
};

export default Button;