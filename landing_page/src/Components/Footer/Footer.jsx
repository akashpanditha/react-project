import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="container-footer">
        {/* <img src="image/footerpng.png" alt="" /> */}
        <div className="head-office" id='footer1'>
        <h3>Head Office</h3>
        <p>Al Qouz Industrial Area 1, Near Al Safa Metro Station, Dubai - UAE</p>
        

        <div className="contact" >
            <h3>Contact us today    </h3>
            <p>+999999999</p>
            <p>reachus@accuracy.com</p>
        </div>

        </div>

        <div className="solution" id='footer2'>
            <h3>Sustainable Packaging Solution</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>What we do</p>
            <p>to the power of 10</p>
            <p>Donate</p>

        </div>
        <div className="footer-imgg" id='footer3'>

            <img className="footer-img" src="image/delivery.png" alt="" />
        </div>
       <div id="footer4">

    <p className='copyright ' >Copyright © 2024 PINNACLE, All Rights Reserved.</p>
       </div>
    </div>

    </>
  );
}

export default Footer;
