import React from 'react';
import './Card.css'

const Card = ({card}) => {
    // console.log(card);
    const {options, id, question, correctAnswer} = card;
    card.options.map(option => console.log(option))
    return (
        <div className='mb-2 flex justify-center'>
                        
                        

            <div className="card w-2/4 mb-10 bg-orange-300  ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold mb-5">Quiz: {question}</h2>
                        <div className='grid grid-cols-2'>
                            <div className='text-2xl font-medium bg-white mb-5 mr-10 py-3 px-2 rounded-md'>
                                <input type="radio" name='quiz1' /> {options[0]}
                            </div>
                            <div className='text-xl font-medium bg-white mb-5 mr-10 py-3 px-2 rounded-md'>
                                <input type="radio" name='quiz1' /> {options[1]}
                            </div>
                            <div className='text-xl font-medium bg-white mb-5 mr-10 py-3 px-2 rounded-md'>
                                <input type="radio" name='quiz1' /> {options[2]}
                            </div>
                            <div className='text-xl font-medium bg-white mb-5 mr-10 py-3 px-2 rounded-md'>
                                <input type="radio" name='quiz1' /> {options[3]}
                            </div>
                            
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Card;