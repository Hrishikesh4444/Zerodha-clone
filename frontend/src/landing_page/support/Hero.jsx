import React, { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext"

function Hero() {
  const { isOpen } = useContext(GlobalStateContext);
  return (
    <section className="container-fluid p-5" id="supportHero">
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="py-5" id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="" style={{textUnderlineOffset: "5px"}}>Track Tickets</a>
          </div>
          <div className="row px-5 pb-5">
            <div className="col-7">
              <h1 className="fs-4 mb-4">
                Search for an answer or browse help topics to create a <br />
                ticket
              </h1>
              <input className="mb-3 search-input" placeholder="   Eg. how do I activate F&O, why is my order getting rejected ...                                " />
              <br />
              <a href="" style={{textUnderlineOffset: "8px"}}>Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="" style={{textUnderlineOffset: "8px"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="" style={{textUnderlineOffset: "8px"}}>Intraday margins</a><br/><br/>
              <a href="" style={{textUnderlineOffset: "8px"}}>Kite user manual</a>
              <br/>
              <br/>
              <br/>
            </div>
            <div className="col-5 p-5">
              <h1 className="fs-4">Featured</h1>
              <ol>
                <li>
                  <a href="">Current Takeovers and Delisting - January 2024</a>
                  <br/>
                  <br/>
                </li>
                <li>
                  <a href="">Latest Intraday leverages - MIS & CO</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      {isOpen && (
        <div style={modalStyle}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/kite-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px"}}
                >
                  Kite
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Trading platform
                </p>
              </div>
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/console-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px" }}
                >
                  Console
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Backoffice
                </p>
              </div>
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/kite-connect-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px" }}
                >
                  Kite Connect
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Trading APIs
                </p>
              </div>
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/coin-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px" }}
                >
                  Coin
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Mutual funds
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <h6>Utilities</h6>
                <br />
                <p className="text-muted blueHover">Brokerage calculator </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Margin calculator
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Holiday calendar
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Markets
                </p>
              </div>
              <div className="col-4">
                <h6>Updates</h6>
                <br />
                <p className="text-muted blueHover">Z-Connect blog</p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Pulse News
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Circulars / Bulletin
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  IPOs
                </p>
              </div>
              <div className="col-4">
                <h6 className="mb-4">Education</h6>
                <div className="row">
                  <div className="col">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        margin: "0 auto",
                      }}
                      src="media/images/varsity-logo.png"
                    />
                    <br/><br/>
                    <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                      Varsity
                    </p>
                  </div>
                  <div className="col">
                  <img
                      style={{
                        width: "30px",
                        height: "30px",
                        margin: "0 auto",
                      }}
                      src="media/images/tqna-logo.png"
                    />
                    <br/><br/>
                    <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                     Trading Q&A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
const modalStyle = {
  position: "fixed",
  top: "50%",
  right: "10%",
  width: "700px",
  height: "380px",
  background: "white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  padding: "15px",
  transform: "translateY(-77%)",
};
export default Hero;
