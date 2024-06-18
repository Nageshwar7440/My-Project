import React from 'react';
import Footer from "../Footer/footer"; 
import Navbar from "../Navbar/navbar";

const Layout = ({ children }:any) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
