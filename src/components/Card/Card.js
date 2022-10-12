import React, { useState } from 'react';
import Option from '../Option';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {eye} from 'react'

const Card = ({card}) => {
    // console.log(card);
    const {options, id, question, correctAnswer} = card;
    // card.options.map(option => console.log(option))

    const [show, setShow] = useState(false);
  
    return (
        <div className='mb-2 flex justify-center'>
            <div className="card w-2/4 mb-10 bg-orange-300  ">
                {/* Eye Icon */}
                <div className='eye-toggle mt-5 ml-10  cursor-pointer'>

                    {
                        show ? `${correctAnswer}` : null
                    }

                    <FontAwesomeIcon onClick={()=> setShow(!show)} icon={faEye} />
                    


                </div>


                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold mb-5">Quiz: {question}</h2>
                        <div className='grid grid-cols-2'>
                            {
                                options.map((option, index) => <Option
                                    key={index}
                                    option={option}
                                    correctAnswer={correctAnswer}
                                    
                                ></Option>)
                            }
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Card;