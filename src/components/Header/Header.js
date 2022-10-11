import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <nav className='flex items-center justify-between pl-20 pr-40 sticky top-0 z-50 bg-white'>
            <img src={logo} alt="" />
            <div className='list-none flex gap-14 text-3xl font-bold'>
                <li className='bg-lime-300 py-3 rounded-md px-5'><Link to="/">Topics</Link></li>
                <li className='bg-lime-300 py-3 rounded-md px-5'><Link to="/statistics">Statistics</Link></li>
                <li className='bg-lime-300 py-3 rounded-md border-4 border-sky-900 px-5'><Link to="/blog">Blog</Link></li>
            </div>
        </nav>
    );
};

export default Header;