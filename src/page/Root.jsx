import React from 'react';
import Header from './shared/header/Header';
import { Outlet } from 'react-router';
import Footer from './shared/fotter/Footer';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Root;