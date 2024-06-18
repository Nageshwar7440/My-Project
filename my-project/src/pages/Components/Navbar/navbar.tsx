import React, { useState } from 'react';






const Navbar = () => {

    // const [isSidebar, setIsSidebar] = useState(false);
    return (
        <>

            <nav className='navbar'>
                <div className='logo-title'>
                    <img className='img-logo' src="/homelogo.png" alt="logo"></img>
                    <h1>DreamHome</h1>
                </div>
                <ul className='nav-links'>
                    {/* <ul className={`nav-links ${isSidebar ? 'active' : ''}`}> */}

                    <li><a href='/'>Home</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/Property'>Property</a></li>
                    <li><a href='/Contact'>Contact</a></li>


                </ul>

                <div className="Menu-button">
                    <button><i className="bi bi-person" style={{ fontSize: "35px" }}></i> </button>

                    <button> <i className="bi bi-cart-check" style={{ fontSize: "35px" }} ></i></button>

                    <button>  <a href="tel:+7440969796" className="contact-link">
                        <i className="bi bi-telephone" style={{ fontSize: "35px" }}></i> </a></button>

                </div>
                {/* <button className="sidebar-toggle" onClick={() => setIsSidebar(!isSidebar)}>
                    {isSidebar ? (
                        <i className="bi bi-x" style={{ fontSize: "35px" }}></i>
                    ) : (
                        <i className="bi bi-list" style={{ fontSize: "35px" }}></i>
                    )}
                </button> */}

            </nav>




            {/* 
            {isSidebar && <div className='sidebar'>
                <ul>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Services'>Services</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                </ul>
            </div>} */}







        </>
    );
}

export default Navbar;

