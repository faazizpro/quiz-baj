import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <ToastContainer />
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;