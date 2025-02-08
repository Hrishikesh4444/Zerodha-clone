import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../GlobalStateContext";
function Hero() {
  const { isOpen } = useContext(GlobalStateContext);
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" className="mb-5" />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 text-center custom-button"
          style={{ width: "18%", margin: "0 auto" }}
        >
          <Link className="nav-link" to="/signup">
            Sign up for free
          </Link>
        </button>
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
