import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { datacontext } from '../../App';
import CartItem from './CartItem';

const Cart = () => {

    const { cart } = useContext(datacontext)
    const [carts, setCart] = cart
    const [openCart, setOpenCart] = useState(false)

    const prices = carts.map(item => item.quantity * item.price)
    const amount = prices.reduce((sum, value) => sum + value, 0)

    const charge = 30;
    const amountCeil = Math.ceil(amount)
    const totalCharge = charge * carts.length
    const totalAmount = totalCharge + amountCeil;

    const handleCart = () => {
        setOpenCart(!openCart)
    }

    // let filterData = cart.filter(item => item.id !== 4)
    const removeItem = (id, position) => {
        const newcart = [...carts]
        const remove = newcart.filter(item => item.id !== id)
        setCart([...remove])
        // console.log(remove)
    }

    return (
        <div >
            <div onClick={handleCart} className='text-xl fixed top-[45%] z-10 right-0 cursor-pointer rounded-l-md  bg-gray-200 shadow-md md:w-24 md:h-20 w-20 h-16 text-black-600'>
                <h4 className='text-center md:pb-1 text-black '>Items {carts.length}</h4>
                <hr className='border-b-0 border-red-500' />
                <h1 className='text-center md:text-4xl text-orange-600'>&#2547;<samp className='md:text-2xl '>{totalAmount}</samp></h1>
            </div>

            {/* cart details */}
            <div className={`fixed lg:w-[25%] md:w-[50%] w-[100%] h-screen bg-white shadow-md  right-0 top-16 md:top-24 duration-500 z-40 ${openCart ? 'right-0' : 'right-[-150%] md:right-[-30%] md:right[-50%]'} `}>

                <div className='container mx-auto'>
                    <div className='p-2 bg-gray-300 flex justify-between px-10 box-border '>
                        <h1>{carts.length} ITEM</h1>
                        <button onClick={handleCart} className='cursor-pointer border w-16 text-red-500 border-black'>close</button>
                    </div>
                    <div className='text-center p-2 bg-green-600  text-white flex justify-between px-5'>
                        <p >Delivery Charge every product</p>
                        <p className='font-bold'>&#2547; 30</p>
                    </div>
                </div>

                <div className='h-[50%] overflow-y-scroll'>
                    {
                        carts.map((item, position) => <CartItem
                            key={item.id}
                            image={item.image}
                            id={item.id}
                            price={item.price}
                            quantity={item.quantity}
                            title={item.title}
                            position={position}
                            removeItem={removeItem}
                        >X</CartItem>)
                    }
                </div>
                <Link to={'/placeorder'} onClick={handleCart}>
                    <div className='flex justify-between p-5 text-white'>

                        {
                            carts.length > 0 ?
                                <button className='w-[60%] bg-red-500 p-3 rounded-l-md'>PlaceOrder</button>
                                :
                                <button disabled className='w-[60%] bg-red-500 p-3 rounded-l-md'>Shop now</button>

                        }
                        <button disabled className='w-[40%] bg-red-400 p-3 rounded-r-md text-center'>&#2547; {totalAmount}</button>
                    </div>
                </Link>
                <div className='hidden md:block text-center text-sm'>
                    <h1>Any Question ? Call</h1>
                    <p>012457875888</p>
                </div>
            </div>


        </div >
    );
};

export default Cart;