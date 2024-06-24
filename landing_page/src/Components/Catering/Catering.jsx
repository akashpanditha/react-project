import React from 'react';
import './Catering.css'

function Catering() {
  return (
    <>
    <h1>Who Do We Cater To ?</h1>
    <div className="logos">
        <div className="img-catering">
            <div className="img-cat">
            <img src="image/first.png" alt="" />

            </div>
        <h3>Retail</h3>
        </div>
       
        <div className="img-catering">
        <div className="img-cat">
        <img src="image/second.png" alt="" />

            </div>

        <h3>Manufacturing</h3>
        </div>
       
        <div className="img-catering">
        <div className="img-cat">
        <img src="image/third.png" alt="" />

            </div>


        <h3>Electronics</h3>
        </div>
        

        <div className="img-catering">


        <div className="img-cat">
        <img src="image/fourth.png" alt="" />

            </div>
        <h3>E-commerce</h3>
        </div>
        
        <div className="img-catering">
        <div className="img-cat">
        <img src="image/fifth.png" alt="" />

            </div>
        <h3>Food and Beverage</h3>
        </div>
        
    </div>
    </>
  );
}

export default Catering;
