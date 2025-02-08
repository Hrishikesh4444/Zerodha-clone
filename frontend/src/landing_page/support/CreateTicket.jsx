import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className='fs-4 text-muted'>To create a ticket, select a relevant topic</h1>
                <div className="col-4 p-5 mt-2 mb-2">
                    <h5>
                    <i class="fa fa-plus-circle fs-5" aria-hidden="true" ></i>&nbsp;
                    Account Opening
                    </h5>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>Getting started</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Online</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Offline</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Charges</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Company, Partnership and HUF</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Non Resident Indian (NRI)</a><br/>
                </div>


                <div className="col-4 p-5 mt-2 mb-2">
                    <h5>
                    <i class="fa-solid fa-user"></i>&nbsp;
                    Your Zerodha Account
                    </h5>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>Login credentials</a><br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>Your Profile</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Account modification and segment addition</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>CMR & DP ID</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Nomination</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Transfer and conversion of shares</a><br/>
                   
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h5>
                    <i class="fa-solid fa-chart-simple"></i>&nbsp;
                    Trading and Markets
                    </h5>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>Trading FAQs</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>kite</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Margins</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Product and order types</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Corporate actions</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Kite features</a><br/>
                </div>
            
                <div className="col-4 p-5  mt-2 mb-2">
                    <h5 style={{display: "flex"}}>
                    <span class="material-symbols-outlined" style={{}}>
credit_card
</span>&nbsp;
                    Funds
                    </h5>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>Funds Withdrawal</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Adding funds</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Adding bank accounts</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>eMandates</a><br/>
                </div>


                <div className="col-4 p-5 mt-2 mb-2">
                    <h5 >
                    <i class="fa-solid fa-c"></i>
                    &nbsp;
                    Console
                    </h5>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>IPO</a><br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>Portfolio</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Funds statement</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Profile</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Reports</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Referral program</a><br/>
                   
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h5>
                    <i class="fa-solid fa-coins"></i>&nbsp;
                    Coin
                    </h5>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.2"}}>Understanding mutual funds and Coin</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Coin app</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Coin web</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>Transactions and reports</a><br/>
                    <a href='' style={{textDecoration: "none" ,lineHeight: "2.2"}}>National Pension Scheme (NPS)</a><br/>
                </div>
            </div>
        </div>
     )
}

export default CreateTicket;