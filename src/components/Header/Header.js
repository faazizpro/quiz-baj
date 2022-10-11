import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <nav className='flex items-center justify-between ml-20 mr-40'>
            <img src={logo} alt="" />
            <div className='list-none flex gap-14 text-3xl font-bold'>
                <li className='bg-lime-300 py-3 rounded-md px-5'><a href="/">Home</a></li>
                <li className='bg-lime-300 py-3 rounded-md px-5'><a href="/topics">Topics</a></li>
                <li className='bg-lime-300 py-3 rounded-md px-5'><a href="/statistics">Statistics</a></li>
                <li className='bg-lime-300 py-3 rounded-md border-4 border-sky-900 px-5'><a href="/blog">Blog</a></li>
            </div>
        </nav>
    );
};

export default Header;