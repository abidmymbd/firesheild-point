import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='bg-gray-100'>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;