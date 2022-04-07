import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Category from '../Category/Category';
import ProductItem from './ProductItem';

const Products = () => {
    const [products, setProducts] = useState([])
    const [selected, setSelected] = useState('')
    const [loading, setLoading] = useState(true)
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    const selectCategory = (e) => {
        setSelected(e.toLowerCase())

    }

    const filter = products.filter(item => item.category.toLowerCase() === selected.toLowerCase())


    return (
        <div className='container mx-auto md:p-0 p-3'>
            <Category selectCategory={selectCategory} />
            {
                loading ?
                    <div className='grid md:grid-cols-5 grid-cols-2 gap-4 pb-7 static mt-4'>
                        {
                            skeleton.map(item => <Skeleton count={6} ></Skeleton>)
                        }
                    </div>
                    :
                    <div className='grid md:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:gap-5 mt-4 gap-3 '>
                        {
                            selected.length > 0 ?
                                filter.map(item => <ProductItem
                                    key={item.id}
                                    name={item.title}
                                    img={item.image}
                                    // oldPrice={item.price}
                                    id={item.id}
                                    newPrice={item.price}

                                ></ProductItem>)
                                :
                                products.map(item => <ProductItem
                                    key={item.id}
                                    name={item.title}
                                    img={item.image}
                                    // oldPrice={item.price}
                                    id={item.id}
                                    newPrice={item.price}

                                ></ProductItem>)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;