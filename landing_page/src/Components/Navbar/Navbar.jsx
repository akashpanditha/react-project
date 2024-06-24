import React from 'react';
// import "C:\Pinnacle\landing_page\src\Components\Navbar\Navbar.css"
import './Navbar.css'
// import logo from " C:\Pinnacle\landing_page\src\logo\ppi__logo 1.png"
function Navbar() {
  return (
    <>
    {/* <img src={logo} alt="My image" srcset="" /> */}
    <header className='header' >
    <img className='logo' src=" ../../public/image/logo.png " alt="My image"  />

    
        <nav className='navbar'>
            <a href="#">Home</a>
            <a href="#">Our Products</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            
        </nav>
        <div className='header-logo'>
          <div className="header-img">
            <img className='imggg' src="/image/header-nav.png" alt="" />
            <p className='p-tag'>Ask For Quote</p>
          </div>  
        </div>
    </header>
    <div className='welcome'>
        <img className='welcome_img' src="../../public/image/welcome_img.png" alt="Welcome image" srcset="" />
        <div className="text"><h2>WELCOME TO PINNACLE PACKING INDUSTRIES, LLC</h2>
        <p >Your trusted partner in sustainability and innovation, bringing you the best in packing.</p>
        </div>
    </div>
    </>
  );
}

export default Navbar;
