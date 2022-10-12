import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Cards = () => {
    const cards = useLoaderData();
    // console.log(cards.data.questions);
    return (
        <div className=''>
            <h1 className='text-6xl font-bold mb-9 text-center '>Are You Ready For The Quiz?</h1>
            {/* Quiz Info */}
            <div className='flex justify-center mb-10'>
                <div className='bg-slate-900 p-3 flex justify-evenly items-center'>
                    <img src={cards.data.logo} className='w-4/12  rounded-lg' alt="" />
                    <div className='text-white '> 
                        <h2 className='text-3xl font-medium'>Quiz Name: {cards.data.name}</h2>
                        <h2 className='text-3xl font-medium mt-5'>Total Quiz: {cards.data.total}</h2>
                    </div>
                </div>
            </div>

            <div className=' '>
            {
                cards.data.questions.map(card => <Card
                    key={card.id}
                    card={card}
                    
                ></Card>)
            }
            </div>
            
        </div>
    );
};

export default Cards;