import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { datacontext } from '../../App';

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    return (
        <div className='w-full py-3  bg-green-300 shadow-md sticky top-0 z-50'>
            <div className="container mx-auto">
                <div className='md:flex md:justify-between md:items-center '>
                    <div className='flex justify-between items-center '>
                        <Link to={'/'}>
                            <img className='rounded-md md:h-16 h-10 mx-4' src="https://www.codester.com/static/uploads/items/000/012/12895/preview/001.jpg" alt="" />
                        </Link>

                        <div className='px-4 md:hidden flex'>

                            <button onClick={() => setMenu(!menu)} className='text-3xl '>
                                {
                                    menu ? < BiMenu /> : <GrClose />
                                }
                            </button>

                        </div>

                    </div>

                    <div >
                        <ul className={`md:flex md:text-xl font-[Poppins] md:static absolute bg-green-300 w-full left-0 md:py-0 py-3 md:pl-0 pl-2  duration-300 ${menu ? "top-[-400px] md:top-[0]" : "top-[60px]"}`}>
                            <Link to={'/'}> <li onClick={() => setMenu(!menu)} className='mx-4 my-6 md:my-0 hover:text-gray-400 cursor-pointer'>Home</li></Link>
                            <Link to={'/image'}>   <li onClick={() => setMenu(!menu)} className='mx-4 my-6 md:my-0 hover:text-gray-400 cursor-pointer'>Image</li></Link>
                            <Link to={'/order'}> <li onClick={() => setMenu(!menu)} className='mx-4 my-6 md:my-0 hover:text-gray-400 cursor-pointer'>Order</li></Link>
                            <Link to={'/dinfo'}> <li onClick={() => setMenu(!menu)} className='mx-4 my-6 md:my-0 hover:text-gray-400 cursor-pointer'>D-Info</li></Link>
                            {/* <Link to={'/cart'}> <li onClick={() => setMenu(!menu)}
                                className='mx-4 my-6 md:my-0 hover:text-gray-400 text-red-500 cursor-pointer text-3xl hidden md:block'><AiOutlineShoppingCart />
                            </li></Link> */}

                            <li onClick={() => setMenu(!menu)} className='mx-4 mb-3 md:my-0 md:hidden inline-block'><Button> Login</Button></li>
                        </ul>
                    </div>


                    <div className='hidden md:block'>
                        <Button >Login</Button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Navbar;