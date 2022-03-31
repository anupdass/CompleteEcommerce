import React from 'react';
import CategoryItem from './CategoryItem';
import { FaMale } from 'react-icons/fa';

const Category = ({ selectCategory }) => {

    const category = [
        { id: 1, name: "Mens" },
        { id: 2, name: "Womens" },
        { id: 3, name: "Electrical" },
        { id: 4, name: "Bag" },
        { id: 5, name: "Others" },
    ]

    return (
        <div className='container mx-auto text-center  mt-5 '>
            {
                category.map(cate => <CategoryItem
                    key={cate.id}
                    name={cate.name}
                    icon={cate.icon}
                    selectCategory={selectCategory}
                >

                </CategoryItem>)
            }
        </div>
    );
};

export default Category;