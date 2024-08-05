import React from 'react';
import Footer from "../Footer/footer"; 
import Navbar from "../Navbar/navbar";

// Type for the Layout component's props
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            
        </>
    );
}

export default Layout;
