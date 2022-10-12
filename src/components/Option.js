import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Option = ({ option, correctAnswer }) => {
    const handleButton = () => {
        if (correctAnswer === option) {
            toast.success('Correct', {
                position: "top-right",
            });
        }
        else {
            toast.warn(`Incorrect, Correct is ${correctAnswer}`, {
                position: "top-right",
            });
        }
    }

    return (
        <div>
            <div onClick={() => handleButton()} id='check' className='text-xl font-medium bg-white mb-5 mr-10 py-3 px-2 rounded-md'>
                <input type="radio" name='quiz1' /> {option}

            </div>
        </div>
    );
};

export default Option;