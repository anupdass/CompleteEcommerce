import React, { useContext } from 'react';
import { datacontext } from '../../App';
import CartItem from '../../components/Cart/CartItem';

const AboutUs = () => {

    const { order } = useContext(datacontext)
    const [orders, setOrders] = order;
    console.log(orders)

    const removeItem = (id, position) => {
        const newcart = [...orders]
        const remove = newcart.filter(item => item.id !== id)
        setOrders([...remove])
        console.log(id)
    }

    return (
        <div className='container mx-auto mt-4'>
            <div className=' overflow-y-scroll'>
                {
                    orders.map((item, position) => <CartItem
                        key={item.id}
                        image={item.image}
                        id={item.id}
                        price={item.price}
                        quantity={item.quantity}
                        title={item.title}
                        position={position}
                        removeItem={removeItem}
                    >Cancel</CartItem>)

                }
            </div>
        </div>
    );
};

export default AboutUs;