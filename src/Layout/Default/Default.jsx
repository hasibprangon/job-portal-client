import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Common/Header/Header';
import { Toaster } from 'react-hot-toast';

const Default = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Default;