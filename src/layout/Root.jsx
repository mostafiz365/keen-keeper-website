import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>


           <ToastContainer />
        </>
    );
};

export default Root;