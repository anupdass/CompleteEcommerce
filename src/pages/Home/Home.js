import React from 'react';
import Products from '../../components/Products/Products';
import SliderHero from '../../components/SliderHero/SliderHero';

const Home = () => {
    return (
        <div>
            <SliderHero />
            <Products />
        </div>
    );
};

export default Home;