import React from 'react';
import CategoryItem from './CategoryItem';
import { FaMale } from 'react-icons/fa';

const Category = ({ selectCategory }) => {

    const category = [
        { id: 1, name: "All", value: '' },
        { id: 2, name: "Jewelery", value: 'jewelery' },
        { id: 3, name: "Men's Clothing", value: "Men's Clothing" },
        { id: 4, name: "Women's Clothing", value: "Women's Clothing" },
        { id: 5, name: "Electronics", value: "Electronics" },
    ]

    return (
        <div className='container mx-auto text-center  mt-5 '>
            {
                category.map(cate => <CategoryItem
                    key={cate.id}
                    name={cate.name}
                    icon={cate.icon}
                    value={cate.value}
                    selectCategory={selectCategory}
                >
                </CategoryItem>)
            }
        </div>
    );
};

export default Category;