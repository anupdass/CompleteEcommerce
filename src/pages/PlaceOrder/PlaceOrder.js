import cogoToast from 'cogo-toast';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, } from 'react-router-dom';
import { datacontext } from '../../App';

const PlaceOrder = () => {

    const { cart, order } = useContext(datacontext)
    const [carts, setCart] = cart
    const [orders, setOrders] = order
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const history = useNavigate()

    const onSubmit = data => {
        setCart([])
        const newCart = [...orders, ...carts]
        setOrders(newCart)
        cogoToast.success('Successfully Complete Order ')
        reset()
        history('/order')
    };


    return (
        <div className='container mx-auto overflow-hidden  mt-4'>
            <div className='grid md:grid-cols-2 md:grid items-center '>
                <div className='p-4 w-full h-full'>
                    <img src='https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=2000' alt="" />
                </div>
                <div className='md:min-w-[500px] p-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-3' >
                            <label>Total Price: </label>
                        </div>
                        <div className='my-3' >
                            <label>Name*</label>
                            <input className='border-2 border-gray-200 rounded-md p-2 w-full' {...register("name", { required: true })} placeholder='your name' />
                            {errors.exampleRequired && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='my-3' >
                            <label>Email*</label>
                            <input className='border-2 border-gray-200 rounded-md p-2 w-full' {...register("email", { required: true })} placeholder="example@gamil.com" />
                            {errors.exampleRequired && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='my-3' >
                            <label>Mobile***</label>
                            <input className='border-2 border-gray-200 rounded-md p-2 w-full' {...register("mobile", { required: true })} placeholder='01700000000' />
                            {errors.exampleRequired && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='my-3' >
                            <label>Address</label>
                            <textarea className='border-2 border-gray-200 rounded-md p-2 w-full' {...register("address", { required: true })} placeholder="vill:village,Uni:your Union uz: upZilla" />
                            {errors.exampleRequired && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <input className='bg-green-400 p-3 text-xl rounded-md w-full hover:bg-green-500 cursor-pointer' type="submit" />
                    </form>
                </div>

            </div>

        </div >
    );
};

export default PlaceOrder;