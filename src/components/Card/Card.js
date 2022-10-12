import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Card = () => {
    const card = useLoaderData();
    console.log(card);
    return (
        <div>
            <h1 className='text-3xl'>Are You Ready For The Quiz</h1>
        </div>
    );
};

export default Card;