import React from 'react';

const Images = () => {
    const images = [
        { id: 1, image: 'https://img.graphicsurf.com/2019/12/online-shopping-vector-illustration1.jpg' },
        { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbPjdVCfpr2BCZDZj4muxhylmbtv9elZkKJzNppGZapk_pwa2j7BlNT2CyuBjGS9xYic&usqp=CAU' },
        { id: 3, image: 'https://media.istockphoto.com/vectors/online-shopping-concept-vector-id1202073158?b=1&k=20&m=1202073158&s=612x612&w=0&h=PxQV5lReVuELnq0truKPGj15h9GF0Yo_uejg9301-ZM=' },
        { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGXI9jmSwCGDUSzpzBKQUBEEwP1991IVpI1RIJUUDuZ4UcbPNFFDJC5GFJ95g6_b16ZY&usqp=CAU' },
        { id: 5, image: 'https://img.graphicsurf.com/2019/12/online-shopping-vector-illustration1.jpg' },
        { id: 6, image: 'https://img.graphicsurf.com/2019/12/online-shopping-vector-illustration1.jpg' },
        { id: 7, image: 'https://img.graphicsurf.com/2019/12/online-shopping-vector-illustration1.jpg' },
        { id: 8, image: 'https://img.graphicsurf.com/2019/12/online-shopping-vector-illustration1.jpg' },
    ]
    return (
        <div className='list-none grid md:grid-cols-5 grid-cols-3 gap-3 mt-4 md:p-0 p-3'>
            {
                images.map(image => <li>
                    <img className='w-full h-full cursor-pointer hover:scale-125 duration-500' src={image.image} alt="" />
                </li>)
            }
        </div>
    );
};

export default Images;