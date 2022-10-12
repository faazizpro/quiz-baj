import React from 'react';
import './Hero.css'
import header from '../../images/header.png'
import { useLoaderData } from 'react-router-dom';
import BodyCard from '../BodyCard/BodyCard';

const Hero = () => {
    const cardData = useLoaderData();
    // console.log(cardData.data);

    
    return (
        <div className='mt-10'>
            <div className='md:flex md:items-center md:justify-center '>
                <div>
                    <h1 className='md:text-7xl md:font-extrabold text-color '>
                    Play Online <br /> Quiz and Check <br /> Your Brain!
                    </h1>
                </div>
                <div>
                    <img src={header} alt="" />
                </div>
            </div>
            {/* Card Data Load */}
            <div className='mt-10 mb-20'>
                <h2 className='md:text-center md:text-7xl md:font-extrabold md:mt-14 md:mb-14 text-color'>Explore Our Quiz Categories</h2>
            <div className='md:flex md:justify-center md:gap-10 '>
            {
                cardData.data.map(card => <BodyCard
                    key={card.id}
                    card={card}
                ></BodyCard>)
            }
            </div>
            </div>
        </div>
    );
};

export default Hero;