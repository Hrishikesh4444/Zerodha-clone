import React from 'react';
import { Link } from "react-router-dom";
function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                {/* <img src="media/images/homeHero.png" className='mb-5'/> */}
                <h1 className='mb-4 fs-2'>Open a Zerodha account</h1>
                <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="p-2 btn btn-primary fs-5 mb-5 text-center custom-button" style={{width: "18%",margin: "0 auto"}}><Link className="nav-link" to="/signup">
                    Sign up for free
                  </Link></button>
            </div>
        </div>
     );
}

export default OpenAccount;