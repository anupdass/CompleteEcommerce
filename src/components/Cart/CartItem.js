import React from 'react';

const CartItem = ({ id, position, price, image, title, quantity, removeItem, children }) => {
    console.log(title)
    return (
        <div className='border-b '>
            <div className='flex justify-between items-center p-5'>
                <div>
                    <img className='w-10' src={image} alt="" />
                </div>
                <div className='max-w-[50%] text-sm'>
                    <p>{title}</p>
                    <span className='mr-5 font-bold'>quantity: {quantity}</span>
                    <span className='text-orange-400'>&#2547;{price}</span>
                </div>
                <div >
                    <h1 onClick={() => removeItem(id, position)} className='cursor-pointer hover:text-red-600'>{children}</h1>
                </div>
            </div>

        </div>
    );
};

export default CartItem;