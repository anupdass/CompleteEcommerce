import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';
import { datacontext } from '../../App';
import Button from '../Button/Button';
import cart from '../Cart/Cart';
import Color from '../SizeColor/Color';
import Size from '../SizeColor/Size';

const ProductDetails = () => {

    const { cart } = useContext(datacontext)
    const [carts, setCart] = cart
    const [product, setProduct] = useState()
    const [quantity, setquntity] = useState(1)
    const [size, selectedSize] = useState('M')
    const [color, selectedcolor] = useState('ANY')

    const sizes = ['M', 'L', 'XL', 'XXL', 'FREE']
    const colors = ['RED', 'GREEN', 'BLUE', 'ANY']


    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(e => console.log(e))
    }, [])

    const handleIncrement = (e) => {
        setquntity(quantity + 1)
    }
    const handleDecrement = (e) => {
        if (quantity > 1) {
            setquntity(quantity - 1)
        }
    }

    const sizeSelected = e => {
        selectedSize(e)
    }
    const colorSelected = e => {
        selectedcolor(e)
    }

    const addToCart = () => {
        const id = carts.map(item => { return item.id })
        if (id.includes(product.id)) {
            cogoToast.warn('all ready in cart')
            return
        } else {
            const item = { ...product, quantity, size, color }
            const newCart = [...carts, item]
            setCart(newCart)
            cogoToast.success('add to cart')
        }
    }

    return (
        <div className='container mt-6 mx-auto'>
            <div className='flex md:flex-row flex-col items-center  p-8'>
                <div className='h-[500px] md:w-[500px]'>
                    {
                        product ?
                            <img className='w-full h-full' src={product?.image} alt="" /> :
                            <Skeleton className='h-full' />
                    }
                </div >
                <div className='md:ml-16 md:mx-w-[300px] lg:max-w-[700px] font-[poppins]'>
                    {
                        product ?
                            <div>
                                <h1 className='text-bold text-3xl my-3'>{product?.title}</h1>
                                <h1 className='text-bold text-4xl my-3 text-orange-500 '>&#2547; {product?.price}</h1>
                                <p className=' my-3'>{product?.description}</p>
                            </div>
                            :
                            <div className='ml-16 h-full w-full'>
                                <Skeleton count={5}></Skeleton>
                            </div>
                    }

                    {/* size in here */}
                    <div className='flex  items-center'>
                        {product && <h1 className='uppercase  mr-5'>size:</h1>}
                        {
                            product &&
                            sizes.map(item =>
                                <Size
                                    className={` ${size === item ? 'bg-orange-400 ' : 'bg-slate-500'}`}
                                    sizeSelected={sizeSelected}
                                    item={item}
                                >{item}</Size>)

                        }
                    </div>
                    <div className='flex  items-center'>
                        {product && <h1 className='uppercase  mr-5'>Color:</h1>}
                        {
                            product &&
                            colors.map(item =>
                                <Color
                                    className={` ${color === item ? 'border-black border-2 bg-slate-500' : 'bg-slate-500'}`}
                                    colorSelected={colorSelected}
                                    item={item}
                                >{item}</Color>)

                        }
                    </div>
                    {/* Quantity */}
                    <div>
                        {
                            product &&
                            <div>

                                <div className='flex mt-6 items-center'>
                                    <h1 className='mr-5'>Quantity: </h1>
                                    <button onClick={handleDecrement} className='rounded-md w-10 h-10 bg-gray-300 mr-5 text-4xl hover:bg-slate-200'>-</button>
                                    <input value={quantity} type="text" className=' w-14 mx-5 outline-none text-xl' />
                                    <button onClick={handleIncrement} className='rounded-md w-10 h-10 bg-gray-300 mr-5 text-4xl hover:bg-slate-200'>+</button>
                                </div>
                                <div className='flex gap-x-8 mt-6 w-full'>
                                    <div onClick={addToCart}><Button >Add to Cart</Button></div>
                                    <Link to={'/placeorder'} onClick={addToCart}><Button>Buy Now</Button></Link>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ProductDetails;