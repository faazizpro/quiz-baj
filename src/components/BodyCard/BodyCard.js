import React from 'react';
import { Link } from 'react-router-dom';
import './BodyCard.css'

const BodyCard = ({card}) => {
    const {id, name, logo, total} = card;
    return (
        <div className='w-1/5 rounded-md card-border'>
            <div className='bg-slate-900'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between mt-3 items-center pb-2 p-1'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <h2 className='text-xl font-bold'>Total Quiz: {total}</h2>
                <button className='text-xl font-bold bg-orange-400 text-white px-4 py-2 rounded-xl'><Link to={`/card/${id}`}>Start Quiz</Link></button>
            </div>
            
        </div>
    );
};

export default BodyCard;