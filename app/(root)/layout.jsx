import React from 'react'
import RootLayout from './../layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Navbar_top from './../../components/navbar_top';

export default function Layout({children}){
    return(
        <>
            <Navbar_top/>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}