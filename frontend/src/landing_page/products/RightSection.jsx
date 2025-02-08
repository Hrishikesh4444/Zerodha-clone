import React from 'react';

function RightSection({productName,productDescription,imageUrl,tryDemo}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Learn more →</a>
                    </div>
                </div>
                <div className="col-6">
                <img src={imageUrl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;