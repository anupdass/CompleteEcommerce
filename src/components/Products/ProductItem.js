import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, img, oldPrice, newPrice }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className='rounded-md bg-gray-200  hover:border overflow-hidden  border-gray-600  cursor-pointer'>
                {
                    img ?
                        <img className='w-full md:h-52 h-40 object-center ' src={img} alt="" />
                        : <Skeleton />
                }
                <div className='p-4 '>
                    {
                        name.length <= 40 ?
                            <span>{name}</span> : <span>{`${name.slice(0, 40)}...`}</span>
                    }
                    <br />
                    <span className='text-4xl text-orange-500'>&#2547;<span>{`${newPrice}`}</span></span><br />
                    <span className='text-gray-500'><del>{oldPrice}</del></span>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;