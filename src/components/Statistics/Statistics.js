import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatChart from '../StatChart/StatChart';

const Statistics = () => {
    const cards = useLoaderData();
    console.log(cards.data);
    return (
        <div>
            <h2>This is Statistics</h2>
            <div>

            </div>
            <div className='flex'>

                {
                    cards.data.map(card => <StatChart
                    key={card.id}
                    card={card}
                    ></StatChart>)
                }
            </div>
        </div>
    );
};

export default Statistics;