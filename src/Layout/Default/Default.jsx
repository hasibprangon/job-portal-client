import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Common/Header/Header';
import { Toaster } from 'react-hot-toast';
import Footer from '../../Pages/Common/Footer/Footer';

const Default = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default Default;