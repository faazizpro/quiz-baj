import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='md:text-7xl font-bold text-center md:border-b-2 pb-5'>Frequently Asked Question</h1>
            <div className='md:mt-10 md:mb-20 md:border-2 md:w-2/4 md:ml-20 md:p-5 border-green-400 md:rounded-md'>
                <h2 className='md:text-4xl md:font-semibold md:mb-5'>Q1: What is purpose of react router?
                </h2>
                <p className='md:text-xl md:font-medium'>
                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                </p>
            </div>
            <div className='md:mt-10 md:mb-20 md:border-2 md:w-2/4 md:ml-20 md:p-5 border-green-400 md:rounded-md'>
                <h2 className='md:text-4xl md:font-semibold md:mb-5'>Q2: How does context api works?
                </h2>
                <p className='md:text-xl md:font-medium'>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className='md:mt-10 md:mb-20 md:border-2 md:w-2/4 md:ml-20 md:p-5 border-green-400 md:rounded-md'>
                <h2 className='md:text-4xl md:font-semibold md:mb-5'>Q3: What does useRef mean?
                </h2>
                <p className='md:text-xl md:font-medium'>
                The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
                </p>
            </div>
        </div>
    );
};

export default Blog;