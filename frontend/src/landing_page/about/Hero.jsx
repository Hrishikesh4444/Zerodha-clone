import React,{useContext} from "react";
import { GlobalStateContext } from "../GlobalStateContext";
function Hero() {
  const { isOpen } = useContext(GlobalStateContext);
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-2 text-center mt-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="" style={{ textDecoration: "none" }}>
              saying about us
            </a>
            .
          </p>
        </div>
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
    </div>
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
