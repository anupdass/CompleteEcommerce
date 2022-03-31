import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { datacontext } from '../../App';
import Button from '../../components/Button/Button';
import CartItem from './CartItem';

const CartPage = () => {
    const [cart] = useContext(datacontext)

    const prices = cart.map(item => item.quantity * item.price)
    const amount = prices.reduce((sum, value) => sum + value, 0)

    const charge = 30;
    const amountCeil = Math.ceil(amount)
    const totalCharge = charge * cart.length
    const totalAmount = totalCharge + amountCeil;



    return (
        <div>
            <div className="container mx-auto md:p-0 p-3 flex mt-8">
                {
                    cart.length === 0 &&
                    <h1 className='flex items-center justify-center w-full text-center'>No Item In Cart <br />
                        Select product  add to cart or Buy now</h1>
                }
                {
                    cart.length > 0 &&
                    <div className='md:min-w-[600px] h-96 overflow-scroll p-5'>
                        {
                            cart.map(item => <CartItem
                                key={item.id}
                                name={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                image={item.image}
                            >
                            </CartItem>)
                        }
                    </div>
                }
                {
                    cart.length > 0 &&
                    <div className=''>
                        <h3>Total Amount : {amountCeil}</h3>
                        <h3>Delivery Charge {`${charge} * ${cart.length}`} : {totalCharge}</h3>
                        <hr className='my-5' />
                        <h3>Total Amount : {totalAmount}</h3>
                        <Link to={'/placeorder'}><div className='inline-block mt-5'><Button>Place Order</Button></div></Link>
                    </div>
                }
            </div>
        </div >
    );
};

export default CartPage;