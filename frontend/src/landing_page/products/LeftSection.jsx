import React from 'react';

function LeftSection({googlePlay,appStore,tryDemo,productName,productDescription,imageUrl,learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <img src={imageUrl}></img>
                </div>
                <div className="col p-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo →</a>
                        <a href={learnMore} style={{marginLeft: "60px", textDecoration: "none"}} >Learn More →</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' style={{marginLeft: "30px"}} /></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;