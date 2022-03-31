import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import SliderItem from './SliderItem';

const SliderHero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
    };

    const data = [
        { id: 1, img: 'https://img.freepik.com/free-vector/modern-sale-banner-website-slider-template-design_54925-45.jpg' },
        { id: 2, img: 'https://i.pinimg.com/736x/66/d6/d3/66d6d3818b2dce1ee0ade72a94d4da8f.jpg' },
        { id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOlrmMji3xBzonR4D1KaAEG55v5ku72L1GTi8orhK_QwOgbM76qEr7mTcFCBjzxtlNGg&usqp=CAU' },
        { id: 4, img: 'https://img.mensxp.com/media/content/2016/Dec/best-online-shopping-sites-for-men-980x457-1481709884_1400x653.jpg' },
    ]

    return (
        <Slider {...settings} className='container mt-3 w-full md:h-96 h-52 overflow-hidden mx-auto rounded-md md:p-0 p-3'>
            {
                data.map(item => <SliderItem
                    key={item.id}
                    img={item.img}
                >

                </SliderItem>)
            }
        </Slider>
    );
};

export default SliderHero;