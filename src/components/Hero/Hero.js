import React from 'react';
import './Hero.css'
import header from '../../images/header.png'

const Hero = () => {
    return (
        <div className='flex items-center justify-center mt-10'>
            <div>
                <h1 className='text-7xl font-extrabold text-color '>
                Play Online <br /> Quiz and Check <br /> Your Brain!
                </h1>
            </div>
            <div>
                <img src={header} alt="" />
            </div>
        </div>
    );
};

export default Hero;